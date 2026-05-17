const items = [
    {
        date: '2024 – Present',
        title: 'BSc (Hons) Information Technology',
        subtitle: 'University of Kelaniya, Sri Lanka · AI & Machine Learning',
        desc: 'Specialisation in Artificial Intelligence and Machine Learning. Current GPA: 3.5 / 4.0.',
        color: '#0071e3',
    },
    {
        date: '2023 – Present',
        title: 'Agriculture Finance Advisor',
        subtitle: 'Ceylon Green Life Plantation Company · Part-Time',
        desc: 'Providing financial advisory while driving technical digitisation initiatives across plantation operations.',
        color: '#34c759',
    },
    {
        date: 'Recent',
        title: '4th Place — JuniorHack 7.0',
        subtitle: 'SESA, University of Kelaniya',
        desc: 'Secured 4th rank among top competitors, demonstrating rapid algorithmic problem-solving under strict time constraints.',
        color: '#ff9500',
    },
];

export default function Timeline() {
    return (
        <section id="timeline" style={{ background: 'var(--bg-alt)' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p className="eyebrow" style={{ marginBottom: '12px' }}>Journey</p>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>The Engineering Blueprint</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Foundations, experience, and academic trajectory.
                    </p>
                </div>

                <div style={{ maxWidth: '720px', margin: '0 auto', position: 'relative' }}>
                    {/* vertical line */}
                    <div style={{ position: 'absolute', left: '19px', top: 0, bottom: 0, width: '1px', background: 'var(--border-color)' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                        {items.map((item, i) => (
                            <div key={i} style={{ display: 'flex', gap: '28px', alignItems: 'flex-start' }}>
                                {/* dot */}
                                <div style={{
                                    flexShrink: 0, width: '40px', height: '40px', borderRadius: '50%',
                                    background: `${item.color}18`,
                                    border: `2px solid ${item.color}`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    zIndex: 1,
                                }}>
                                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: item.color }} />
                                </div>

                                {/* card */}
                                <div style={{
                                    flex: 1, background: '#ffffff', borderRadius: '16px',
                                    border: '1px solid var(--border-color)', padding: '24px 28px',
                                    transition: 'box-shadow 0.25s',
                                }}
                                    onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)'}
                                    onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'}
                                >
                                    <span className="font-mono" style={{ fontSize: '0.78rem', fontWeight: 600, color: item.color, display: 'block', marginBottom: '8px' }}>
                                        {item.date}
                                    </span>
                                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '4px', color: 'var(--text-primary)' }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                                        {item.subtitle}
                                    </p>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
