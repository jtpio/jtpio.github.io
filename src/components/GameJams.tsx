export default function GameJams() {
  return (
    <>
      <div class="flex flex-col divide-y divide-slate-500 space-y-4">
        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Nordic Game Jam 2017 &ndash;{" "}
            <small class="text-sm font-normal">
              21-23 April 2017, Copenhagen, Denmark
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">SUPER SQUARE</h3>
          <h4 class="mb-2">Daniel Murray, Jeremy Tuloup</h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              2D
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              p5.js
            </span>
          </div>

          <p class="mb-4">
            SUPER SQUARE is a game where the player navigates colorful puzzles
            by rotating the board matching colors with tiles at boundaries.
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            First use of the{" "}
            <a href="https://p5js.org/" class="base-link">
              p5.js
            </a>{" "}
            framework, which is very easy to use to make graphics.
          </p>

          <div class="mb-4">
            <iframe
              class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
              src="//www.youtube.com/embed/ncs2PQBiRJk"
              allowfullscreen
            ></iframe>
          </div>

          <ul class="list-disc pl-5">
            <li>
              itch.io entry page:
              <a href="//jtzp4.itch.io/super-square" class="base-link pl-2">
                jtzp4.itch.io/super-square
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Global Game Jam 2017 &ndash;{" "}
            <small class="text-sm font-normal">
              20-22 January 2017, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Wave ohoy</h3>
          <h4 class="mb-2">
            Hussein Taher, Gustav Bok, Gustav Jansson, Márk Mészáros, Mattias
            Wendt, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Music
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Multiplayer
            </span>
          </div>

          <p class="mb-4">
            Wave ohoy is a cooperation game designed to be 4 players only.
            Pirates must survive the waves on their boat and make smart use of
            physics to help each other!
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            This time, the goal for me was to exclusively focus on the{" "}
            <strong>audio</strong>. I created the main track with{" "}
            <a href="http://sonic-pi.net" class="base-link">
              Sonic Pi
            </a>{" "}
            as well as a few other sound effects.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/303947857&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true"
            ></iframe>
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code:
              <a href="//github.com/madeso/wave-ohoy" class="base-link pl-2">
                github.com/madeso/wave-ohoy
              </a>
            </li>
            <li>
              Global Game Jam entry page:
              <a
                href="//globalgamejam.org/2017/games/wave-ohoy"
                class="base-link pl-2"
              >
                globalgamejam.org/2017/games/wave-ohoy
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Nordic Game Jam 2016 &ndash;{" "}
            <small class="text-sm font-normal">
              08-10 April 2016, Copenhagen, Denmark
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">L3-AK</h3>
          <h4 class="mb-2">
            Maria Liljenhjerte, Dharam Kapila, Daniel Murray, Jeremy Tuloup
          </h4>
          <h4 class="mb-4">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Chatbot
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Python
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Telegram
            </span>
          </h4>
          <p class="mb-4">
            <strong>L3-AK</strong> is a chatbot based game, fully playable
            within the messaging app{" "}
            <a href="//telegram.org/" class="base-link">
              Telegram
            </a>
            .
          </p>
          <p class="mb-4">
            A robotic rover was sent to space, and it is now time to establish
            the connection again. The goal is to help the robot take decisions
            in the course of the search for water, and hopefully find signs of
            life!
          </p>
          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            We wanted to{" "}
            <strong>experiment with a new concept of text-based game</strong>.
            But instead of having to launch a separate game, with its proper UI
            and interface, we decided to make it part of a tool most of us use
            daily: <strong>a messaging app</strong>. So once again, a new
            concept being tested at a game jam :)
          </p>
          <p class="mb-4">
            Making this game was a good opportunity to experiment with this kind
            of idea. But it was also interesting technically. The game is purely
            driven by the server and{" "}
            <strong>fully powered by the amazing Python eco-system</strong>.
          </p>
          <h4 class="text-lg font-semibold mb-2">Walkthrough video</h4>
          <div class="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
              src="//www.youtube.com/embed/Kv-s9MLqcfo"
              allowfullscreen
            ></iframe>
          </div>
          <ul class="list-disc pl-5">
            <li>
              Source code:
              <a href="//github.com/jtpio/ngj16" class="base-link pl-2">
                github.com/jtpio/ngj16
              </a>
            </li>
            <li>
              itch.io entry page
              <a href="//jtzp4.itch.io/l3-ak" class="base-link pl-2">
                jtzp4.itch.io/l3-ak
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Arabic Game Jam 2015 &ndash;{" "}
            <small class="text-sm font-normal">
              22-24 May 2015, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Glyph Hunters</h3>
          <h4 class="mb-2">
            Abdelilah Sawab, Frej Rokka, Hussein Taher, Jeremy Tuloup
          </h4>
          <h4 class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Web
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Javascript
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Multiplayer
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Phone controlled
            </span>
          </h4>

          <p class="mb-4">
            Glyph Hunters is a multiplayer game playable in a web browser with a
            smartphone as a controller. Scan the QR code or enter the URL to
            join the hunt for the glyph.
          </p>

          <p class="mb-4">
            The game is meant to run forever on a shared screen. People passing
            by can <strong>join at any time</strong> by scanning the code. They
            can also <strong>leave without interrupting</strong> the game.
          </p>

          <blockquote class="mb-4 border-l-4 border-gray-300 pl-4 italic">
            <p>
              We really thought this game had the most interesting use of
              technology, and could develop to something bigger
            </p>
            <small>Jury's words</small>
          </blockquote>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            Players join the game by just scanning a QR code. The same QR is
            then used to generate the map. Use of a homemade network library
            called{" "}
            <a href="//github.com/jtpio/jammer" class="base-link">
              jammer
            </a>{" "}
            to handle the networking part of the game. In the end, we delivered
            something close to a proof of concept of what an{" "}
            <strong>"always on"</strong> game can be.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://img.itch.zone/aW1hZ2UvMjY3OTMvMTA4NDg5LnBuZw==/original/TJlfJZ.png"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Arabic Game Jam 2015 game concepts
              <a
                href="//arabicgamejam.org/glyph-hunters/"
                class="base-link pl-2"
              >
                arabicgamejam.org/glyph-hunters/
              </a>
            </li>
            <li>
              itch.io entry page
              <a href="//jtzp4.itch.io/glyph" class="base-link pl-2">
                jtzp4.itch.io/glyph
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Nordic Game Jam 2015 &ndash;{" "}
            <small class="text-sm font-normal">
              06-08 February 2015, Copenhagen, Denmark
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Bomb the Giraf</h3>
          <h4 class="mb-2">
            Magnus Nilsson, Dharam Kapila, Niels Böttcher, Richard Adem, Jeremy
            Tuloup
          </h4>
          <h4 class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Multiplayer
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Asymmetric Gameplay
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
          </h4>

          <p class="mb-4">
            <strong>Bomb the Giraf</strong> is a game with an asymmetric
            gameplay where a team of 3 must protect a giraffe from the bomber
            and get it to safety.
          </p>

          <p class="mb-4">
            Check the game webpage for more details!{" "}
            <a href="//ref-used.itch.io/bomb-the-giraf" class="base-link">
              ref-used.itch.io/bomb-the-giraf
            </a>
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            Atypical gameplay. Use of a keyboard and a Xbox 360 controller
            simultaneously. Each key of the keyboard is mapped to a position of
            the map. Hitting the key makes a bomb appear at the corresponding
            location.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://img.itch.zone/aW1hZ2UvMTg2MTEvNzExNTQucG5n/original/SRtbWi.png"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/giraf" class="base-link pl-2">
                github.com/jtpio/giraf
              </a>
            </li>
            <li>
              itch.io entry page
              <a
                href="//ref-used.itch.io/bomb-the-giraf"
                class="base-link pl-2"
              >
                ref-used.itch.io/bomb-the-giraf
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Global Game Jam 2015 &ndash;{" "}
            <small class="text-sm font-normal">
              23-25 January 2015, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Piper: Escape The Box</h3>
          <h4 class="mb-2">
            Emilia Lindholm, Hussein Taher, Dharam Kapila, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Google Cardboard
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Puzzle Game
            </span>
          </div>

          <p class="mb-4">
            <strong>Piper: Escape The Box</strong> is a 3D puzzle game, using{" "}
            <strong>virtual reality</strong> mechanics and made to be played on
            Android with a <strong>Google Cardboard</strong>.<br></br>
            It is also possible to play the game on pc with the mouse. <br></br>
            You are in a box, with a lot of cubes. Most of the cubes are
            blocking your way out, but one of them seems anxious to get out. So
            the question is: what do you do now?
          </p>

          <blockquote class="mb-4 border-l-4 border-gray-300 pl-4 italic">
            <p>Most explorative game</p>
            <small>The organizers</small>
          </blockquote>

          <p class="mb-4">The theme was: What do we do now?</p>
          <p class="mb-4">
            We decided to put a lot of constraints to improve our creativity. We
            limited the input to the motion sensors only, so the game stays
            accessible and also because the cardboard doesn't provide a lot of
            options except one button.
          </p>

          <p class="mb-4">
            The game has three levels. We chose to keep it short to put the
            focus on one feature that makes the game different compared to the
            others: the use of virtual reality with the cardboard.
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            First time making a <strong>VR</strong> game, using the Google
            Carboard.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://github.com/user-attachments/assets/0aacdcb0-3ba0-46f4-939c-99afa683eb6f"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/piper" class="base-link pl-2">
                github.com/jtpio/piper
              </a>
            </li>
            <li>
              Global Game Jam entry page
              <a
                href="//globalgamejam.org/2015/games/piper-escape-box"
                class="base-link pl-2"
              >
                globalgamejam.org/2015/games/piper-escape-box
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Arabic Game Jam 2014 &ndash;{" "}
            <small class="text-sm font-normal">
              23-25 May 2014, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">TwinFusion</h3>
          <h4 class="mb-2">
            Jaffar Salih, Samanta Miszkiel, Erik Nilsson, Dharam Kapila, Jeremy
            Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Web
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Javascript
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Multiplayer
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Voice Recognition
            </span>
          </div>

          <p class="mb-4">
            We made a social party game that can be played by 4-24 players
            simultaneously. It is playable on a web browser which acts as a
            shared screen for all the players. The players use their smartphones
            or tablets as game controllers. <br></br>
            Once the game starts each player is represented by a tiny “djinn”
            on-screen. The players do not know which djinn belongs to them and
            must start moving around to figure out who they are. Once their
            identity is known, players have to find the djinn matching their
            color and merge with them and form a bigger djinn. This bigger djinn
            is controlled by both players and they must co-operate to get to the
            exit portal once it is revealed. Players can bump into each other to
            knock opponents off their path.
          </p>

          <blockquote class="mb-4 border-l-4 border-gray-300 pl-4 italic">
            <p>Great networking x 2!</p>
            <small>Jury's words</small>
          </blockquote>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            Local multiplayer game, using smartphones as controllers. A shared
            screen displays the main stage, the "arena".
          </p>

          <p class="mb-4">
            Here is a video featuring the game in action in front of the ~70
            people audience.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
              src="//www.youtube.com/embed/-SOMJZIldHY?rel=0"
              allowfullscreen
            ></iframe>
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/dkapila/aurora" class="base-link pl-2">
                github.com/dkapila/aurora
              </a>
            </li>
            <li>
              Arabic Game Jam 2014 game concepts
              <a
                href="//arabicgamejam.org/game-concepts-2014/"
                class="base-link pl-2"
              >
                arabicgamejam.org/game-concepts-2014/
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Global Game Jam 2014 &ndash;{" "}
            <small class="text-sm font-normal">
              24-26 January 2014, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">The Douche Of Wall Street</h3>
          <h4 class="mb-4">
            Hussein Taher, Hanna Holmgren, Kunal Luthra, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              3D
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              AI
            </span>
          </div>

          <blockquote class="mb-4 border-l-4 border-gray-300 pl-4 italic">
            <p>
              If you feel bad, you're a good person. If you feel good, you're a
              bad person.
            </p>
            <small>The Team</small>
          </blockquote>
          <p>Yes that's how we can summarize our game. Just play it.</p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            First-person game. Very simple crowd simulation using Unity's
            Navmesh and pathfinding.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
              src="//www.youtube.com/embed/hQTqRxSGdQY"
              allowfullscreen
            ></iframe>
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/karma" class="base-link pl-2">
                github.com/jtpio/karma
              </a>
            </li>
            <li>
              Global Game Jam entry page
              <a
                href="//globalgamejam.org/2014/games/douche-wall-street"
                class="base-link pl-2"
              >
                globalgamejam.org/2014/games/douche-wall-street
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Indie Speed Run 2013 &ndash;{" "}
            <small class="text-sm font-normal">
              20-22 September 2013, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Mundane</h3>
          <h4 class="mb-2">
            Jonathan Hansson, Christian Grimberg, Eric Eneback, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Web
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Java
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              LibGDX
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Pixel Art
            </span>
          </div>

          <p class="mb-4">
            <a href="//jtpio.github.io/revolution">
              <button
                type="button"
                class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Play here
              </button>
            </a>
          </p>

          <p class="mb-4">
            Mundane is a game about waiting for the bus. No really, it's true.
            Explore your surroundings, the people and conversations around you
            and live your life through their stories and personal achievements.
          </p>

          <p class="mb-4">
            <strong>Public transportation</strong> was our theme,{" "}
            <strong>Motion sensor</strong> our element. Yes.
          </p>

          <p class="mb-4">
            Once again, this game jam was the perfect occasion to try out a
            crazy concept. And people seem to like it! <br></br>
            <a
              href="//indiestatik.com/2013/10/08/bus-stop-boredom-mundane/"
              class="base-link"
            >
              Here
            </a>{" "}
            is a review of the game published on indiestatik.com.
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            Implemented dialogs for the discussions between NPC. Timeline logic
            for the game.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://github.com/user-attachments/assets/c9817e3c-fbe9-4802-a242-772f36b35650"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/revolution" class="base-link pl-2">
                github.com/jtpio/revolution
              </a>
            </li>
            <li>
              Indie Speed Run entry page
              <a
                href="//www.escapistmagazine.com/content/indie-speed-run/?game=582"
                class="base-link pl-2"
              >
                www.escapistmagazine.com/content/indie-speed-run/?game=582
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            No More Sweden 2013 &ndash;{" "}
            <small class="text-sm font-normal">
              19-21 July 2013, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Smuggler's End</h3>
          <h4 class="mb-2">
            Kunal Luthra, Jaffar Salih, Samanta Miszkiel, Erik Nilsson, Torsten
            Hansson, Jonathan Hansson, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              3D
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Reverse Tower Defense
            </span>
          </div>

          <p class="mb-4">
            Smuggler's End is a mobile game where you play the part of a
            smuggler collecting cash to repair their truck-ship. <br></br>
            It can be viewed as a <strong>reverse tower defense game</strong>,
            where you drive along a <strong>procedurally generated</strong>{" "}
            track, collecting cash and avoiding turrets.
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            Procedural and infinite track. The turrets and boosters are placed
            on the track depending on the current level / difficulty.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://github.com/user-attachments/assets/4e46a9c5-4cfa-4e2b-8a96-b7a2f02a0825"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/chinese-chips" class="base-link pl-2">
                github.com/jtpio/chinese-chips
              </a>
            </li>
            <li>
              Unicorn7 entry page
              <a
                href="//www.unicorn7.org/games/game/195/"
                class="base-link pl-2"
              >
                www.unicorn7.org/games/game/195/
              </a>
            </li>
          </ul>
        </div>

        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Arabic Game Jam 2013 &ndash;{" "}
            <small class="text-sm font-normal">
              24-26 May 2013, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Together We Grow</h3>
          <h4 class="mb-4">
            Hamid, Kunal Luthra, Jaffar Salih, Samanta Miszkiel, Erik Nilsson,
            Torsten Hansson, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              3D
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Procedural Generation
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Runner
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Mobile
            </span>
          </div>

          <p class="mb-4">
            A 3D runner game, playable on mobile devices using the
            accelerometer. <br></br>
            Team up with your plant and collect the items to gather culture!
          </p>

          <blockquote class="border-l-4 border-gray-300 pl-4 italic mb-4">
            <p>
              High quality artistic and technical craftsmanship. Captivating
              gameplay!
            </p>
            <small>Jury's words</small>
          </blockquote>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            Only programmer in the team, and second game with Unity. Implemented
            a procedural generation algorithm to simulate the infinite map.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <iframe
              class="w-full h-80 aspect-w-16 aspect-h-9 rounded-lg shadow-lg"
              src="//player.vimeo.com/video/67514936"
              allowfullscreen
            ></iframe>
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/jackD" class="base-link pl-2">
                github.com/jtpio/jackD
              </a>
            </li>
            <li>
              Arabic Game Jam 2013 game concepts
              <a
                href="//arabicgamejam.org/game-concepts-2013/"
                class="base-link pl-2"
              >
                arabicgamejam.org/game-concepts-2013/
              </a>
            </li>
          </ul>
        </div>
        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Ludum Dare 26 &ndash;{" "}
            <small class="text-sm font-normal">
              26-29 April 2013, Malmö, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Too Many Items</h3>
          <h4 class="mb-2">Jeremy Tuloup</h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Web
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              2D
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Pixi.js
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Minimalism
            </span>
          </div>

          <p class="mb-4">A minimalist survival game!</p>

          <p class="mb-4">
            <a href="//jtpio.github.io/TooManyItems">
              <button
                type="button"
                class="bg-green-500 text-white font-bold py-2 px-4 rounded-lg"
              >
                Play here
              </button>
            </a>
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            I did everything by myself: code, art and music, although the
            graphics stay simple and the music minimal.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://github.com/user-attachments/assets/68f87071-f5d4-4acc-9a72-810114a1a5be"
              width="500"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Source code
              <a href="//github.com/jtpio/TooManyItems" class="base-link pl-2">
                github.com/jtpio/TooManyItems
              </a>
            </li>
          </ul>
        </div>
        <div class="pt-4">
          <h2 class="text-2xl font-bold mb-2">
            Global Game Jam 2013 &ndash;{" "}
            <small class="text-sm font-normal">
              25-27 January 2013, Gothenburg, Sweden
            </small>
          </h2>
          <h3 class="text-xl font-semibold mb-2">Lune 29</h3>
          <h4 class="mb-2">
            Daniel Kvarfordt, Jonas Wickerström, Jeremy Tuloup
          </h4>
          <div class="mb-4 flex gap-1">
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Unity
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Top-down
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Survival
            </span>
            <span class="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
              Heart
            </span>
          </div>

          <p class="mb-4">
            The theme was <strong>Heartbeat</strong>, and we made a horror
            stealth survival on a moon!
          </p>

          <h4 class="text-lg font-semibold mb-2">Achievement</h4>
          <p class="mb-4">
            This was my first game made with Unity. During the jam, I mainly
            focused on the enemy behavior and navigation, using Unity navmesh
            and pathfinding tools.
          </p>

          <div class="aspect-w-16 aspect-h-9 mb-4">
            <img
              class="w-full h-full object-cover"
              src="https://github.com/user-attachments/assets/0d6edbc2-1a95-4018-99c6-ac3092fdae3f"
              width="500"
            />
          </div>

          <ul class="list-disc pl-5">
            <li>
              Global Game Jam entry page (including source code)
              <a
                href="//2013.globalgamejam.org/2013/lune-29"
                class="base-link pl-2"
              >
                2013.globalgamejam.org/2013/lune-29
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
