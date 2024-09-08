---
title: "Dynamic Programming in Python"
date: "Jul 26 2016"
draft: false
tags:
- Python
- Programming
slug: "dynamic-programming-python"
---

Playing with toy programming problems can be fun, and also be useful in order to revisit some concepts and preconceived ideas.

Here is one that I encountered recently, called *Staircases*: [acm.timus.ru/problem.aspx?num=1017&locale=en](http://acm.timus.ru/problem.aspx?num=1017&locale=en)

In short:

- The goal is to build staircases with bricks
- There are `N` bricks and *all of them* must be used to build a staircase
- Staircases consist of steps of different sizes in a strictly increasing order
- It is not allowed for a staircase to have steps of equal sizes
- Every staircase consists of at least two steps and each step contains at least one brick

The program reads the number of bricks `N` from the standard input, and outputs the number of possible staircases `C` to the standard output.

This problem can be solved using a technique called *Dynamic Programming*. There are already plenty of resources online covering the topic.

This post will be very practical. We will only focus on the use of Python (3.5.1+) for solving this problem, and describe different ways to approach it.

## Top-down

[Dynamic programming](//en.wikipedia.org/wiki/Dynamic_programming) is based on the concept of states or sub-problems, with the idea of finding a solution for a bigger problem given the solutions to sub-problems it depends on.

In this case, a state can be defined as: `(height of the current stair, number of bricks left)`. Moving to the next state is possible only if there are enough bricks left, under the constraint that the next stair must be higher than the previous.

In Python, it can be implemented like this:

```python
def count(height, left):
    # all the bricks have been used
    if left == 0:
        return 1

    # not enough bricks to build a new stair
    if left < height:
        return 0

    # either build a new stair now or try the next height (height + 1)
    return count(height + 1, left - height) + count(height + 1, left)

n = int(input())
print(count(1, n) - 1)
```

Let's try with a small number of bricks:

```
$ time echo 25 | python staircase_recurs_naive.py
141

real    0m0.054s
user    0m0.050s
sys     0m0.000s
```

It gives the right answer. And now with a bigger number `N`:

```
$ time echo 500 | python staircase_recurs_naive.py
...
```

I had to stop the execution as it was taking too long! The search space turns out to be quite big, which is why the program times out. The issue is caused by the same states being computed several times, which can be cached instead.

Since we are using Python, it would be great to add the caching mechanism in the most pythonic way. Fortunately, Python provides the `functools` module with a `lru_cache` [decorator](//docs.python.org/3/library/functools.html#functools.lru_cache). Let's try it. It is the same code as before with just two new lines.

```python
from functools import lru_cache

@lru_cache(maxsize=None)
def count(height, left):
    if left == 0:
        return 1
    if left < height:
        return 0
    return count(height + 1, left - height) + count(height + 1, left)

n = int(input())
print(count(1, n) - 1)
```

```
$ time echo 25 | python staircase_recurs_lru.py
141

real	0m0.074s
user	0m0.053s
sys	0m0.013s
```

Still gives the right answer. Let's try with a bigger N:

```
$ time echo 500 | python staircase_recurs_lru.py
...
  File "staircase_recurs_lru.py", line 10, in count
    return count(last + 1, left - last) + count(last + 1, left)
  File "staircase_recurs_lru.py", line 10, in count
    return count(last + 1, left - last) + count(last + 1, left)
  File "staircase_recurs_lru.py", line 6, in count
    if left == 0:
RecursionError: maximum recursion depth exceeded in comparison
```

Ouch, we hit the recursion limit. This is too bad, because the implementation looked very clean and **pythonic**. It felt like the right thing to do.
Although the use of function decorators is elegant, it adds extra function calls (a decorator is a wrapper function).

We can convince ourselves by looking at the source code for the `lru_cache`: [github.com/python/cpython/blob/3.5/Lib/functools.py#L391](//github.com/python/cpython/blob/3.5/Lib/functools.py#L391). Whenever the user function is called (our `count` function), many more functions will also be called (`decorating_function` > `wrapper` ...) to check if the value has already been computed before.

`sys.getrecursionlimit()` returns `1000` on my machine (CPython 3.5.1). So getting this RecursionError makes sense since the program will go at least 500 levels deep by just calling the `count` function (for the largest N), and the decorator adds 3 more levels of overhead in the worst case.

How to fix this?

### Increasing the recursion limit

The simplest is to raise the recursion limit.

```python
import sys
from functools import lru_cache

# max input = 500, and 3 overhead calls for the decorator (worst case),
# plus a safety margin
sys.setrecursionlimit(500 * 3 + 10)

@lru_cache(maxsize=None)
def count(height, left):
    if left == 0:
        return 1
    if left < height:
        return 0
    return count(height + 1, left - height) + count(height + 1, left)

n = int(input())
print(count(1, n) - 1)
```

Which runs quite decently:

```
$ time echo 500 | python staircase_recurs_lru.py
732986521245023

real	0m0.333s
user	0m0.317s
sys	0m0.013s
```

It *works* for this toy problem, BUT this can be considered quite dangerous for real programs. Python sets a recursion limit to avoid C stack overflows (CPython). So for real world applications, changing this limit must be done with care as advised in the [documentation](//docs.python.org/3.5/library/sys.html#sys.setrecursionlimit).

### Custom memoization

Another way to solve this problem without using decorators is to implement our own memoization. This basically means adding a dictionary or lookup table to retrieve solutions to sub-problems more quickly.


The implementation is straightforward as it is again just a slight modification of the previous code:

```python
n = int(input())
mem = [[-1 for j in range(n + 2)] for i in range(n + 2)]

def count(height, left):
    global mem
    if mem[height][left] != -1:
        return mem[height][left]

    if left == 0:
        return 1
    if left < height:
        return 0
    res = count(height + 1, left - height) + count(height + 1, left)
    mem[height][left] = res
    return res

print(count(1, n) - 1)
```

```
$ time echo 500 | python staircase_recurs.py
732986521245023

real	0m0.201s
user	0m0.183s
sys	0m0.013s
```

Not very pythonic but it does the job.

## Bottom-up

One way to avoid recursion problems is to build the solution *bottom-up* instead of top-down. The bottom-up approach is also called the tabular method, as it mainly consists of looping through a multi-dimensional array (usually 2D or 3D), starting from the base cases. I tend to think this method is slightly more difficult to implement, because it is not as intuitive as the top-down approach.

Here is one possible bottom-up implementation for the same problem:

```python
n = int(input())
m = [[0 for i in range(n + 1)] for j in range(n + 1)]
m[0][0] = 1  # base case

for last in range(1, n + 1):
    for left in range(0, n + 1):
        m[last][left] = m[last - 1][left]
        if left >= last:
            m[last][left] += m[last - 1][left - last]

print(m[n][n] - 1)
```

```
$ time echo 500 | python staircase_loop.py
732986521245023

real	0m0.241s
user	0m0.223s
sys	0m0.013s
```

The running time is similar to the top-down approach, but we can notice it is a little bit slower than for the custom memoization implementation. In the bottom-up approach, all the states are visited (2 for-loops => 500 ** 2 = 250000 states). In the top-down approach, only the states that are needed are computed. This is why sometimes one method will be faster than the other, depending on how frequently states are visited.

## Take away

Although Python could be well suited for toy problems like this one, the use of "magic" functions can sometimes trick us when we are not entirely sure what's happening under the hood.

The main issue with dynamic programming in Python is the recursive aspect of the method. Recursivity brings many function calls, and function calls in Python are slow due the additional overhead. In this post, we saw how to approach the same problem in different ways to overcome this issue.

That's it!
