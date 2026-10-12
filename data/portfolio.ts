export type Project = {
    slug: string;
    title: string;
    category: string;
    shortDescription: string;
    description: string;
    tech: string[];
    focus: string[];
    architecture: string[];
    gradient: string;
};

export const projects: Project[] = [
    {
        slug: "project-management-system",
        title: "Project Management System",
        category: "Full-stack platform",
        shortDescription:
            "A task-management platform organized around authentication, role-based access, and focused workflows.",
        description:
            "A full-stack platform for keeping tasks organized, with authentication, role-based access, and task tracking. Built with Django and PostgreSQL, with AWS and CI/CD supporting delivery.",
        tech: ["Django", "PostgreSQL", "AWS", "CI/CD"],
        focus: ["Authentication", "Role-based access", "Task tracking"],
        architecture: [
            "Application layer — Django",
            "Data layer — PostgreSQL",
            "Delivery layer — AWS and CI/CD pipelines",
        ],
        gradient: "from-cyan-400/20 via-slate-950 to-blue-500/10",
    },
    {
        slug: "nyc-taxi-data-pipeline",
        title: "NYC Taxi Data Pipeline",
        category: "Data engineering",
        shortDescription:
            "A distributed processing system for working with large-scale NYC taxi datasets.",
        description:
            "A data pipeline for processing NYC taxi datasets with Python, Spark, and AWS. The system brings together data input, distributed processing, and cloud execution.",
        tech: ["Python", "Spark", "AWS"],
        focus: ["Distributed processing", "Large-scale datasets", "Cloud execution"],
        architecture: [
            "Input — NYC taxi datasets",
            "Processing — distributed Spark workloads",
            "Runtime — AWS cloud environment",
        ],
        gradient: "from-emerald-400/20 via-slate-950 to-cyan-500/10",
    },
    {
        slug: "waste-food-management-system",
        title: "Waste Food Management System",
        category: "Backend service",
        shortDescription:
            "A backend system focused on organizing food-donation workflows.",
        description:
            "A backend system for organizing food-donation workflows, built with Java, Spring Boot, and MySQL. The work brings together service logic, domain modeling, and relational data.",
        tech: ["Java", "Spring Boot", "MySQL"],
        focus: ["Backend workflows", "Domain modeling", "Relational data"],
        architecture: [
            "Service layer — Spring Boot",
            "Language — Java",
            "Data layer — MySQL",
        ],
        gradient: "from-amber-300/20 via-slate-950 to-orange-500/10",
    },
    {
        slug: "job-recommendation-system",
        title: "Job Recommendation System",
        category: "Applied NLP",
        shortDescription:
            "An NLP-based recommendation engine for matching job information with relevant opportunities.",
        description:
            "A Python-based recommendation engine that uses natural language processing for job matching, connecting text processing with recommendation logic.",
        tech: ["Python", "NLP"],
        focus: ["Text processing", "Recommendation logic", "Job matching"],
        architecture: [
            "Input — job and opportunity information",
            "Processing — NLP techniques in Python",
            "Output — relevant job matches",
        ],
        gradient: "from-violet-400/20 via-slate-950 to-fuchsia-500/10",
    },
];

export const skillGroups = [
    {
        title: "Build",
        description: "Interfaces and applications that stay understandable as they grow.",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
        title: "Design",
        description: "Backend systems with clear boundaries and practical APIs.",
        items: ["Java", "Spring Boot", "Python", "Django", "REST APIs"],
    },
    {
        title: "Ship",
        description: "Cloud and delivery tooling that turns code into a usable product.",
        items: ["AWS", "Docker", "GitHub Actions", "Linux", "Kubernetes"],
    },
    {
        title: "Understand",
        description: "Data tools for making systems useful, observable, and informed.",
        items: ["SQL", "PostgreSQL", "MySQL", "Spark", "NLP"],
    },
];

export const engineeringPrinciples = [
    {
        number: "01",
        title: "Start with the problem",
        description: "Define the user, the workflow, and the constraint before reaching for a technology.",
    },
    {
        number: "02",
        title: "Make the system legible",
        description: "Prefer clear boundaries, predictable APIs, and documentation that helps the next person move faster.",
    },
    {
        number: "03",
        title: "Ship, inspect, improve",
        description: "Treat deployment, feedback, and iteration as part of engineering—not as an afterthought.",
    },
];
