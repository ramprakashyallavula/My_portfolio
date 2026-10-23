import type { CSSProperties } from "react";

/*
 * Code-drawn project illustrations. Every colour comes from theme tokens via the `.ill-*`
 * classes in globals.css, so they follow light/dark mode. Content is representative sample
 * data that shows what each project does; none of it is a screenshot or a measured result.
 *
 * Motion: the static drawing is the resting state. Elements with `ill-a-*` classes are
 * animated by CSS only while a card is hovered or when the wrapper has `ill-autoplay`
 * (project pages). `--d` staggers delays.
 */

const delay = (seconds: number) => ({ "--d": `${seconds}s` }) as CSSProperties;

function Kanban() {
    const columns = [
        { x: 24, title: "TO DO", cards: [["sky", "admin"]] },
        { x: 172, title: "IN PROGRESS", cards: [["sand", "member"]] },
        { x: 320, title: "DONE", cards: [["sage", "member"]] },
    ] as const;
    // The travelling task starts in the second To do slot.
    const mover = { x: 34, y: 160 };
    return (
        <svg className="ill" viewBox="0 0 480 260" role="presentation">
            <rect className="ill-card" x="24" y="16" width="432" height="30" rx="8" />
            <text className="ill-text ill-text-strong" x="40" y="35">Sprint board</text>
            <g transform="translate(330 23)">
                <rect className="ill-pill-sky" width="110" height="16" rx="8" />
                <rect className="ill-stroke-sky" x="9" y="7" width="8" height="6" rx="1.5" fill="none" />
                <path className="ill-stroke-sky" d="M10.5 7V5.5a2.5 2.5 0 0 1 5 0V7" fill="none" />
                <text className="ill-text ill-text-sky" x="24" y="11.5">signed in · admin</text>
            </g>
            {columns.map((column) => (
                <g key={column.title}>
                    <rect className="ill-column" x={column.x} y="58" width="136" height="188" rx="10" />
                    <text className="ill-text" x={column.x + 12} y="76">{column.title}</text>
                    <circle className="ill-muted" cx={column.x + 122} cy="73" r="3" />
                    {column.cards.map(([tone, role], index) => {
                        const y = 86 + index * 74;
                        const done = column.title === "DONE";
                        return (
                            <g key={index}>
                                <rect className="ill-card" x={column.x + 10} y={y} width="116" height="62" rx="7" />
                                <rect className={`ill-${tone}`} x={column.x + 10} y={y} width="4" height="62" rx="2" />
                                <rect className="ill-bar" x={column.x + 22} y={y + 12} width={done ? 64 : 84} height="6" rx="3" />
                                <rect className="ill-bar-soft" x={column.x + 22} y={y + 24} width="56" height="5" rx="2.5" />
                                <circle className={`ill-${tone}`} cx={column.x + 30} cy={y + 46} r="7" />
                                <rect className={`ill-pill-${role === "admin" ? "sky" : "sage"}`} x={column.x + 42} y={y + 39} width={role === "admin" ? 38 : 48} height="14" rx="7" />
                                <text className={`ill-text ill-text-${role === "admin" ? "sky" : "sage"}`} x={column.x + 49} y={y + 49}>{role}</text>
                                {done && <path className="ill-stroke-sage" d={`M${column.x + 100} ${y + 46}l4 4 8-9`} fill="none" strokeWidth="2.2" />}
                            </g>
                        );
                    })}
                </g>
            ))}
            {/* Travelling task: To do → In progress → Done, then ticks off. */}
            <g className="ill-a-move">
                <rect className="ill-card ill-card-lift" x={mover.x} y={mover.y} width="116" height="62" rx="7" />
                <rect className="ill-accent" x={mover.x} y={mover.y} width="4" height="62" rx="2" />
                <rect className="ill-bar" x={mover.x + 12} y={mover.y + 12} width="76" height="6" rx="3" />
                <rect className="ill-bar-soft" x={mover.x + 12} y={mover.y + 24} width="50" height="5" rx="2.5" />
                <circle className="ill-accent" cx={mover.x + 20} cy={mover.y + 46} r="7" />
                <rect className="ill-pill-sky" x={mover.x + 32} y={mover.y + 39} width="38" height="14" rx="7" />
                <text className="ill-text ill-text-sky" x={mover.x + 39} y={mover.y + 49}>admin</text>
                <path className="ill-stroke-sage ill-a-movecheck" d={`M${mover.x + 90} ${mover.y + 46}l4 4 8-9`} fill="none" strokeWidth="2.2" />
            </g>
        </svg>
    );
}

function TaxiPipeline() {
    const bars = [34, 22, 46, 64, 52, 78, 58, 40];
    const busy = [0, 2, 4, 5, 7];
    return (
        <svg className="ill" viewBox="0 0 480 260" role="presentation">
            {/* faint street grid */}
            <g className="ill-grid">
                {Array.from({ length: 9 }, (_, i) => <line key={`v${i}`} x1={20 + i * 55} y1="0" x2={i * 55 - 40} y2="260" />)}
                {Array.from({ length: 6 }, (_, i) => <line key={`h${i}`} x1="0" y1={20 + i * 48} x2="480" y2={i * 48 + 8} />)}
            </g>
            {/* source files */}
            <g transform="translate(26 74)">
                <rect className="ill-card" x="12" y="0" width="88" height="104" rx="8" />
                <rect className="ill-card" x="6" y="8" width="88" height="104" rx="8" />
                <rect className="ill-card" x="0" y="16" width="88" height="104" rx="8" />
                <rect className="ill-sand" x="12" y="30" width="22" height="22" rx="5" />
                <rect className="ill-bar" x="12" y="62" width="62" height="5" rx="2.5" />
                <rect className="ill-bar-soft" x="12" y="73" width="48" height="5" rx="2.5" />
                <rect className="ill-bar-soft" x="12" y="84" width="56" height="5" rx="2.5" />
                <text className="ill-text" x="0" y="140">raw trip data</text>
            </g>
            <path className="ill-flow ill-stroke-muted" d="M128 140h44" />
            <path className="ill-stroke-muted" d="M168 135l6 5-6 5" fill="none" />
            {[0, 0.5].map((d) => <circle key={d} className="ill-sand ill-a-packet" cx="130" cy="140" r="3.5" style={delay(d)} />)}
            {/* spark cluster: executors pick up work in turn */}
            <g transform="translate(182 62)">
                <rect className="ill-card" width="120" height="132" rx="10" />
                <text className="ill-text ill-text-strong" x="14" y="24">spark job</text>
                {Array.from({ length: 9 }, (_, i) => (
                    <rect key={i} className={`${busy.includes(i) ? "ill-sand" : "ill-bar-soft"} ill-a-exec`} style={delay([0, 0.7, 0.35, 1.05, 0.2, 0.9, 0.55, 1.25, 0.1][i])} x={14 + (i % 3) * 32} y={38 + Math.floor(i / 3) * 28} width="26" height="22" rx="5" />
                ))}
                <text className="ill-text" x="0" y="152">distributed processing</text>
            </g>
            <path className="ill-flow ill-stroke-muted" d="M310 140h40" />
            <path className="ill-stroke-muted" d="M346 135l6 5-6 5" fill="none" />
            {[0.25, 0.75].map((d) => <circle key={d} className="ill-sky ill-a-packet ill-a-packet-short" cx="312" cy="140" r="3.5" style={delay(d)} />)}
            {/* output on AWS: hourly bars rise and fall */}
            <g transform="translate(358 62)">
                <rect className="ill-card" width="98" height="132" rx="10" />
                <rect className="ill-pill-sky" x="12" y="12" width="34" height="16" rx="8" />
                <text className="ill-text ill-text-sky" x="19" y="23.5">AWS</text>
                {bars.map((h, i) => <rect key={i} className={`${i === 5 ? "ill-accent" : "ill-sky"} ill-a-bar`} style={delay(i * 0.14)} x={12 + i * 10} y={118 - h} width="7" height={h} rx="2" />)}
                <rect className="ill-bar-soft" x="12" y="121" width="76" height="2" rx="1" />
                <text className="ill-text" x="0" y="152">trips by hour</text>
            </g>
        </svg>
    );
}

function FoodDonation() {
    const steps = ["listed", "claimed", "picked up"];
    return (
        <svg className="ill" viewBox="0 0 480 260" role="presentation">
            {/* donation card */}
            <g transform="translate(24 30)">
                <rect className="ill-card" width="214" height="200" rx="12" />
                <rect className="ill-sage" x="16" y="16" width="34" height="34" rx="9" />
                <path className="ill-stroke-card" d="M27 36c4-10 10-12 14-12-1 8-6 13-14 12Zm0 0c0-4 2-7 4-9" fill="none" strokeWidth="2" />
                <text className="ill-text ill-text-strong" x="62" y="30">Donation #1042</text>
                <text className="ill-text" x="62" y="45">fresh produce · 12 kg</text>
                <rect className="ill-bar-soft" x="16" y="66" width="182" height="1" />
                <circle className="ill-stroke-muted" cx="24" cy="86" r="6" fill="none" />
                <path className="ill-stroke-muted" d="M24 82.5V86l2.5 1.5" fill="none" />
                <text className="ill-text" x="38" y="90">pickup by 6:00 pm</text>
                {/* Resting state: first two steps done. Animated: each ticks off in order. */}
                {steps.map((label, i) => {
                    const done = i < 2;
                    return (
                        <g key={label} transform={`translate(16 ${112 + i * 28})`}>
                            <circle className={`${done ? "ill-sage" : "ill-column"} ill-a-step${i + 1}`} cx="8" cy="8" r="8" />
                            <path className={`ill-stroke-card ill-a-tick${i + 1}${done ? "" : " ill-hidden"}`} d="M4.5 8.2l2.4 2.4 4.6-5" fill="none" strokeWidth="1.8" />
                            {i < steps.length - 1 && <rect className={`${i === 0 ? "ill-sage" : "ill-bar-soft"} ill-a-step${i + 2}`} x="7" y="17" width="2" height="11" />}
                            <text className={`ill-text${done ? " ill-text-strong" : ""}`} x="26" y="12">{label}</text>
                        </g>
                    );
                })}
            </g>
            {/* API to database */}
            <g transform="translate(262 46)">
                <rect className="ill-pill-sage" width="122" height="26" rx="13" />
                <text className="ill-text ill-text-sage" x="14" y="17">POST /donations</text>
            </g>
            <path className="ill-flow ill-stroke-muted" d="M323 76v34" />
            <path className="ill-stroke-muted" d="M318 104l5 6 5-6" fill="none" />
            <circle className="ill-sage ill-a-drop" cx="323" cy="78" r="3.5" />
            <g transform="translate(262 116)">
                <rect className="ill-card" width="194" height="114" rx="10" />
                <ellipse className="ill-sky" cx="22" cy="20" rx="9" ry="4" />
                <path className="ill-sky" d="M13 20v12c0 2.2 4 4 9 4s9-1.8 9-4V20c0 2.2-4 4-9 4s-9-1.8-9-4Z" />
                <text className="ill-text ill-text-strong" x="40" y="28">donations</text>
                {[0, 1, 2].map((row) => (
                    <g key={row} transform={`translate(14 ${46 + row * 20})`}>
                        <rect className="ill-bar-soft" width="166" height="14" rx="4" />
                        <rect className="ill-bar" x="8" y="5" width="34" height="4" rx="2" />
                        <rect className="ill-bar" x="54" y="5" width="56" height="4" rx="2" />
                        <rect className={`${row === 2 ? "ill-sand ill-a-status" : "ill-sage"}`} x="124" y="3" width="34" height="8" rx="4" />
                    </g>
                ))}
            </g>
        </svg>
    );
}

function JobMatching() {
    const jobs = [{ title: "Data Engineer", score: 0.9 }, { title: "Backend Developer", score: 0.72 }, { title: "ML Engineer", score: 0.55 }];
    const tokens = [{ x: 14, w: 46, label: "python" }, { x: 66, w: 32, label: "sql" }, { x: 14, w: 42, label: "spark", y: 1 }, { x: 62, w: 34, label: "nlp", y: 1 }];
    return (
        <svg className="ill" viewBox="0 0 480 260" role="presentation">
            {/* résumé: skills light up as they are extracted */}
            <g transform="translate(24 28)">
                <rect className="ill-card" width="136" height="204" rx="10" />
                <circle className="ill-accent" cx="26" cy="28" r="12" />
                <rect className="ill-bar" x="46" y="20" width="70" height="6" rx="3" />
                <rect className="ill-bar-soft" x="46" y="32" width="48" height="5" rx="2.5" />
                {[0, 1, 2, 3].map((line) => <rect key={line} className="ill-bar-soft" x="14" y={58 + line * 12} width={line % 2 ? 84 : 108} height="5" rx="2.5" />)}
                {tokens.map((token, i) => (
                    <g key={token.label} transform={`translate(${token.x} ${116 + (token.y ?? 0) * 22})`}>
                        <rect className="ill-pill-accent ill-a-token" style={delay(i * 0.3)} width={token.w} height="16" rx="8" />
                        <text className="ill-text ill-text-accent" x="7" y="11.5">{token.label}</text>
                    </g>
                ))}
                {[0, 1].map((line) => <rect key={line} className="ill-bar-soft" x="14" y={170 + line * 12} width={line ? 70 : 102} height="5" rx="2.5" />)}
            </g>
            {/* NLP step */}
            <path className="ill-flow ill-stroke-muted" d="M170 130h44" />
            <path className="ill-stroke-muted" d="M210 125l6 5-6 5" fill="none" />
            <rect className="ill-pill-sand ill-a-pulse" x="168" y="102" width="46" height="18" rx="9" />
            <text className="ill-text ill-text-sand" x="180" y="114.5">NLP</text>
            {/* ranked matches: scores fill in, best first */}
            <g transform="translate(226 40)">
                <text className="ill-text" x="0" y="0">best matches</text>
                {jobs.map((job, i) => (
                    <g key={job.title} transform={`translate(0 ${14 + i * 60})`}>
                        <rect className="ill-card" width="230" height="50" rx="9" />
                        <rect className={i === 0 ? "ill-accent" : "ill-sky"} x="12" y="12" width="26" height="26" rx="7" />
                        <text className="ill-text ill-text-strong" x="50" y="22">{job.title}</text>
                        <rect className="ill-bar-soft" x="50" y="31" width="164" height="6" rx="3" />
                        <rect className={`${i === 0 ? "ill-accent" : "ill-sky"} ill-a-match`} style={delay(0.5 + i * 0.25)} x="50" y="31" width={164 * job.score} height="6" rx="3" />
                    </g>
                ))}
            </g>
        </svg>
    );
}

export const illustrations: Record<string, { Component: () => React.JSX.Element; tone: string }> = {
    "project-management-system": { Component: Kanban, tone: "sky" },
    "nyc-taxi-data-pipeline": { Component: TaxiPipeline, tone: "sand" },
    "waste-food-management-system": { Component: FoodDonation, tone: "sage" },
    "job-recommendation-system": { Component: JobMatching, tone: "accent" },
};
