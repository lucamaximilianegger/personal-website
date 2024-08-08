import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to my personal website, a portfolio and blog about me and my life.",
  AUTHOR: "Luca Maximilian Egger",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// Education Page
export const EDUCATION: Page = {
  TITLE: "Education",
  DESCRIPTION: "Places I educated myself.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  {
    TEXT: "Home",
    HREF: "/",
  },
  {
    TEXT: "Work",
    HREF: "/work",
  },
  {
    TEXT: "Education",
    HREF: "/education",
  },
  {
    TEXT: "Blog",
    HREF: "/blog",
  },
  {
    TEXT: "Projects",
    HREF: "/projects",
  },
]

// Socials
export const SOCIALS: Socials = [
  {
    NAME: "Email",
    ICON: "email",
    TEXT: "lucamaximilian.dev@egger.vision",
    HREF: "mailto:lucamaximilian.dev@egger.vision",
  },
  {
    NAME: "Github",
    ICON: "github",
    TEXT: "lucamaximilianegger-dev",
    HREF: "https://github.com/lucamaximilianegger-dev"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "markhorn-dev",
    HREF: "https://www.linkedin.com/in/lucamaximilianegger/",
  },
]

