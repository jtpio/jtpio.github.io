---
layout: post
title:  "Rewriting our game backend in Go"
date:   2014-10-05 00:00:00
categories:
- game jam
- golang
---

<p>
  A few month ago at a game jam, we (me and my team) made a multiplayer web-based game with the help of the library <a href="https://github.com/greggman/HappyFunTimes"> HappyFunTimes </a>. <br>
  Using HappyFunTimes was great, because we had the network part up and running very quickly, so we were able to put more time on the gameplay. But HappyFunTimes has one drawback: there can only be one session of the game on the same local network (which is totally fine in the context of a game jam). <br>
</p>

<p>
  This was one of the main reason to rewrite backend, so multiple sessions of the game can be playable online at the same time. The other reason is that I wanted to do something in Go.
</p>

<p>
You can find the code right there: <a href="https://github.com/jtpio/twin-fusion">https://github.com/jtpio/twin-fusion</a>.<br>
Here is a very short summary of three  of the journey.
</p>

<h3>1. Code is small and simple</h3>
<p>
The entire server code fits in less than 350 lines of code. Go is simple and clean by nature.
</p>

<h3>2. Using JSON</h3>
<p>
One of the parts I got tricked by is the naming convention for variables and functions. I knew that in a module, a function name has to start with a capital letter in order for the function to be exported and be available from an other module. But this is also applied to the fields in structures: a field starting with a capital letter is public whereas starting with a lowercase letter will make it private.

{% highlight go %}
type command struct {
  Cmd      string                 // public
  PlayerID uint32                 // public
  data     map[string]interface{} // private
}
{%endhighlight%}

</p>
Following that rule, private fields will not be passed along when encoded to JSON. <br>

Speaking of JSON, Go makes it possible to customize field names in a very neat way, using tags. It can be used to switch the first letter back to lowercase for example.

<p>
{% highlight go %}
  type command struct {
  Cmd      string                 `json:"cmd"`
  PlayerID uint32                 `json:"playerID"`
  Data     map[string]interface{} `json:"data"`
}
{%endhighlight%}

</p>

<h3>3. Think with channels</h3>
Node has callbacks, Go has channels. <br>
Need to run something asynchronously? Create a channel, pass that channel to the task and wait on that channel for the value to be returned. <br>
In the context of that game, channels are used to send commands from the players to the game instance and vice versa.

<h3>State of the game</h3>
<p>
Twin fusion is now quite stable. The idea is to polish it a bit more, especially on the controller UI. After that, it has all the elements to be available online and become a good and quick party game that anyone can reach quickly to play with friends!
</p>

<p>
This was mostly a reason for me to seize Go differences, as I come with a node.js background. In the end it was a good exercise.
</p>