---
layout: post
title:  "Tips to make a multiplayer game at a game jam"
date:   2015-09-26 14:00:00
categories:
- game
- javascript
- programming
- tools
---

## At a Game Jam

Suppose you go to a game jam and would like to create a multiplayer game. You talk about it with other people, and here is what you here:

- "Multiplayer games are too difficult to make"
- "You won't even have time to make everything talk together"
- "You will fail"
- ...

That's right, multiplayer games are hard to implement, especially under time constraints and pressure. It is a crazy idea to even consider it at a game jam.

However, the networking part of a game is similar to other aspects like graphics, physics and artificial intelligence. If you come with the right tools and frameworks (a game engine for example), getting started will become easier and will speed up the process of game creation.

This post will give an insight on how to tackle this challenge.

## What type of multiplayer game?

Ths type of game covered in this post is:

- **Web based**
- Written in **Javascript**
- Players connect to a common screen

The type of interactions is illustrated below.

<img class="center" src="/res/jammer/setup.png" alt="Jammer use case">

## Tips

The key point in a game jam is to try to save as much time as possible when it comes to technical details. **Knowing the tech and the tools is crucial**.

- More generally and as a prerequisite, make sure to use a familiar **game engine**. If you want to take the opportunity of the game jam to learn a new engine, take some days a few days before to at least grasp the cover the basics.
- Use a **networking framework** to cover the communication layer. Refer to the [next section](#what-to-use) for suggestions. You can also make your own tech before and bring it in your tool box.
- The first implementation is to make sure the networking part is working as intended. It is specially important if the multiplayer aspect is at the core of the gameplay.

## What networking framework to use? <a id="what-to-use"> </a>

### Happy Fun Times

### Jammer

## Examples

### Twin Fusion

Made at the [Arabic Game Jam 2014](http://arabicgamejam.org/game-concepts-2014/) in Malmo, Twin Fusion was originally implemented on top of **Happy Fun Times**. It was then rewritten with **jammer** to keep things simpler, reduce the code size, and make it possible to play on the Internet.

### Squame

Made as a hobby project, a proof of concept to showcase **jammer**, [Squame](https://github.com/jtpio/squame) was first demoed at [DemoDag Copenhagen](http://demodag.org/) as a two-players game (refer to the branch [two-players](https://github.com/jtpio/squame/tree/two-players)).

It was then [remastered](https://github.com/jtpio/squame/tree/master) and demoed at [DemoDag Malmo](https://twitter.com/demodag_malmo), allowing many more players to connect at the same time.

## Conclusion
