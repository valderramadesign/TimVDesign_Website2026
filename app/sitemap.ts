import type { MetadataRoute } from "next";

import { PROJECTS, SITE } from "@/lib/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE.url}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...PROJECTS.map((project) => ({
      url: `${SITE.url}${project.route}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE.url}/resume/print`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];
}
