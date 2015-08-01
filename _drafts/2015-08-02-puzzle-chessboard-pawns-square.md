---
layout: post
title:  "Puzzle: Pawns on a chessboard"
date:   2015-08-02 15:00:00
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

### Counting the number of squares
It is possible to visually express how to count the number of squares.

**INSERT A SEQUENCE OF DRAWINGS**

Which yields the following formula:

$$
S = \sum_{i=2}^{min(n,m)} (n-i+1)(m-i+1)(i-1)
$$

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
Now that we have a formula valid for the general case, it would be interesting to experimentally verify its validity with the program.

1. Define puzzle parameters n and m (8 and 8 for example)
2. Put 4 pawns randomly on the board. The 4 pawns have to occupy different positions.
3. Determine whether the pawns form a square or not. If yes, count that round as successful.
4. Repeat from step 2, a lot of times.
5. The probability is obtained by dividing the number of successful attempts (forming a square) by the number of iterations.

## More

Add a 3D matplotlib graph plotting the equation for m and n from 2 to 1000 for example and look at the shape of the surface?

## Conclusion
Once again, nice puzzle, without having to be too complicated.
Even though in the beginning I had no idea what probability to expect for a 8x8 chess board, I have to admit I am a bit surprised by how low the value is.

However it is once again enjoyable to mix both pure math and computer science for fun.
Some might say these kind of puzzles are completely useless. Yet I found them of interest. Ask someone: "What do you think is the chance of forming a square by placing four pawns randomly on a chess board?" It could be amusing to see if the predictions are close the real number or not.
