---
layout: post
title:  "Aristotle Number Puzzle"
date:   2017-01-12 18:00:00
categories:
- python
- simulated annealing
- puzzle
---

([Link to the corresponding Jupyter Notebook](//nbviewer.jupyter.org/gist/jtpio/2d80fce07761e783a88146722625e2ad/Puzzle.ipynb))

I recently got a new wooden puzzle. And while it's usually fun to try to solve it manually, it's also very tempting to think of a way to solve it programmatically.

This one doesn't escape the rule. And since it's about numbers and additions, seems to be even more suitable to "computational brute-force".

## Representation

The puzzle looks like this:

<img class="center" src="/notebooks/aristotle_number_puzzle/./puzzle.jpg" alt="Puzzle photo" />

There are 15 rows and the goal is to make every row add up to 38.

It can be represented as follows:


{% highlight python %}
BOARD = '''
..a.b.c..
.d.e.f.g.
h.i.j.k.l
.m.n.o.p.
..q.r.s..
'''
{% endhighlight %}

Which corresponds to 15 equations, with all the numbers between 1 and 19 inclusive.

### Rows

$$  a + b + c = 38 $$

$$ d + e + f + g = 38 $$

$$ h + i + j + k + l = 38 $$

$$  m + n + o + p = 38 $$

$$ q + r + s = 38 $$

### Left diagonals

$$ a + d + h = 38 $$

$$ b + e + i + m = 38 $$

$$ c + f + j + n + q = 38 $$

$$ g + k + o + r = 38 $$

$$ l + p + s = 38 $$

### Right diagonals

$$ h + m + q = 38 $$

$$ d + i + n + r = 38 $$

$$ a + e + j + o + s = 38$$

$$ b + f + k + p = 38 $$

$$ c + g + l = 38 $$

Writing the representation in Python:


{% highlight python %}
import numpy as np
from string import ascii_lowercase as letters
{% endhighlight %}


{% highlight python %}
N = 19
TOTAL = 38
ids = list(range(N))
np.random.seed(0)
{% endhighlight %}

Rather than copying the equations manually one by one, let's have a function that does it automatically given a board layout.


{% highlight python %}
def generate_equations_from_board(board):
    b = np.array([list(s) for s in board.split('\n') if s], dtype=np.str)
    res = [''.join(np.asarray(line)).replace('.', '') for line in b]
    
    def parse_diagonals(mat):
        for i in range(-10, 10):
            s = ''.join(np.asarray(np.diag(mat, i))).replace('.', '')
            if s:
                yield s
                
    res += list(parse_diagonals(b)) + list(parse_diagonals(np.rot90(b.T)))
    return res
{% endhighlight %}


{% highlight python %}
equations = generate_equations_from_board(BOARD)
n_eq = len(equations)
goal = np.array([TOTAL] * n_eq)

assert n_eq == 15
{% endhighlight %}

Let's also define a function to print the solution with an hexagonal shape, so it's easier to visualize with the wooden puzzle.


{% highlight python %}
def print_board(layout, values):
    board = layout
    for c in layout:
        if c in letters:
            board = board.replace(c, str(values[letters.index(c)]).zfill(2))
    board = board.replace('.', '  ')
    print(board)
{% endhighlight %}

That we can test with a random ordering:


{% highlight python %}
print_board(BOARD, np.random.permutation(ids) + 1)
{% endhighlight %}

    
        11  02  09    
      19  15  17  07  
    05  03  06  14  10
      08  18  12  04  
        01  16  13    
    


It looks good enough!

There are a few ways to solve puzzle. In our case, we will look at two different approaches: stochastic and exact.

## Simulated Annealing

The first approach that we can try is called [Simulated Annealing](https://en.wikipedia.org/wiki/Simulated_annealing). I tend to think of it as the "lazy" option because we simply define the state of the problem and let the computer search a solution for us. Here are the steps involved:

- Start from a random board.
- Constantly swap two pieces and see if we are getting closer to the solution.
- Sometimes, keep the new board even though it doesn't look better at first, because it might get better later (escaping the local minima).

Let's first represent the system of linear equations as a matrix.


{% highlight python %}
m = np.mat([[1 if letters[i] in eq else 0 for i in range(N)] for eq in equations])
m
{% endhighlight %}




    matrix([[1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
            [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0],
            [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
            [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
            [0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1]])



Simulated annealing also requires two main functions:

- `neighbor`: to generate a new board from the current one
- `cost`: to evaluate the quality of the current board


{% highlight python %}
def neighbor(board):
    # take to pieces and swap them
    new_board = np.array(board)
    i, j = np.random.choice(ids, 2)
    new_board[i], new_board[j] = new_board[j], new_board[i]
    return new_board


def cost(board):
    # calculate how far the current board is from the goal board (full of 38)
    v = board * m.T
    return np.linalg.norm(goal - v, 1)
{% endhighlight %}

We can build on top of that and implement the simulated annealing routine.


{% highlight python %}
def solve_sa(layout):
    np.random.seed(0)
    # initial state: [1, 2, ..., 19]
    solution = np.array(list(range(1, N + 1)))
    curr_cost = cost(solution)
    temp, alpha, it = 1.0, 0.995, 0
    while curr_cost > 0:
        new_solution = neighbor(solution)
        new_cost = cost(new_solution)
        diff = new_cost - curr_cost
        if diff <= 0 or np.exp(-diff / temp) > np.random.rand():
            solution = new_solution
            curr_cost = new_cost

        if it % 500 == 0 and temp > 0.2:
            temp *= alpha
            
        it += 1
    
    print('Found after', it, 'iterations:\n')
    print_board(layout, solution)
{% endhighlight %}


{% highlight python %}
%time solve_sa(BOARD)
{% endhighlight %}

    Found after 496207 iterations:
    
    
        15  13  10    
      14  08  04  12  
    09  06  05  02  16
      11  01  07  19  
        18  17  03    
    
    CPU times: user 41.3 s, sys: 133 ms, total: 41.4 s
    Wall time: 41.4 s


Yes, we found a solution, even though it took some time. Numpy makes it handy to do matrix multiplications, but comes at a cost with lots of time spent creating arrays over and over.

Another thing to notice: the parameters for the simulated annealing routine (temperature decay, minimum temperature...) were choosen after a few tries and influence quite a lot the time it takes for the algorithm to terminate.

Alright, now the cool thing is that we can simply put the pieces of wood in the right order (and pretend to be thinking hard for the people watching behind):

<img class="center" src="/notebooks/aristotle_number_puzzle/./solution.jpg" alt="Solution" />

## Recursive approach

There is another way to tackle the puzzle, in a more exact and predictive manner.

Here is the idea:

- Place the pieces one by one and in order on the board
- If the new configuration conflicts with the equations, remove the last piece and continue with the next one

At first, it sounds like a brute-force approach. And it is. There are 19 pieces to place at 19 different spots, which gives:


{% highlight python %}
from math import factorial
print(19 ** 19, 'configurations with repetition of numbers.')
print(factorial(19), 'permutations.')
{% endhighlight %}

    1978419655660313589123979 configurations with repetition of numbers.
    121645100408832000 permutations.


Needless to say that it is too big. Fortunately, brute forcing is still possible if we can prune many branches early when some of the equations are not met.

Using the default board order:


{% highlight python %}
print(BOARD)
{% endhighlight %}

    
    ..a.b.c..
    .d.e.f.g.
    h.i.j.k.l
    .m.n.o.p.
    ..q.r.s..
    


Initializing the board with zeros, and starting to place the pieces recursively (a, then b, then c), we get:


{% highlight python %}
tmp_board = [0] * N
for pos, piece in enumerate('abc'):
    tmp_board[letters.index(piece)] = pos + 1
print_board(BOARD, tmp_board)
{% endhighlight %}

    
        01  02  03    
      00  00  00  00  
    00  00  00  00  00
      00  00  00  00  
        00  00  00    
    


The first line is full, but the numbers don't add up to 38. In that case there is no need to continue placing the 16 other pieces and the branch can be cut early.

The key part of the recursive approach can be implemented in a `is_valid` function which decides whether a board configuration is valid or not. A board is valid if **for each of the 15 equations**:

- The equation is not full yet (less than 3 numbers known)
- or the equation is full and the numbers add up to 38

Instead of writing all the tests for the 15 equations by hand, we can once again generate them automatically:


{% highlight python %}
def generate_is_valid_function(board):
    eqs = generate_equations_from_board(board)
    # check smaller equations first
    eqs.sort(key=lambda eq: len(eq))
    code = []
    for eq in eqs:
        # place the large positions first because they are more likely to
        # be empty, which will make the test will fail faster
        pos = [letters.index(c) for c in eq]
        pos.sort(key=lambda p: -p)
        summation = ' + '.join('b[%s]' % p for p in pos) + ' == %s' % TOTAL
        full = ' and '.join('b[%s]' % p for p in pos)
        code.append('((%s) or not (%s))' % (summation, full))
    
    return 'def is_valid(b):\n\treturn (' + ' and\n\t\t'.join(code) + ')'
    
code = generate_is_valid_function(BOARD)

print('Code:')
print(code)

print('Evaluating the code...')
# 'is_valid' goes under the global scope
exec(code)
assert 'is_valid' in globals()
print('done.')
{% endhighlight %}

    Code:
    def is_valid(b):
        return (((b[2] + b[1] + b[0] == 38) or not (b[2] and b[1] and b[0])) and
            ((b[18] + b[17] + b[16] == 38) or not (b[18] and b[17] and b[16])) and
            ((b[16] + b[12] + b[7] == 38) or not (b[16] and b[12] and b[7])) and
            ((b[11] + b[6] + b[2] == 38) or not (b[11] and b[6] and b[2])) and
            ((b[7] + b[3] + b[0] == 38) or not (b[7] and b[3] and b[0])) and
            ((b[18] + b[15] + b[11] == 38) or not (b[18] and b[15] and b[11])) and
            ((b[6] + b[5] + b[4] + b[3] == 38) or not (b[6] and b[5] and b[4] and b[3])) and
            ((b[15] + b[14] + b[13] + b[12] == 38) or not (b[15] and b[14] and b[13] and b[12])) and
            ((b[17] + b[13] + b[8] + b[3] == 38) or not (b[17] and b[13] and b[8] and b[3])) and
            ((b[15] + b[10] + b[5] + b[1] == 38) or not (b[15] and b[10] and b[5] and b[1])) and
            ((b[12] + b[8] + b[4] + b[1] == 38) or not (b[12] and b[8] and b[4] and b[1])) and
            ((b[17] + b[14] + b[10] + b[6] == 38) or not (b[17] and b[14] and b[10] and b[6])) and
            ((b[11] + b[10] + b[9] + b[8] + b[7] == 38) or not (b[11] and b[10] and b[9] and b[8] and b[7])) and
            ((b[18] + b[14] + b[9] + b[4] + b[0] == 38) or not (b[18] and b[14] and b[9] and b[4] and b[0])) and
            ((b[16] + b[13] + b[9] + b[5] + b[2] == 38) or not (b[16] and b[13] and b[9] and b[5] and b[2])))
    Evaluating the code...
    done.


The recursive search implements the trial and error idea. The `find_all` parameter can be used to continue the search beyond the first match.


{% highlight python %}
def solve_recursive(layout, find_all=False):
    board = [0] * N
    used = [0] * (N + 1)
    
    def place(i):
        if i == N:
            # base case, all the pieces are on the board
            print_board(layout, board)
            return not find_all
        
        for j in range(1, N + 1):
            if used[j]:
                # piece number j already used
                continue
                
            # place the piece on the board
            board[i] = j
            used[j] = 1
            
            # stop the recursion if the current configuration
            # is not valid or a solution has been found
            if is_valid(board) and place(i + 1):
                return True
            
            # remove the piece from the board
            board[i] = 0
            used[j] = 0
            
        return False
    
    place(0)
{% endhighlight %}


{% highlight python %}
%time solve_recursive(BOARD)
{% endhighlight %}

    
        03  17  18    
      19  07  01  11  
    16  02  05  06  09
      12  04  08  14  
        10  13  15    
    
    CPU times: user 6.73 s, sys: 0 ns, total: 6.73 s
    Wall time: 6.73 s


The program terminates rather quickly compared to the stochastic approach. However, we notice that the first number is a 3, which means that it was still the beginning of the search.

One speed improvement is to first check the equations with only 3 numbers, as they will fail the test quicker than equations with 4 or 5 numbers.

It means that the board must be reordered to first fill the equations with 3 numbers, and then the others. The iteration goes through the numbers in order from 1 to 19, so the board can be reordered in a spiral manner:


{% highlight python %}
ALT_BOARD = '''
..a.b.c..
.l.m.n.d.
k.r.s.o.e
.j.q.p.f.
..i.h.g..
'''
exec(generate_is_valid_function(ALT_BOARD))
%time solve_recursive(ALT_BOARD)
{% endhighlight %}

    
        03  17  18    
      19  07  01  11  
    16  02  05  06  09
      12  04  08  14  
        10  13  15    
    
    CPU times: user 493 ms, sys: 6.67 ms, total: 500 ms
    Wall time: 501 ms


Same result, but much faster!

Now that all the tools are defined, we can let the program run a bit longer to find other solutions, which will for most of them only be symetries of the one found above.


{% highlight python %}
%time solve_recursive(ALT_BOARD, find_all=True)
{% endhighlight %}

    
        03  17  18    
      19  07  01  11  
    16  02  05  06  09
      12  04  08  14  
        10  13  15    
    
    
        03  19  16    
      17  07  02  12  
    18  01  05  04  10
      11  06  08  13  
        09  14  15    
    
    
        09  11  18    
      14  06  01  17  
    15  08  05  07  03
      13  04  02  19  
        10  12  16    
    
    
        09  14  15    
      11  06  08  13  
    18  01  05  04  10
      17  07  02  12  
        03  19  16    
    
    
        10  12  16    
      13  04  02  19  
    15  08  05  07  03
      14  06  01  17  
        09  11  18    
    
    
        10  13  15    
      12  04  08  14  
    16  02  05  06  09
      19  07  01  11  
        03  17  18    
    
    
        15  13  10    
      14  08  04  12  
    09  06  05  02  16
      11  01  07  19  
        18  17  03    
    
    
        15  14  09    
      13  08  06  11  
    10  04  05  01  18
      12  02  07  17  
        16  19  03    
    
    
        16  12  10    
      19  02  04  13  
    03  07  05  08  15
      17  01  06  14  
        18  11  09    
    
    
        16  19  03    
      12  02  07  17  
    10  04  05  01  18
      13  08  06  11  
        15  14  09    
    
    
        18  11  09    
      17  01  06  14  
    03  07  05  08  15
      19  02  04  13  
        16  12  10    
    
    
        18  17  03    
      11  01  07  19  
    09  06  05  02  16
      14  08  04  12  
        15  13  10    
    
    CPU times: user 15.1 s, sys: 3.33 ms, total: 15.1 s
    Wall time: 15.1 s


## Take away

Using the simulated annealing approach, we found one solution and stopped the program. It was quick to implement and didn't require deep thinking. It was however easily stuck in local optima, with most of the equations equal to 38 and a few equal to 37 or 39. It also required quite a lot of parameter tweaking (number of iterations and temperature decay) to get the program to converge fast.

The second approach has the advantage of finding all the solutions rather quickly. It requires a bit more analysis and a better representation of the problem, but speeds up the search significantly.

Regarding the execution speed, the Python program takes a bit more than 10 seconds to output the 12 solutions, which is reasonnable. I implemented the same logic in C++ just by curiosity (available [here](//gist.githubusercontent.com/jtpio/2d80fce07761e783a88146722625e2ad/raw/314978bdbee355372d440ffa7977d7bb67c544c6/solver.cpp)), and the program terminates in a fraction of a second. If we want blazing fast programs, it is always possible to use a more adequate programming language for that!

And that concludes it, for another toy puzzle shamelessly solved with code :)
