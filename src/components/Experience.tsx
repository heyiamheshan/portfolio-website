import { useState } from 'react';

const experiences = [
    {
        index: "01",
        period: "2023 – Present",
        role: "Agriculture Finance Advisor",
        company: "Ceylon Green Life Plantation Company",
        location: "Sri Lanka",
        type: "Part-Time",
        description: "Providing financial advisory services while spearheading technical initiatives to digitize plantation operations.",
        highlights: [
            "Analysed agricultural investment portfolios and advised on risk-mitigation strategies",
            "Designed internal data-tracking tools to streamline financial reporting",
            "Coordinated cross-functional teams to align financial planning with field operations",
        ],
        tags: ["Financial Analysis", "Data Reporting", "Advisory"],
    },
];

const typeStyle: Record<string, { bg: string; border: string; color: string }> = {
    "Full-Time":  { bg: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.4)",  color: "#10b981" },
    "Part-Time":  { bg: "rgba(14,165,233,0.12)",  border: "rgba(14,165,233,0.4)",  color: "var(--accent-color)" },
    "Internship": { bg: "rgba(251,191,36,0.12)",  border: "rgba(251,191,36,0.4)",  color: "#fbbf24" },
    "Contract":   { bg: "rgba(168,85,247,0.12)",  border: "rgba(168,85,247,0.4)",  color: "#a855f7" },
};

export default function Experience() {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    return (
        <section id="experience" className="section-container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>Work Experience</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '56px', maxWidth: '600px' }}>
                Professional roles where I applied technology and analytical thinking to real-world problems.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {experiences.map((exp, i) => {
                    const ts = typeStyle[exp.type] ?? typeStyle["Part-Time"];
                    const isHovered = hoveredIdx === i;

                    return (
                        <div
                            key={i}
                            className="glass-panel"
                            onMouseEnter={() => setHoveredIdx(i)}
                            onMouseLeave={() => setHoveredIdx(null)}
                            style={{
                                padding: 0,
                                overflow: 'hidden',
                                display: 'flex',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                                boxShadow: isHovered
                                    ? '0 16px 48px rgba(14,165,233,0.15)'
                                    : 'var(--glass-shadow)',
                            }}
                        >
                            {/* Left accent bar */}
                            <div style={{
                                width: '5px',
                                flexShrink: 0,
                                background: `linear-gradient(180deg, var(--accent-color), transparent)`,
                                opacity: isHovered ? 1 : 0.5,
                                transition: 'opacity 0.3s ease',
                            }} />

                            {/* Card body */}
                            <div style={{
                                display: 'flex',
                                flex: 1,
                                flexWrap: 'wrap',
                                gap: '0',
                            }}>
                                {/* ── Left panel: identity info ── */}
                                <div style={{
                                    flex: '0 0 280px',
                                    padding: '36px 32px',
                                    borderRight: '1px solid var(--glass-border)',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    gap: '24px',
                                }}>
                                    {/* Large faint index */}
                                    <span style={{
                                        position: 'absolute',
                                        top: '-10px',
                                        right: '16px',
                                        fontSize: '6rem',
                                        fontWeight: 900,
                                        color: 'var(--accent-color)',
                                        opacity: 0.06,
                                        lineHeight: 1,
                                        fontFamily: 'JetBrains Mono, monospace',
                                        userSelect: 'none',
                                        pointerEvents: 'none',
                                    }}>
                                        {exp.index}
                                    </span>

                                    <div>
                                        {/* Type badge */}
                                        <span style={{
                                            display: 'inline-block',
                                            fontSize: '0.72rem',
                                            fontWeight: 700,
                                            letterSpacing: '1px',
                                            textTransform: 'uppercase',
                                            padding: '4px 12px',
                                            borderRadius: '20px',
                                            background: ts.bg,
                                            border: `1px solid ${ts.border}`,
                                            color: ts.color,
                                            marginBottom: '16px',
                                        }}>
                                            {exp.type}
                                        </span>

                                        <h3 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '8px' }}>
                                            {exp.role}
                                        </h3>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500, lineHeight: 1.5 }}>
                                            {exp.company}
                                        </p>
                                    </div>

                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                                        <span className="font-mono text-accent" style={{ fontSize: '0.82rem', fontWeight: 600 }}>
                                            {exp.period}
                                        </span>
                                        <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                                            📍 {exp.location}
                                        </span>
                                    </div>
                                </div>

                                {/* ── Right panel: details ── */}
                                <div style={{
                                    flex: '1 1 320px',
                                    padding: '36px 36px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px',
                                }}>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.97rem' }}>
                                        {exp.description}
                                    </p>

                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', lineHeight: 1.65, fontSize: '0.95rem' }}>
                                                <span style={{
                                                    marginTop: '5px',
                                                    width: '7px',
                                                    height: '7px',
                                                    borderRadius: '50%',
                                                    background: 'var(--accent-color)',
                                                    flexShrink: 0,
                                                    boxShadow: '0 0 6px var(--accent-color)',
                                                }} />
                                                <span style={{ color: 'var(--text-primary)', opacity: 0.87 }}>{h}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto', paddingTop: '4px' }}>
                                        {exp.tags.map((tag, k) => (
                                            <span key={k} className="glass-chip" style={{ fontSize: '0.78rem' }}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
