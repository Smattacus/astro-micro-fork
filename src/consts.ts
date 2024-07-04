import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Pressure Off the Brain",
  DESCRIPTION: "This is a small blog for technical subjects: Python. SystemVerilog. Digital Signal Processing. Semiconductors. Etc.",
  EMAIL: "Smattacus@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
  NUM_REVIEWS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Astro Micro is an accessible theme for Astro.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles grouped by subject matter.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "Some projects I have done in the public realm in my spare time.",
};

export const REVIEWS: Metadata = {
  TITLE: "Reviews",
  DESCRIPTION: "Book reviews I have written."
}

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/Smattacus",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/sean-w-mattingly",
  },
];
