import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
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
    tailwind({ applyBaseStyles: false }),
  ],
  redirects: {
    // handle previous version of the blog built with Jekyll
    about: {
      status: 302,
      destination: "/",
    },
    "/2022/02/22/jupyterlite-repl.html": {
      status: 302,
      destination: "/jupyterlite-repl",
    },
    "/2018/02/22/p5js-jupyter-notebook-widgets.html": {
      status: 302,
      destination: "/p5js-jupyter-notebook-widgets",
    },
    "/2017/05/10/nine-color-cube.html": {
      status: 302,
      destination: "/nine-color-cube",
    },
    "/2017/02/12/tmb-2016-analysis.html": {
      status: 302,
      destination: "/tmb-2016-analysis",
    },
    "/2017/01/12/aristotle-number-puzzle.html": {
      status: 302,
      destination: "/aristotle-number-puzzle",
    },
    "/2016/11/14/de-bruijn-sequences-networkx.html": {
      status: 302,
      destination: "/de-bruijn-sequences-networkx",
    },
    "/2016/07/26/dynamic-programming-python.html": {
      status: 302,
      destination: "/dynamic-programming-python",
    },
    "/2016/02/21/pancakes-and-triangles.html": {
      status: 302,
      destination: "/pancakes-and-triangles",
    },
    "/2016/01/09/music-events-globe.html": {
      status: 302,
      destination: "/music-events-globe",
    },
    "/2015/11/22/ant-colony-tsp-visualization.html": {
      status: 302,
      destination: "/ant-colony-tsp-visualization",
    },
    "/2015/09/27/tips-multiplayer-game-jam.html": {
      status: 302,
      destination: "/tips-multiplayer-game-jam",
    },
    "/2015/08/09/puzzle-pawns-chessboard-square.html": {
      status: 302,
      destination: "/puzzle-pawns-chessboard-square",
    },
    "/2015/06/19/solving-schoenbrunn-math-puzzle.html": {
      status: 302,
      destination: "/solving-schoenbrunn-math-puzzle",
    },
    "/2015/06/02/malmo-milen-2015-pre-analysis.html": {
      status: 302,
      destination: "/malmo-milen-2015-pre-analysis",
    },
    "/2015/05/11/trello-reading-stats.html": {
      status: 302,
      destination: "/trello-reading-stats",
    },
    "/2015/04/18/project-euler-57.html": {
      status: 302,
      destination: "/project-euler-57",
    },
    "/2015/03/24/js1k-2015-postmortem.html": {
      status: 302,
      destination: "/js1k-2015-postmortem",
    },
    "/2015/01/21/global-game-jam-2015-preparation.html": {
      status: 302,
      destination: "/global-game-jam-2015-preparation",
    },
    "/2014/10/22/meetup-malmo-language.html": {
      status: 302,
      destination: "/meetup-malmo-language",
    },
    "/2014/10/14/malmo-milen-post-analysis.html": {
      status: 302,
      destination: "/malmo-milen-post-analysis",
    },
    "/2014/10/05/rewriting-game-backend-go.html": {
      status: 302,
      destination: "/rewriting-game-backend-go",
    },
    "/2014/06/27/malmo-milen-pre-analysis.html": {
      status: 302,
      destination: "/malmo-milen-pre-analysis",
    },
    "/2014/06/27/hi.html": {
      status: 302,
      destination: "/hello-world",
    },
  },
});
