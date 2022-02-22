---
layout: post
title:  "An embeddable REPL powered by JupyterLite 💡"
date:   2022-02-22 09:00:00
categories:
- jupyter
- jupyterlite
- repl
---

Long time no see!

For the past years I have been pretty busy contributing to open source projects within the Jupyter ecosystem on <a href="https://github.com/jtpio">GitHub</a>.

Most of my blog post have then be published on the <a href="https://medium.com/@jeremy.tuloup">Jupyter Blog on Medium</a>.

Here is a quick update of one the most recent Jupyter projects.

## JupyterLite - Wasm powered Jupyter running in the browser 💡

One of the projects I have been busy with recently is JupyterLite.

JupyterLite is a JupyterLab distribution that runs entirely in the browser built from the ground-up using JupyterLab components and extensions.



<h1 style="text-align:center;">
  <img
      alt="JupyterLite"
      src="https://raw.githubusercontent.com/jupyterlite/jupyterlite/main/docs/_static/icon.svg"
      width="256"
    />
</h1>

## The case for a standalone REPL

With JupyterLite you can create fully interactive static website with the JupyterLab and RetroLab interfaces.

What makes it interesting is that you can also create custom applications with other JupyterLab widgets and extensions.

This gave the idea of creating a small and more minimal application to only expose a REPL to the users. The REPL can be easily embedded on existing websites.

This is for example the case on the <a href="https://numpy.org">numpy.org</a> website, which now includes an interactive code console powered by JupyterLite to let users try NumPy in the browser:

  <img
      alt="numpy.org website"
      src="https://user-images.githubusercontent.com/591645/155103226-860073fd-885f-473c-8a3a-61f2e6de6b1b.png"
      width="100%"
    />

## Try it

Since it is easy to embed, you can add the REPL to almost any website with an IFrame. For example in this post:

<iframe
  src="https://replite.vercel.app/repl?toolbar=1&kernel=python&theme=JupyterLab Dark"
  width="100%"
  height="600px"
>
</iframe>

## References

Make sure to check out the JupyterLite documentation to learn how deploy your own website and start embedding REPLs!

<a href="https://jupyterlite.readthedocs.io">jupyterlite.rtfd.io</a>