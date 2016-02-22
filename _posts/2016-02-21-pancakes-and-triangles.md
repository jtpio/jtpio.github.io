---
layout: post
title:  "Pancakes and Triangles"
date:   2016-02-21 15:00:00
categories:
- puzzle
- math
- python
- programming
---

## Introduction

[MathsJam](//twitter.com/MathsJam) is a good time to get to solve interesting puzzles with other people.

While the name suggests it is mostly focused on pure math, I prefer to approach the problems in a more pragmatic way, usually with the help of computer programs.

It's funny because coming to the solution this way always makes the others raise eyebrows: "Nah it doesn't really solve the problem, does it?" or "It's not proper math".

I came across this [video](https://youtu.be/1GKfEDvhWdY?t=441) by [James Grime](//twitter.com/jamesgrime) the other day, and found it amusing because this is exactly what he and [Matt Parker](//twitter.com/standupmaths) talked about.

Anyway, here are two puzzles with some kind of math aspect. For both of them, Python in conjunction with the [Jupyter Notebook](//jupyter.org) turned out to be **incredibly powerful tools!**

## Investigating Pancakes Stacks

> A stack of different sized pancakes can be sorted into size order by repeatedly inserting a spatula underneath one of the pancakes, and flipping the top section over.

> 1. What's the most flips you might need to sort a stack of four different sized pancakes?
> 2. With 6 pancakes, exactly two stacks exist that need 7 flips. Can you find one?

Sure many people have already worked on this since it is quite famous. Even [Bill Gates](//en.wikipedia.org/wiki/Pancake_sorting#The_original_pancake_problem) has apparently done some research on it.

We imagined the problem as a **graph**, and the number of flips as **distances between nodes**. So we used the great [networkx](//networkx.github.io/) library to facilitate graph creation and shortest paths calculations. Again, a super useful tool!

Here is a notebook detailing the different steps, with the Python code and some explanations: [Investigating pancake stacks Notebook](//nbviewer.jupyter.org/gist/jtpio/7100232ffa745b27f7df)

## Triangle Fraction

The original problem was found on Twitter, posted by [@math8_teacher](//twitter.com/math8_teacher/status/687639479457153025), and looks like this:

<img class="center" src="//gist.githubusercontent.com/jtpio/3f222251a25aa0b7898e/raw/7ed0f10212674f83ab6b4c5131cf38524fc8be7c/triangles_original.png" alt="Triangle Fraction">

> Three equilateral triangles. Which fraction is shaded?

While it's possible to solve it by hand with some time and geometry skills, it's even more fun to state the problem and let Python do the calcultations. The other good thing about using a program is that it makes it easier to extend to four, five or more triangles.

Again, here is the notebook: [Triangle Fractions Notebook](//nbviewer.jupyter.org/gist/jtpio/3f222251a25aa0b7898e/MathsJam-2016-01-19_Triangle_Fraction.ipynb)

## Questions?

The notebooks are concise but hopefully cover the main point. There might even be more extensions to these problems that will make them even more interesting.

So if after looking at the notebooks you have questions, suggestions or bug fixes, feel free to let me know!
