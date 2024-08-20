import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Home",
  DESCRIPTION: "Welcome to Luca Maximilian Egger's website. Explore projects, blog posts on IT and security, and insights into my professional journey.",
  AUTHOR: "Luca Maximilian Egger",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "An overview of the companies and roles I've been involved in within IT and system integration.",
}

// Education Page
export const EDUCATION: Page = {
  TITLE: "Education",
  DESCRIPTION: "A look into my educational background and qualifications in IT security and system integration.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Articles and tutorials on IT, security, and technology written by me.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "A showcase of my recent IT projects and developments in system integration.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search my website for posts, projects, and pages using relevant keywords.",
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
    TEXT: "lucamaximilianegger",
    HREF: "https://github.com/lucamaximilianegger"
  },
  {
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "lucamaximilianegger",
    HREF: "https://www.linkedin.com/in/lucamaximilianegger/",
  },
]

