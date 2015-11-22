---
layout: post
title:  "Ant Colony Optimization Visualization for the Traveling Salesman Problem"
date:   2015-11-22 12:00:00
categories:
- algorithms
- javascript
- programming
---

## Problem statement

The Traveling Salesman Problem is fascinating.

The problem statement (from [Wikipedia](//en.wikipedia.org/wiki/Travelling_salesman_problem)) is as follows:

> Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?

It might sound like a straightforward problem, but it appears to be hard to solve (find an exact solution) in a reasonable amount of time when the number of cities is large.

## Motivation

A lot of work and research have already been done about this topic. Many algorithms exist to find an exact or an approximate solution to the problem.

Here are two good resources (among others) to get started:

1. The [Wikipedia page](//en.wikipedia.org/wiki/Travelling_salesman_problem) provides a clear overview.
2. For a more in-depth analysis with real Python code: Peter Norvig made an [excellent iPython notebook](//nbviewer.ipython.org/url/norvig.com/ipython/TSPv3.ipynb). This notebook contains the implementations of different techniques. A very interesting read.

Given these two resources, what I would like to present in this post is not another technical and exhaustive analysis, since it has already been done many times by experts in that field.

What I would like to show instead is more of a **game oriented** approach.

Sometimes, in games, it is necessary to determine the shortest tour between n cities. And most of the time in games, an approximate (but still good enough) solution works fine.

There is one approach that can be integrated without too many complications. It is called the **Ant Colony Optimization**, a genetic algorithm that gives an approximate solution to the problem. Starting with a generally bad tour (random), the solution keeps improving after a few iterations. By distributing this technique over several frames, it is possible to get a good result without blocking the game loop.

## Ant Colony System

Here is what an Ant Colony System does (from the Wikipedia article):

> ACS sends out a large number of virtual ant agents to explore many possible routes on the map. Each ant probabilistically chooses the next city to visit based on a heuristic combining the distance to the city and the amount of virtual pheromone deposited on the edge to the city. The ants explore, depositing pheromone on each edge that they cross, until they have all completed a tour. At this point the ant which completed the shortest tour deposits virtual pheromone along its complete tour route (global trail updating). The amount of pheromone deposited is inversely proportional to the tour length: the shorter the tour, the more it deposits.

The Ant Colony System is well explained in the book [Clever Algorithms](//www.cleveralgorithms.com/) by Jason Brownlee.

The implementation is based on the algorithm described in this book. Instead of paraphrasing the author, let's just refer to the original web page for all the details and explanations:
[cleveralgorithms.com/nature-inspired/swarm/ant_colony_system.html](//www.cleveralgorithms.com/nature-inspired/swarm/ant_colony_system.html)

## Visualization

I implemented the algorithm described in the *Clever Algorithms* book and made a visualization for it, to get a visual feedback and see how the solution evolves after a few iterations. Some parameters are tweakable.

<p class="bigger">
  <a href="//jtpio.github.io/aco-tsp">jtpio.github.io/aco-tsp</a>
</p>

<a href="//jtpio.github.io/aco-tsp"><img class="center" src="/res/aco-tsp/screenshot.png" alt="Jammer use case"></a>

## Applications

The main idea behind this experiment was to implement a technique for solving the Traveling Salesman Problem when the exact solution is not essential, and an approximate approach is instead enough.

Playing with the visualization, I noticed that the number of iterations needed to find a *good enough* solution was relatively low.

In the context of games, this iterative technique seems to be totally suitable because it can dynamically adapt to changes, yield a solution quickly (even though it is not the best), and improve on it over time.

There must already exist tons of work on how to solve the TSP in video games, and it would be interesting to learn more about it. If you know any tip, book or paper about that topic, feel free to share!

