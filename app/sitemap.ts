import type { MetadataRoute } from "next";
import { serviceLinks, siteConfig } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entry = (path: string, priority: number) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
    priority,
  });

  return [
    entry("", 1),
    ...serviceLinks.map((service) => entry(service.href, 0.9)),
    entry("/about", 0.7),
    entry("/contact", 0.8),
    entry("/privacy-policy", 0.2),
    entry("/terms-of-service", 0.2),
  ];
}
