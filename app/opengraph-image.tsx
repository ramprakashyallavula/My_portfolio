import { ImageResponse } from "next/og";

export const alt = "Ram Prakash Yallavula — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "72px 80px",
                    color: "#eef0f3",
                    background: "#1e2633",
                    borderBottom: "14px solid #f08a6c",
                }}
            >
                <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: "-0.06em" }}>
                    rpy<span style={{ color: "#f08a6c" }}>.</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ fontSize: 26, color: "#f08a6c", letterSpacing: "0.12em", textTransform: "uppercase" }}>Software Engineer</div>
                    <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1.05, marginTop: 18 }}>Ram Prakash Yallavula</div>
                    <div style={{ fontSize: 32, color: "#d9dde3", marginTop: 26 }}>Full-stack apps · Backend APIs · Data pipelines · Cloud</div>
                </div>
                <div style={{ display: "flex", fontSize: 24, color: "#a9b2bd" }}>ramprakashyallavula.com</div>
            </div>
        ),
        size,
    );
}
