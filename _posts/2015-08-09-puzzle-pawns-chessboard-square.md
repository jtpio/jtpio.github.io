---
layout: post
title:  "Puzzle: Pawns on a chessboard"
date:   2015-08-09 14:00:00
categories:
- puzzle
- math
- programming
- python
---

## Introduction
There are times when you need to change ideas and think about something else. In these situations, I like to find a little puzzle, so I can get my mind busy and hopefully solve it.
It doesn't have to be something very difficult. It is often an high school / undergraduate math exercise, a tricky brain teaser, or a problem involving the use of clever algorithms.

Today's puzzle comes from the last [MathsJam](https://twitter.com/MathsJam) Shout, July 2015 edition, gracefully stated by the peeps from Guildford, UK.

The statement is as follow:

<img class="center" alt="Problem statement" src="/res/puzzles/mjshout_2015_07/pawns.png">

A simple statement opening on an interesting question. This is the usual type of puzzles that you can encounter during a MathsJam evening.

In the rest of the post, I would like to present you a way to attack this puzzle, and to show that even though an event like MathsJam might sound scary (why would people meet and do math, are they insane?), it's actually a good opportunity to use different skills.

The problem requires *basic math knowledge, combinatorics, intuition, and optional programming skills* in order to experimentally verify the solution.
It is also a good opportunity to use the power of Wolfram Alpha to simplify formulas and make some calculations faster.

<div class="alert alert-warning bigger" role="alert">
Now is time to try to solve it by yourself, if you want of course.
</div>

## Walktrough

### Strategy

For the [last puzzle](http://www.jtp.io/2015/06/19/solving-schoenbrunn-math-puzzle.html), we first found a solution manually, and then worked out a computer program to find the answer faster.

This time, we will find the correct answer *manually* (with maths, pen and paper), and use a program to experimentally verify the results.
We will solve the general case for a $$ n*m $$ board.

This puzzle involves counting the number of possible squares that can be formed when putting four random pawns on a $$ n*m $$ board.
Knowing that value, it is possible to calculate the probability of forming square:

$$
p_{square} = \frac{\text{number of ways to form a square in a n*m board}}{\text{number of ways to put 4 pawns on a n*m board}}
$$

The denominator corresponds to the number of ways to choose four pawns on a chess $$ n*m $$ chessboard: $$ \binom{n*m}{4} $$.

The nominator is the value we are looking for. Let's call it **S**.

The probability becomes:

$$
p_{square} = \frac{S}{\binom{n*m}{4}}
$$

### Counting the squares
The following approach will follow **more an intuitive way than a rigorous proof**. The idea is to see what is happening and to establish a formula based on observations.

Let's take an example. We start with a square located in the top-left corner of the chessboard, with a "side" equal to 5 for example. 5 represents in that case the **number of tiles**, but and not the actual length (the length is not important).

For each position of the square, we move the four vertexes of the square by one unit on each edge. We can do that only 4 times since it is a square of side 5. The 5th configuration is the same as the starting one. Each rotation generate a new square, tilted, which has a different side (but it doesn't matter).

The next iteration is to move one step to the right, and repeat. At the end of a row, move one step down and repeat. Stop after reaching the end of the chessboard.

All of these translations and rotations generate all the squares based on an **original square of side** 5. But there are many other squares of different side length. The smallest original square has a side of 2 and the largest 8. To count all the squares, the steps above must be repeated for a side length going from 2 to 8.

<img class="center" alt="Problem statement" src="/res/puzzles/mjshout_2015_07/example_1.png">

By using $$ n $$ for the width and $$ m $$ for the height, and $$ i $$ for the length of the side, we can rewrite it for the general case with one formula:

$$
S = \sum_{i=2}^{min(n,m)} (n-i+1)(m-i+1)(i-1)
$$

The sum goes for $$ i $$ from $$ 2 $$ (not smaller otherwise we can't define a square), up to $$ min(n,m) $$. If $$ n > m $$ for example, the square of side $$ n $$ will be too big for the board, so the maximum size has to be the minimum of $$ n $$ and $$ m $$.

With the help of [Wolfram Alpha](https://www.wolframalpha.com/), we can simplify the formula for both cases:

For [min(n, m) = n](http://www.wolframalpha.com/input/?i=sum+of+%28%28n-i%2B1%29*%28m-i%2B1%29*%28i-1%29%29+for+i+from+2+to+n):

$$ S = \frac{1}{12}n(n^2-1)(2m - n) $$

For [min(n, m) = m](http://www.wolframalpha.com/input/?i=sum+of+%28%28n-i%2B1%29*%28m-i%2B1%29*%28i-1%29%29+for+i+from+2+to+m):

$$ S = -\frac{1}{12}m(m^2-1)(m-2n) $$

[Putting it all together](http://www.wolframalpha.com/input/?i=%28sum+of+%28%28n-i%2B1%29*%28n-i%2B1%29*%28i-1%29%29+for+i+from+2+to+n%29+%2F+%28n%5E2+choose+4%29) for $$ n = m $$ for the case of the chessboard:

$$ p_{square} = \frac{\frac{1}{12}n^2(n^2-1)}{\binom{n^2}{4}} = \frac{2}{(n^2-3)(n^2-2)}  $$

Applying for [n = 8](http://www.wolframalpha.com/input/?i=2%2F%28%28-3%2Bn%5E2%29+%28-2%2Bn%5E2%29%29+for+n+%3D+8):

$$ p_{square} = \frac{2}{(8^2-3)(8^2-2)} = \frac{1}{1891} \approx{0.0005288} \approx{0.053}\%   $$

### Verifying with a program
Now that we have a formula valid for the general case, it would be interesting to experimentally verify its validity with a program.

1. Define the parameters n and m (8 and 8 for example)
2. Put 4 pawns randomly on the board. The 4 pawns have to be placed at different positions.
3. Determine whether the pawns form a square or not. If yes, count that round as successful.
4. Repeat from step 2, a lot of times.
5. The probability is obtained by dividing the number of successful attempts (forming a square) by the number of total iterations.

This scenario can be easily implemented in Python.

{% highlight python %}
import random
from collections import Counter

# The size of the board
N = 8
M = 8

# One round consists of placing 4 pawns randomly on a board.
def round():
    points = []
    while len(points) < 4:
        p = random.randint(0,N-1), random.randint(0,M-1)
        if p not in points:
            points.append(p)


    dists = []
    for p in points:
        for v in points:
            if p != v:
                dists.append((p[0]-v[0])**2 + (p[1]-v[1])**2)

    c = list(Counter(dists))
    # Square if there are exactly 2 different distances
    # and one should be double the other (since we talk in squares
    # and not actual ditances)
    return len(c) == 2 and (c[1] == 2*c[0] or c[0] == 2*c[1])

T, s = 1000000, 0
# Repeat many times
for i in range(T):
    square = round()
    s += 1 if square else 0

print ('Probablity to form a square:', s / T)

{% endhighlight %}

Which outputs:

{% highlight text %}
Probablity to form a square: 0.000518
{% endhighlight %}

The value is pretty close to the calculated one. Of course it is not exactly equal, and running the program again would output a different value. But it is approximately equal, and it is a good way to verify that the **order of magnitude is good correct**.

## Conclusion
Once again, nice puzzle, without having to be too complicated.
Even though in the beginning I had no idea what probability to expect for a 8x8 chess board, I have to admit I am a bit surprised by how low the value is.

The formula says that the chances become smaller and smaller as $$ n $$ and $$ m $$ get bigger. This could be visualized by plotting a 3D representation of the formula and looking at the shape generated.

Still, it is once again enjoyable to mix both pure math and computer science for fun.

Some might say these kind of puzzles are completely useless. Yet I found them of interest.

Ask someone: "What do you think is the chance of forming a square by placing four pawns randomly on a chess board?".
It could be amusing to see if the predictions are close the real number or not.
