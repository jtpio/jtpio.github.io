import type { Site, Page, Links, Socials } from "@types";

// Global
export const SITE: Site = {
  TITLE: "JTP",
  DESCRIPTION: "Welcome to Jeremy Tuloup's personal blog and website",
  AUTHOR: "Jeremy Tuloup",
};

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION:
    "My work on Project Jupyter, open source, and prior experiences.",
};

// Videos Page
export const VIDEOS: Page = {
  TITLE: "Videos",
  DESCRIPTION:
    "A selection of talks and tutorials given at conferences and published on YouTube.",
};

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing about Jupyter, Python, and more.",
};

// Game Jams Page
export const GAME_JAMS: Page = {
  TITLE: "Game Jams",
  DESCRIPTION: "The game jams I participated in.",
};

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
};

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Videos",
    HREF: "/videos",
  },
];

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "jtpio",
    HREF: "https://github.com/jtpio",
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "jtuloup",
    HREF: "https://www.linkedin.com/in/jtuloup",
  },
  {
    NAME: "X",
    ICON: "twitter-x",
    TEXT: "jtpio",
    HREF: "https://x.com/jtpio",
  },
  {
    NAME: "Bluesky",
    ICON: "bluesky",
    TEXT: "jtp.io",
    HREF: "https://bsky.app/profile/jtp.io",
  },
  {
    NAME: "Mastodon",
    ICON: "mastodon",
    TEXT: "jtp@fosstodon.org",
    HREF: "https://fosstodon.org/@jtp",
  },
  {
    NAME: "YouTube",
    ICON: "youtube",
    TEXT: "jtpx",
    HREF: "https://www.youtube.com/@jtpx",
  },
];
