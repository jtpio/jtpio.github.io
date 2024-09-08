---
title: "p5.js in the Jupyter Notebook for custom interactive visualizations"
date: "Feb 22 2018"
draft: false
tags:
- Jupyter
- p5.js
- Puzzle
- Visualization
slug: "p5js-jupyter-notebook-widgets"
---

I have recently been experimenting with [p5.js](https://p5js.org), the Jupyter Notebook and of course Python alltogether. The purpose was to see what can be achieved when combining the strengths of each of these amazing tools. In the end we can get a better understanding of what it takes to:

- Solve a toy wooden puzzle while staying in the Jupyter Notebook
- Visualize how recursion works
- For that purpose, create a Jupyter Widget to sync the state of the Python kernel with the frontend (web page)

The end result looks like the following:

<iframe
  class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
  src="https://www.youtube.com/embed/lW7mo-9TqEQ"
  allowfullscreen
></iframe>

## Try it

It is also possible to try and run the notebook with Binder, so you can play with the animations and experiment by yourself right away:

https://mybinder.org/v2/gh/jtpio/p5-jupyter-notebook/master?filepath=puzzle.ipynb

## Source

The source code (or source Jupyter Notebook) is of course available on GitHub: https://github.com/jtpio/p5-jupyter-notebook

Feel free to discuss anything right here in the comments, or on Github by opening an issue. Contributions and new ideas are always welcome!
