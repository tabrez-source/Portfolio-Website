import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shamshtabrez.com",
      lastModified: new Date("2026-09-07"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
