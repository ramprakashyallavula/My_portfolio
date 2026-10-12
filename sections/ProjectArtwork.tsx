import Image from "next/image";

type Props = { index: number };

const artwork = [
    { src: "/projects/project-management-concept.png", position: "center" },
    { src: "/projects/taxi-pipeline-concept.png", position: "center" },
    { src: "/projects/food-donation-concept.png", position: "center" },
    { src: "/projects/job-matching-concept.png", position: "center" },
];

export default function ProjectArtwork({ index }: Props) {
    const image = artwork[index] ?? artwork[0];

    return (
        <div className={`project-art project-art-${index}`} aria-hidden="true">
            <Image
                src={image.src}
                alt=""
                fill
                sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1400px) 46vw, 630px"
                className="project-art-image"
                style={{ objectPosition: image.position }}
            />
            <span className="concept-label">Concept visual</span>
        </div>
    );
}
