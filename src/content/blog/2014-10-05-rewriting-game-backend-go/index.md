---
title: "Rewriting our game backend in Go"
date: "Oct 05 2014"
draft: false
tags:
- Game Jam
- Golang
slug: "rewriting-game-backend-go"
---

A few month ago at a game jam, we (me and my team) made a multiplayer web-based game with the help of the library [HappyFunTimes](https://github.com/greggman/HappyFunTimes).

Using HappyFunTimes was great, because we had the network part up and running very quickly, so we were able to put more time on the gameplay. But HappyFunTimes has one drawback: there can only be one session of the game on the same local network (which is totally fine in the context of a game jam).

This was one of the main reason to rewrite backend, so multiple sessions of the game can be playable online at the same time. The other reason is that I wanted to do something in Go to get know more about the language.

You can find the code right here: https://github.com/jtpio/twin-fusion.

## Code is small and simple

The entire server code fits in less than 350 lines of code. Go is simple and clean by nature.

## Using JSON

One of the parts I got tricked by is the naming convention for variables and functions. I knew that in a module, a function name has to start with a capital letter in order for the function to be exported and be available from an other module. But this is also applied to the fields in structures: a field starting with a capital letter is public whereas starting with a lowercase letter will make it private.

```go
type command struct {
  Cmd      string                 // public
  PlayerID uint32                 // public
  data     map[string]interface{} // private
}
```

Following that rule, private fields will not be passed along when encoded to JSON.

Speaking of JSON, Go makes it possible to customize field names in a very neat way, using tags. It can be used to switch the first letter back to lowercase for example.

```go
type command struct {
  Cmd      string                 `json:"cmd"`
  PlayerID uint32                 `json:"playerID"`
  Data     map[string]interface{} `json:"data"`
}
```

## Think channels

Node has callbacks, Go has channels.

Need to run something asynchronously? Create a channel, pass that channel to the task and wait on that channel for the value to be returned.

In the context of that game, channels are used to send commands from the players to the game instance and vice versa.

## State of the game

Twin fusion is now quite stable. The idea is to polish it a bit more, especially on the controller UI. After that, it has all the elements to be available online and become a good and quick party game that anyone can reach quickly to play with friends!

This was mostly a reason for me to seize Go differences, as I come with a node.js background. In the end it was a good exercise.
