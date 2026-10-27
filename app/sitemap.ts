import type { MetadataRoute } from "next";
import { notes } from "@/data/notes";
import { projects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ramprakashyallavula.com";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...projects.map((project) => ({
            url: `${baseUrl}/projects/${project.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        })),
        { url: `${baseUrl}/notes`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
        ...notes.map((note) => ({
            url: `${baseUrl}/notes/${note.slug}`,
            lastModified: new Date(`${note.date}T12:00:00Z`),
            changeFrequency: "yearly" as const,
            priority: 0.5,
        })),
    ];
}
