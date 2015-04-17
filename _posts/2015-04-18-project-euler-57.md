---
layout: post
title:  "Thoughts on Project Euler problem 57"
categories:
- math
- algorithms
- python
---

I haven't visited the [Project Euler](https://projecteuler.net/) website for a while. But they recently announced new awards (trophies), for example the *Flawless Fifty* for 50 consecutive problems (this one is done!) and *C for Commitment* for solving the first 100 problems (feasible).

So I picked one of the problems I hadn't done before just for fun: [Problem 57](https://projecteuler.net/problem=57)

The statement is as follow:

It is possible to show that the square root of two can be expressed as an infinite continued fraction.

$$\sqrt 2 = 1 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2 + ... }}} = 1.414213...$$

By expanding this for the first four iterations, we get:

$$ 1 + \frac{1}{2} = \frac{3}{2} = 1.5 $$

$$ 1 + \frac{1}{2 + \frac{1}{2}} = \frac{7}{5} = 1.4 $$

$$ 1 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2}}} = \frac{17}{12} = 1.41666... $$

$$ 1 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2 + \frac{1}{2}}}} = \frac{41}{29} = 1.41379... $$

The next three expansions are 99/70, 239/169, and 577/408, but the eighth expansion, 1393/985, is the first example where the number of digits in the numerator exceeds the number of digits in the denominator.

In the first one-thousand expansions, how many fractions contain a numerator with more digits than denominator?

## First solution

I usually love using Python for solving these kind of problems, as the solution end up being simple to read and very elegant.

Python has support for fractions thanks to the ```fractions``` package, so let's use it!
Putting the *1* appart for now, we can see that the first term is $$ a_0 = \frac{1}{2} $$, and the second is $$ a_1 = \frac{1}{2 + \frac{1}{2}} $$, which is the same as $$ a_1 = \frac{1}{ 2 + a_0 } $$. Then by construction, $$ a_{n+1} = \frac{1}{2 + a_n} $$

With the fractions module, it is very easy to access the numerator and denominator.

{% highlight python %}
from fractions import Fraction

res, an = 0, Fraction(1, 2)
for i in range(1, 1001):
    an = Fraction(1, 2 + an)
    tmp = an + 1 # don't forget the first one
    if len(str(tmp.numerator)) > len(str(tmp.denominator)):
        res += 1

print(res)
{% endhighlight %}

Running time on machine:
{% highlight text %}
real    0m0.462s
user    0m0.457s
sys     0m0.003s
{% endhighlight %}

## Improvement
By analysing the pattern between the different (final) terms of the serie ($$ \frac{3}{2}, \frac{7}{5}, \frac{17}{12}... $$), we can notice that the numerators and denominators follow a simple relation (simultanous update):

$$ next\_numerator = 2 * prev\_denominator + prev\_numerator $$

$$ next\_denominator = prev\_numerator + prev\_denominator $$

For instance, $$ 7 = 2*2 + 3 $$ and $$ 5 = 3 + 2 $$.

Written in Python:
{% highlight python %}
res, n, d = 0, 3, 2
for i in range(1, 1001):
    n, d = 2*d + n, n + d
    if len(str(n)) > len(str(d)):
        res += 1

print(res)
{% endhighlight %}

{% highlight text %}
real    0m0.036s
user    0m0.030s
sys     0m0.003s
{% endhighlight %}

This ends up being a pretty good speed boost!

## Another approach?
I have been thinking of another approach to solve this problem, but could not come up with simpler code than the one mentioned above.

In both solutions, numbers get big pretty quickly and the calculations are made using big integers, which slows things down but seems to be inevitable.

Any idea? Feel free to share!