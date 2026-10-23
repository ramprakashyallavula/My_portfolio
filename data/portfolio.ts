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
    featured?: boolean;
    progressDescription?: string;
    visualDescription?: string;
};

export const projects: Project[] = [
    {
        slug: "taskflow-ai",
        title: "TaskFlow AI",
        category: "AI productivity platform",
        shortDescription:
            "A task and project manager that uses AI to break work into smaller steps and help plan your day.",
        description:
            "A full-stack app for managing tasks and projects. The AI features parse tasks, split them into smaller steps and help put together a daily schedule, and there are analytics and reminders on top of that. The frontend is React and TypeScript, the backend is FastAPI with PostgreSQL, and the whole thing runs in Docker with CI on GitHub Actions.",
        tech: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
        focus: [
            "Authenticated task and project workflows",
            "AI-assisted planning with configurable providers",
            "Analytics and scheduled reminders",
        ],
        architecture: [
            "Interface — React, TypeScript, Vite, and TanStack Query",
            "API — FastAPI routes with Pydantic and SQLAlchemy",
            "Data — PostgreSQL schema managed with Alembic",
            "Delivery — Docker Compose and GitHub Actions CI",
        ],
        gradient: "from-teal-400/20 via-slate-950 to-violet-500/10",
        featured: true,
        progressDescription:
            "I’m still actively building this. Everything on this page describes what’s implemented today. I’ll link the source code and a demo once they’re ready to share.",
        visualDescription:
            "The preview above is based on the real frontend, but it uses sample content. It isn’t a screenshot of a live product.",
    },
    {
        slug: "project-management-system",
        title: "Project Management System",
        category: "Full-stack platform",
        shortDescription:
            "A task management app with logins, role-based permissions and task tracking.",
        description:
            "A full-stack web app for keeping tasks organized. Users sign in, get permissions based on their role, and track their tasks. I built it with Django and PostgreSQL and used AWS and a CI/CD pipeline to deploy it.",
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
            "A Spark pipeline for processing large NYC taxi trip datasets on AWS.",
        description:
            "A data pipeline that takes NYC taxi datasets and processes them with Python and Spark on AWS. The project was mostly about working with data too big for one machine and running distributed jobs in the cloud.",
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
            "A Spring Boot backend for organizing food donations.",
        description:
            "A backend service for organizing food donations, built with Java, Spring Boot and MySQL. Most of the work went into the service logic, modeling the domain and designing the database tables.",
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
            "A Python tool that uses NLP to match job information with relevant openings.",
        description:
            "A recommendation engine written in Python. It uses NLP to process job text, then recommends the opportunities that look like the closest match.",
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
        description: "Frontend work, mostly React with TypeScript.",
        items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript"],
    },
    {
        title: "Design",
        description: "APIs and server-side code.",
        items: ["Java", "Spring Boot", "Python", "Django", "REST APIs"],
    },
    {
        title: "Ship",
        description: "Containers, CI and deploying to the cloud.",
        items: ["AWS", "Docker", "GitHub Actions", "Linux", "Kubernetes"],
    },
    {
        title: "Understand",
        description: "Databases and data processing.",
        items: ["SQL", "PostgreSQL", "MySQL", "Spark", "NLP"],
    },
];

export const engineeringPrinciples = [
    {
        number: "01",
        title: "Understand the problem first",
        description: "Before I pick a framework, I want to know who’s going to use the thing, what they’re trying to get done and what’s in their way.",
    },
    {
        number: "02",
        title: "Keep it easy to follow",
        description: "Clear names, small modules and APIs that do what they say. I write code assuming someone else will need to change it later, because usually someone does.",
    },
    {
        number: "03",
        title: "Ship it, then improve it",
        description: "I’d rather get a working version out, see where it breaks and fix it than keep polishing something nobody has used yet.",
    },
];
