---
layout: post
title:  "p5.js in the Jupyter Notebook for custom interactive visualizations"
date:   2018-02-22 18:00:00
categories:
- jupyter
- jupyter widgets
- p5.js
- puzzle
- visualization
---

I have recently been experimenting with [p5.js](https://p5js.org), the Jupyter Notebook and of course Python alltogether. The purpose was to see what can be achieved when combining the strengths of each of these amazing tools. In the end we can get a better understanding of what it takes to:

- Solve a toy wooden puzzle while staying in the Jupyter Notebook
- Visualize how recursion works
- For that purpose, create a Jupyter Widget to sync the state of the Python kernel with the frontend (web page)

The end result looks like the following:

<img class="center" src="https://raw.githubusercontent.com/jtpio/p5-jupyter-notebook/master/img/animation.gif" alt="Animation Gif" />

## Try it

It is also possible to try and run the notebook with Binder, so you can play with the animations and experiment by yourself right away:

[https://mybinder.org/v2/gh/jtpio/p5-jupyter-notebook/master?filepath=puzzle.ipynb](https://mybinder.org/v2/gh/jtpio/p5-jupyter-notebook/master?filepath=puzzle.ipynb)

## Source

The source code (or source Jupyter Notebook) is of course available on GitHub: [https://github.com/jtpio/p5-jupyter-notebook](https://github.com/jtpio/p5-jupyter-notebook)

Feel free to discuss anything right here in the comments, or on Github by opening an issue. Contributions and new ideas are always welcome!
