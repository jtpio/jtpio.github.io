---
layout: post
title:  "Tips to make a web based multiplayer game at a Game Jam"
date:   2015-09-26 14:00:00
categories:
- game
- javascript
- programming
- tools
---

## At a Game Jam

Suppose you go to a game jam and would like to create a multiplayer game. You talk about it with other people, and what you hear:

- "Multiplayer games are too difficult to make"
- "You will waste time on technical details and won't be able to focus on the gameplay"
- "You will fail"
- ...

That's right, multiplayer games are hard to implement, especially under time constraints and pressure. It is a **crazy idea** to even consider it at a game jam.

However, the networking part of a game is similar to other aspects like graphics, physics and artificial intelligence. If you come with the right tools and frameworks (a game engine for example), getting started will become easier and will speed up the process of game creation.

This post will give an insight on how to tackle this challenge.

## A web based multiplayer game?

It's **web based**:

- Written in **Javascript**
- The only thing players want is access to a web browser
- Which makes it very easy for the player to directly get in the game, jump in and out

The type of interactions is illustrated below.

<img class="center" src="/res/jammer/setup.png" alt="Jammer use case">

It's always nice when other participants at a game jam want to try your game. But it should be easy to setup, without requiring thousands of steps. Being web based has the big advantage of **improving the accessibility**.

## General Tips

The key point in a game jam is to save as much time as possible. **Knowing the tech and the tools is crucial** to not waste time on technical details.

- More generally and as a prerequisite, make sure to use a familiar **game engine**. For 2D web based games, my preference goes to [Phaser](//phaser.io).
- If you want to take the opportunity of the game jam to learn a new engine, take some days a few days before to at least grasp the cover the basics.
- Use a **networking framework** to cover the communication layer. Refer to the [next section](#what-to-use) for suggestions. You can also make your own tech before and bring it in your tool box.
- Implement a minimal prototype. Start with the networking part, especially important if the multiplayer aspect is at the core of the gameplay.
- Iterate and always keep the game playable. Use a version control system to be able to revert changes in case something goes wrong.

## What networking framework to use? <a id="what-to-use"> </a>

### HappyFunTimes

Check it out here: [github.com/greggman/HappyFunTimes](//github.com/greggman/HappyFunTimes)

> HappyFunTimes is a system for playing party games that are meant to be played with a bunch of people in the same room and 1 ideally large display.

I used HappyFunTimes once at a game jam. It helped us (the team) a lot to build the multiplayer game we wanted. However, we faced two difficulties:

1. We **spent quite some time to understand how everything works**, and there are so many files. We wanted to modify the framework just a little bit to fit our needs better.
2. It only works on a local server. We wanted to share a link to the game after the jam, but it was impossible as everyone would have conflicted with each other (playing on the same instance).

These two points lead to the creation of jammer. See below.

### Jammer

Check it out here: [github.com/jtpio/jammer](//github.com/jtpio/jammer)

Jammer is obviously inspired by HappyFunTimes, but with the following goals in mind:

- It should be possible to put the game server and allow many players to connect to different game sessions simultaneously, without interferring with each other.
- Everything should be kept at the strict minimum. Only the networking part is supported, but stays easy to interface with a game engine like Phaser for example.

#### How it works

1. A server routes messages between players (phones) and the main shared screen. It is actually just a **simple relay**.
2. The main game runs in the shared web browser (main screen), and phones are used as controllers.
3. The all system is event-based. Listen to events to take actions.

## Examples

### Twin Fusion

<img class="center" src="//arabicgamejam.org/wp-content/uploads/2014/05/twinfusion2.png" alt="Twin Fusion">

Code: [github.com/jtpio/twin-fusion](//github.com/jtpio/twin-fusion)

Made at the [Arabic Game Jam 2014](http://arabicgamejam.org/game-concepts-2014/) in Malmo, Twin Fusion was originally implemented on top of **Happy Fun Times**. It was then rewritten with **jammer** to keep things simpler, reduce the code size, and make it possible to play on the Internet.

### Squame

<img class="center" src="//raw.githubusercontent.com/jtpio/squame/master/public/assets/screenshot2.png" alt="Twin Fusion">

Code: [github.com/jtpio/squame](//github.com/jtpio/squame)

Made as a hobby project, a proof of concept to showcase **jammer**, [Squame](https://github.com/jtpio/squame) was first demoed at [DemoDag Copenhagen](http://demodag.org/) as a two-players game (refer to the branch [two-players](https://github.com/jtpio/squame/tree/two-players)).

It was then [remastered](https://github.com/jtpio/squame/tree/master) and demoed at [DemoDag Malmo](https://twitter.com/demodag_malmo), allowing many more players to connect at the same time.

## Conclusion
