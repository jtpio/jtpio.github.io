export type Page = {
  TITLE: string;
  DESCRIPTION: string;
};

export interface Site extends Page {
  AUTHOR: string;
  /** Default social card, used by pages that don't supply their own image. */
  OG_IMAGE: string;
}

export type Links = {
  TEXT: string;
  HREF: string;
}[];

export type Socials = {
  NAME: string;
  ICON: string;
  TEXT: string;
  HREF: string;
}[];
