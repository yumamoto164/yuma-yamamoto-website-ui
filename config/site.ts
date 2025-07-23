export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Yuma Yamamoto Website",
  description:
    "Personal website of Yuma Yamamoto, showcasing projects and skills.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Soccer xG Collection",
      href: "/soccer-xg-collection",
    },
    {
      label: "Basketball Statskeeper",
      href: "/basketball-statskeeper",
    },
    {
      label: "Soccer Analytics Work",
      href: "/soccer-analytics-work",
    },
  ],
  links: {
    github: "https://github.com/yumamoto164",
    linkedin: "https://www.linkedin.com/in/yumamoto164",
    email: "",
  },
};
