import { useState } from 'react';

const experiences = [
    {
        period: "2023 – Present",
        role: "Agriculture Finance Advisor",
        company: "Ceylon Green Life Plantation Company",
        location: "Sri Lanka · Part-Time",
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

const typeColor: Record<string, string> = {
    "Full-Time": "rgba(16, 185, 129, 0.15)",
    "Part-Time": "rgba(14, 165, 233, 0.15)",
    "Internship": "rgba(251, 191, 36, 0.15)",
    "Contract": "rgba(168, 85, 247, 0.15)",
};

const typeBorder: Record<string, string> = {
    "Full-Time": "rgba(16, 185, 129, 0.4)",
    "Part-Time": "rgba(14, 165, 233, 0.4)",
    "Internship": "rgba(251, 191, 36, 0.4)",
    "Contract": "rgba(168, 85, 247, 0.4)",
};

const typeText: Record<string, string> = {
    "Full-Time": "#10b981",
    "Part-Time": "var(--accent-color)",
    "Internship": "#fbbf24",
    "Contract": "#a855f7",
};

export default function Experience() {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <section id="experience" className="section-container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>
                Work Experience
            </h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '56px', maxWidth: '600px' }}>
                Professional roles where I applied technology and analytical thinking to real-world problems.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {experiences.map((exp, i) => {
                    const isOpen = expanded === i;
                    return (
                        <div
                            key={i}
                            className="glass-panel"
                            style={{
                                padding: '0',
                                cursor: 'pointer',
                                transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                                ...(isOpen ? { boxShadow: '0 12px 40px rgba(14, 165, 233, 0.12)' } : {}),
                            }}
                            onClick={() => setExpanded(isOpen ? null : i)}
                        >
                            {/* Header row */}
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '28px 32px',
                                gap: '16px',
                                flexWrap: 'wrap',
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap', flex: 1 }}>
                                    {/* Accent dot */}
                                    <div style={{
                                        width: '14px',
                                        height: '14px',
                                        borderRadius: '50%',
                                        background: 'var(--accent-color)',
                                        boxShadow: '0 0 10px var(--accent-color)',
                                        flexShrink: 0,
                                    }} />

                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '4px' }}>
                                            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{exp.role}</h3>
                                            <span style={{
                                                fontSize: '0.75rem',
                                                fontWeight: 600,
                                                padding: '3px 10px',
                                                borderRadius: '20px',
                                                background: typeColor[exp.type] ?? 'rgba(14,165,233,0.15)',
                                                border: `1px solid ${typeBorder[exp.type] ?? 'rgba(14,165,233,0.4)'}`,
                                                color: typeText[exp.type] ?? 'var(--accent-color)',
                                                letterSpacing: '0.5px',
                                            }}>
                                                {exp.type}
                                            </span>
                                        </div>
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                            {exp.company} &nbsp;·&nbsp; {exp.location}
                                        </p>
                                    </div>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span className="font-mono text-accent" style={{ fontSize: '0.85rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                                        {exp.period}
                                    </span>
                                    <div style={{
                                        width: '28px',
                                        height: '28px',
                                        borderRadius: '50%',
                                        border: '1px solid var(--glass-border)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: 'transform 0.3s ease',
                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                        flexShrink: 0,
                                    }}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            {/* Expandable body */}
                            <div style={{
                                overflow: 'hidden',
                                maxHeight: isOpen ? '600px' : '0',
                                transition: 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                            }}>
                                <div style={{
                                    padding: '0 32px 28px 32px',
                                    borderTop: '1px solid var(--glass-border)',
                                    paddingTop: '24px',
                                }}>
                                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                                        {exp.description}
                                    </p>

                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-primary)', opacity: 0.85, lineHeight: 1.6 }}>
                                                <span className="text-accent" style={{ marginTop: '4px', flexShrink: 0, fontSize: '0.75rem' }}>▸</span>
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {exp.tags.map((tag, k) => (
                                            <span key={k} className="glass-chip" style={{ fontSize: '0.8rem' }}>{tag}</span>
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
