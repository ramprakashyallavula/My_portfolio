/** Case-study content. Every fact comes from the résumé or the project's own repository. */
export type CaseStudy = {
    problem: string;
    numbers?: { value: string; label: string }[];
    approach: string[];
    decisions: { title: string; detail: string }[];
    screenshots?: { src: string; alt: string; caption: string; width: number; height: number }[];
    next: string;
    sources: string;
};

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
    caseStudy?: CaseStudy;
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
        caseStudy: {
            problem:
                "Most task apps stop at storing tasks. I wanted to build the planning step too: type a task the way you’d say it, have it broken into smaller pieces, and turn the open work into a schedule for the day.",
            numbers: [
                { value: "7", label: "API domains: auth, users, tasks, projects, AI, analytics, notifications" },
                { value: "3", label: "AI workflows: task parsing, subtask breakdown, daily schedule" },
                { value: "4", label: "core data models: users, tasks, projects, notifications" },
                { value: "3", label: "containerized services: React app, FastAPI API, PostgreSQL" },
            ],
            approach: [
                "A FastAPI backend split by domain, with SQLAlchemy models, Pydantic schemas and Alembic migrations for the PostgreSQL schema.",
                "JWT authentication so every task and project is scoped to the signed-in user.",
                "A React and TypeScript frontend with TanStack Query for server state, protected routes and Recharts dashboards for the analytics.",
                "An APScheduler job that creates reminders for tasks that are coming due and sends them by email or SMS.",
                "Docker Compose for the three services, and GitHub Actions running the backend tests and a production frontend build on every push.",
            ],
            decisions: [
                {
                    title: "AI that works without a paid API",
                    detail: "The AI layer has a provider switch: OpenAI, a free local model through Ollama, or a mock mode that is the default. The app runs and can be tested end to end without spending anything.",
                },
                {
                    title: "Domain-first API layout",
                    detail: "Routes, schemas and services are grouped by domain (tasks, projects, AI, analytics, notifications), which keeps each feature’s code in one place as the app grows.",
                },
                {
                    title: "Analytics computed on the server",
                    detail: "Completion rate, overdue counts and status and priority breakdowns are aggregated in a backend service, so the dashboard only renders results.",
                },
            ],
            screenshots: [
                { src: "/projects/taskflow/dashboard.jpg", alt: "TaskFlow AI dashboard with task totals, completion rate, recent tasks and focus suggestions", caption: "Dashboard: totals, completion rate and focus suggestions", width: 2000, height: 1250 },
                { src: "/projects/taskflow/tasks.jpg", alt: "TaskFlow AI tasks page with search, status and priority filters and task cards", caption: "Tasks: search, filters and quick status changes", width: 2000, height: 1250 },
                { src: "/projects/taskflow/analytics.jpg", alt: "TaskFlow AI analytics page with tasks by status and priority distribution charts", caption: "Analytics: tasks by status and by priority", width: 2000, height: 1250 },
            ],
            next: "I’m still building this. Next up is getting it deployed somewhere public so I can link a live demo and the source.",
            sources: "Details from the project’s README and source code. Screenshots are from the app running locally with sample data.",
        },
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
        caseStudy: {
            problem:
                "Teams need to know who can see and change what. I built a task tracker where access depends on your role, with deadlines that don’t slip through the cracks.",
            approach: [
                "A Django REST API with role-based access control and secure authentication.",
                "Task tracking and deadline management built on the Django ORM, stored in PostgreSQL.",
                "JSON over REST between the client and the server.",
                "Deployed on AWS EC2, with GitHub Actions handling automated CI/CD deployments.",
            ],
            decisions: [
                {
                    title: "Permissions in the API, not the UI",
                    detail: "Role checks live on the server, so a client can never see or edit data its role doesn’t allow, no matter what the interface shows.",
                },
                {
                    title: "Automated deploys from the start",
                    detail: "Setting up GitHub Actions early meant every change shipped the same way to EC2 instead of through manual steps.",
                },
            ],
            next: "I’m rebuilding this one. I’ll add the source code and a live demo once it’s in good shape.",
            sources: "Details from my résumé.",
        },
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
        caseStudy: {
            problem:
                "NYC taxi trip data is too big to handle comfortably on one machine. This project was about processing it reliably in the cloud with Spark.",
            numbers: [{ value: "3", label: "pipeline stages: ingestion, transformation, validation" }],
            approach: [
                "A distributed Spark ETL pipeline that reads from and writes to AWS S3.",
                "Processing split into three stages, ingestion, transformation and validation, so each can fail and be rerun on its own.",
                "Modular Spark processing components that can be reused across pipeline environments.",
            ],
            decisions: [
                {
                    title: "Separate stages for fault tolerance",
                    detail: "Keeping ingestion, transformation and validation apart means a bad batch is caught at validation and only that stage needs to run again.",
                },
                {
                    title: "S3 as the hand-off point",
                    detail: "Each stage reads its input from S3 and writes its output back, so stages stay independent and results can be inspected between steps.",
                },
            ],
            next: "I’m cleaning this up to share the code and some sample output.",
            sources: "Details from my résumé.",
        },
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
        caseStudy: {
            problem:
                "Food that could be donated often goes to waste because there’s no simple way to list it and get it picked up. This backend organizes that workflow.",
            approach: [
                "A Spring Boot service written in Java that handles the donation workflow.",
                "A domain model for donations and their status as they move from listed to claimed to picked up.",
                "A MySQL database with relational tables for the core records.",
            ],
            decisions: [
                {
                    title: "Model the workflow as statuses",
                    detail: "Treating a donation as something that moves through clear statuses keeps the service logic simple and makes it easy to see where each donation is.",
                },
            ],
            next: "I’m rebuilding this one. A fuller write-up, the source code and a demo will follow.",
            sources: "Details from the project overview.",
        },
    },
    {
        slug: "job-recommendation-system",
        title: "Job Recommendation System",
        category: "Applied NLP · jobs.rp",
        shortDescription:
            "jobs.rp: upload a résumé and get job recommendations that explain why each role is a match.",
        description:
            "jobs.rp reads a résumé (PDF, DOCX or text), pulls out skills, experience and seniority with NLP, then ranks every opening with a hybrid model and explains each score. A Spring Boot API owns users, jobs and the application tracker; a separate Python service handles the matching.",
        tech: ["Java", "Spring Boot", "Python", "FastAPI", "scikit-learn", "Next.js", "PostgreSQL"],
        focus: ["Résumé parsing with NLP", "Explainable hybrid ranking", "Application tracker and skill insights"],
        architecture: [
            "Web — Next.js 16, React 19 and Tailwind CSS",
            "API — Spring Boot 4 on Java 21, PostgreSQL with Flyway",
            "Matcher — FastAPI and scikit-learn for parsing and ranking",
        ],
        gradient: "from-violet-400/20 via-slate-950 to-fuchsia-500/10",
        caseStudy: {
            problem:
                "Job boards rank by keywords and rarely say why a role showed up. I wanted recommendations that read the whole résumé and show their reasoning: which skills match, which are missing, and how much each part of the score counts.",
            numbers: [
                { value: "+13%", label: "nDCG@10 for the hybrid ranker over text-only matching (synthetic benchmark)" },
                { value: "115", label: "automated tests: 52 for the matcher, 63 for the API" },
                { value: "99% / 94%", label: "test coverage for the matcher / the API" },
                { value: "119", label: "skills in the taxonomy, with aliases like k8s → Kubernetes" },
            ],
            approach: [
                "Two services with a clear contract: a Spring Boot 4 API (Java 21, PostgreSQL, Flyway) and a FastAPI matcher with scikit-learn. They share no database, only a versioned HTTP contract that both sides test against.",
                "Résumé parsing for PDF, DOCX and text, with section detection and years of experience worked out from date ranges.",
                "Hybrid ranking: 0.35 × TF-IDF text similarity + 0.45 × weighted skill coverage + 0.20 × experience fit, plus relevance feedback from saved and hidden jobs and diversity re-ranking.",
                "A Next.js 16 frontend with a For you feed, job search, an application tracker and an Insights page showing which skills would turn near-misses into strong matches.",
            ],
            decisions: [
                {
                    title: "Measured, not guessed",
                    detail: "An offline evaluation compares the hybrid model with random, text-only and skills-only baselines on 320 demo jobs and 66 synthetic profiles. CI fails if the hybrid ever stops beating them. The labels are synthetic, so the comparison matters more than the absolute numbers.",
                },
                {
                    title: "Stays useful when the matcher is down",
                    detail: "The API calls the matcher with timeouts and a circuit breaker, and falls back to a simpler in-process ranker, so people still get recommendations instead of an error.",
                },
                {
                    title: "Every score is explained",
                    detail: "Each match is broken into skill coverage, role and text fit, and experience fit, with matched and missing skills and the strongest signals listed.",
                },
            ],
            next: "Next I want to learn from real outcomes: use tracker events (saved, applied, interview) as signals, compare ranking strategies on that data, then test the weights with real users.",
            sources: "Details and numbers from the project’s README and evaluation report.",
        },
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

/** Background facts come from public/resume.pdf; keep them in sync with the résumé. */
export const education = [
    {
        school: "University at Buffalo (SUNY)",
        place: "Buffalo, NY",
        degree: "Master of Science in Engineering Science",
        dates: "Aug 2024 – Jan 2026",
    },
    {
        school: "KL University",
        place: "India",
        degree: "Bachelor of Technology in Computer Science (Honors)",
        dates: "Jul 2020 – May 2024",
    },
];

export const experience = [
    {
        role: "Software Development Intern",
        org: "AICTE",
        place: "India",
        dates: "Mar 2022 – May 2022",
        points: [
            "Automated repetitive development workflows in Java and Python, using modular design and shared coding standards to build reusable components.",
            "Delivered REST API features across Agile sprints, working through integration issues with technical and non-technical teammates.",
        ],
    },
];

export const certifications = [
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified Cloud Practitioner",
    "Red Hat Certified Enterprise Application Developer",
];
