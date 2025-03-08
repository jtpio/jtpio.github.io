import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import solidJs from "@astrojs/solid-js";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

// https://astro.build/config
export default defineConfig({
  site: "https://jtp.io",
  integrations: [
    mdx({
      rehypePlugins: [rehypeKatex],
      remarkPlugins: [remarkMath],
    }),
    sitemap(),
    solidJs(),
  ],
  vite: { plugins: [tailwindcss()] },
  redirects: {
    // handle previous version of the blog built with Jekyll
    about: {
      status: 302,
      destination: "/",
    },
    "/2022/02/22/jupyterlite-repl.html": {
      status: 302,
      destination: "/blog/jupyterlite-repl",
    },
    "/2018/02/22/p5js-jupyter-notebook-widgets.html": {
      status: 302,
      destination: "/blog/p5js-jupyter-notebook-widgets",
    },
    "/2017/05/10/nine-color-cube.html": {
      status: 302,
      destination: "/blog/nine-color-cube",
    },
    "/2017/02/12/tmb-2016-analysis.html": {
      status: 302,
      destination: "/blog/tmb-2016-analysis",
    },
    "/2017/01/12/aristotle-number-puzzle.html": {
      status: 302,
      destination: "/blog/aristotle-number-puzzle",
    },
    "/2016/11/14/de-bruijn-sequences-networkx.html": {
      status: 302,
      destination: "/blog/de-bruijn-sequences-networkx",
    },
    "/2016/07/26/dynamic-programming-python.html": {
      status: 302,
      destination: "/blog/dynamic-programming-python",
    },
    "/2016/02/21/pancakes-and-triangles.html": {
      status: 302,
      destination: "/blog/pancakes-and-triangles",
    },
    "/2016/01/09/music-events-globe.html": {
      status: 302,
      destination: "/blog/music-events-globe",
    },
    "/2015/11/22/ant-colony-tsp-visualization.html": {
      status: 302,
      destination: "/blog/ant-colony-tsp-visualization",
    },
    "/2015/09/27/tips-multiplayer-game-jam.html": {
      status: 302,
      destination: "/blog/tips-multiplayer-game-jam",
    },
    "/2015/08/09/puzzle-pawns-chessboard-square.html": {
      status: 302,
      destination: "/blog/puzzle-pawns-chessboard-square",
    },
    "/2015/06/19/solving-schoenbrunn-math-puzzle.html": {
      status: 302,
      destination: "/blog/solving-schoenbrunn-math-puzzle",
    },
    "/2015/06/02/malmo-milen-2015-pre-analysis.html": {
      status: 302,
      destination: "/blog/malmo-milen-2015-pre-analysis",
    },
    "/2015/05/11/trello-reading-stats.html": {
      status: 302,
      destination: "/blog/trello-reading-stats",
    },
    "/2015/04/18/project-euler-57.html": {
      status: 302,
      destination: "/blog/project-euler-57",
    },
    "/2015/03/24/js1k-2015-postmortem.html": {
      status: 302,
      destination: "/blog/js1k-2015-postmortem",
    },
    "/2015/01/21/global-game-jam-2015-preparation.html": {
      status: 302,
      destination: "/blog/global-game-jam-2015-preparation",
    },
    "/2014/10/22/meetup-malmo-language.html": {
      status: 302,
      destination: "/blog/meetup-malmo-language",
    },
    "/2014/10/14/malmo-milen-post-analysis.html": {
      status: 302,
      destination: "/blog/malmo-milen-post-analysis",
    },
    "/2014/10/05/rewriting-game-backend-go.html": {
      status: 302,
      destination: "/blog/rewriting-game-backend-go",
    },
    "/2014/06/27/malmo-milen-pre-analysis.html": {
      status: 302,
      destination: "/blog/malmo-milen-pre-analysis",
    },
    "/2014/06/27/hi.html": {
      status: 302,
      destination: "/blog/hello-world",
    },
  },
});
