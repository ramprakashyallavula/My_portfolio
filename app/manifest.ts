import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ram Prakash Yallavula | Software Engineer",
        short_name: "Ram Yallavula",
        description: "Portfolio of Ram Prakash Yallavula, a software engineer focused on backend systems, data pipelines, and cloud applications.",
        start_url: "/",
        display: "standalone",
        background_color: "#1e2633",
        theme_color: "#1e2633",
        icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
    };
}
