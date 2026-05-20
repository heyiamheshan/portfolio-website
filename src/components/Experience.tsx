const typeStyle: Record<string, { color: string; bg: string }> = {
    'Internship': { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)' },
    'Part-Time':  { color: '#0071e3', bg: 'rgba(0,113,227,0.1)' },
    'Full-Time':  { color: '#34c759', bg: 'rgba(52,199,89,0.1)' },
    'Contract':   { color: '#af52de', bg: 'rgba(175,82,222,0.1)' },
};

const experiences = [
    {
        index: '01',
        period: '2026 – Present',
        role: 'Innovation & R&D Intern',
        company: 'Dialog Axiata PLC',
        location: 'Sri Lanka',
        type: 'Internship',
        description: 'Bridging the gap between cutting-edge technology and real-world business solutions — building AI products, managing tech projects, and researching the next big thing in tech.',
        highlights: [
            'AI App Development: Designing, coding, and testing next-generation AI-powered applications',
            'Application Deployment: Supporting deployment and scaling of applications in live/cloud environments',
            'R&D on AI: Conducting hands-on research into emerging AI trends, LLMs, and new tools to keep the tech stack ahead of the curve',
            'Business Analysis: Collaborating with stakeholders to gather requirements and translate business needs into technical solutions',
            'Project Management: Planning project sprints, tracking milestones, and ensuring smooth delivery of innovation initiatives',
        ],
        tags: ['AI Development', 'LLMs', 'Cloud Deployment', 'R&D', 'Business Analysis', 'Project Management'],
    },
    {
        index: '02',
        period: '2023 – Present',
        role: 'Agriculture Finance Advisor',
        company: 'Ceylon Green Life Plantation Company',
        location: 'Sri Lanka',
        type: 'Part-Time',
        description: 'Providing financial advisory services while spearheading technical initiatives to digitise plantation operations.',
        highlights: [
            'Analysed agricultural investment portfolios and advised on risk-mitigation strategies',
            'Designed internal data-tracking tools to streamline financial reporting',
            'Coordinated cross-functional teams to align financial planning with field operations',
        ],
        tags: ['Financial Analysis', 'Data Reporting', 'Advisory'],
    },
];

export default function Experience() {
    return (
        <section id="experience" style={{ background: 'var(--bg-color)' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p className="eyebrow" style={{ marginBottom: '12px' }}>Experience</p>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>Work Experience</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Professional roles where I applied technology and analytical thinking to real-world problems.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {experiences.map((exp, i) => {
                        const ts = typeStyle[exp.type] ?? typeStyle['Part-Time'];
                        return (
                            <div key={i} style={{
                                background: 'var(--bg-alt)',
                                borderRadius: '24px',
                                border: '1px solid var(--border-color)',
                                padding: '40px 48px',
                                display: 'flex', gap: '48px', flexWrap: 'wrap',
                                transition: 'box-shadow 0.25s',
                            }}
                                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.08)'}
                                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'}
                            >
                                {/* Left */}
                                <div style={{ flex: '0 0 220px' }}>
                                    <div style={{ fontSize: '4rem', fontWeight: 900, color: ts.color, opacity: 0.1, lineHeight: 1, fontVariantNumeric: 'tabular-nums', marginBottom: '-12px' }}>
                                        {exp.index}
                                    </div>
                                    <span style={{
                                        display: 'inline-block', fontSize: '0.72rem', fontWeight: 600,
                                        letterSpacing: '0.05em', textTransform: 'uppercase',
                                        color: ts.color, background: ts.bg,
                                        padding: '3px 10px', borderRadius: '980px', marginBottom: '12px',
                                    }}>{exp.type}</span>
                                    <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '6px', color: 'var(--text-primary)' }}>
                                        {exp.role}
                                    </h3>
                                    <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                                        {exp.company}
                                    </p>
                                    <p className="font-mono" style={{ fontSize: '0.8rem', color: ts.color, fontWeight: 600 }}>
                                        {exp.period}
                                    </p>
                                    <p style={{ fontSize: '0.82rem', color: 'var(--text-tertiary)', marginTop: '4px' }}>
                                        {exp.location}
                                    </p>
                                </div>

                                {/* Right */}
                                <div style={{ flex: '1 1 320px' }}>
                                    <p style={{ fontSize: '0.97rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '20px' }}>
                                        {exp.description}
                                    </p>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                                        {exp.highlights.map((h, j) => (
                                            <li key={j} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', fontSize: '0.95rem', lineHeight: 1.65 }}>
                                                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: ts.color, flexShrink: 0, marginTop: '8px' }} />
                                                <span style={{ color: 'var(--text-primary)', opacity: 0.85 }}>{h}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {exp.tags.map(t => <span key={t} className="glass-chip" style={{ fontSize: '0.78rem' }}>{t}</span>)}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
