import Image from "next/image";
import { illustrations } from "@/sections/ProjectIllustrations";

/** `autoplay` loops the illustration animation (project pages); otherwise it plays on card hover. */
type Props = { slug: string; index: number; autoplay?: boolean };

export default function ProjectArtwork({ slug, index, autoplay = false }: Props) {
    const illustration = illustrations[slug];

    // Lead project: the code-authored TaskFlow AI interface preview.
    if (!illustration) {
        return (
            <div className={`project-art project-art-${index} project-art-interface`} aria-hidden="true">
                <Image
                    src="/projects/taskflow-ai-interface.svg"
                    alt=""
                    fill
                    sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1400px) 46vw, 630px"
                    className="project-art-image"
                />
                <span className="concept-label">Interface preview</span>
            </div>
        );
    }

    const { Component, tone } = illustration;
    return (
        <div className={`project-art project-art-illustration ill-tone-${tone}${autoplay ? " ill-autoplay" : ""}`} aria-hidden="true">
            <Component />
            <span className="concept-label">Illustration</span>
        </div>
    );
}
