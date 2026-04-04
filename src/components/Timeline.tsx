export default function Timeline() {
    const items = [
        {
            date: "2024 - Present",
            title: "BSc (Hons) in Information Technology (MIT)",
            subtitle: "University of Kelaniya, Sri Lanka",
            desc: "Specialization: AI & Machine Learning. GPA: 3.5/4.0."
        },
        {
            date: "2023 - Present",
            title: "Agriculture Finance Advisor (Part-Time)",
            subtitle: "Ceylon Green Life Plantation Company",
            desc: "Providing financial advisory while driving technical initiatives."
        },
        {
            date: "Recent Achievement",
            title: "4th Place — JuniorHack 7.0 Pre-Hack Challenge",
            subtitle: "SESA, University of Kelaniya",
            desc: "Secured 4th rank among top competitors, demonstrating rapid algorithmic problem-solving under strict time constraints."
        }
    ];

    return (
        <section id="timeline" className="section-container" style={{ paddingTop: '80px', paddingBottom: '120px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>The Engineering Blueprint</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
                Foundations, experience, and academic trajectory.
            </p>

            <div style={{ position: 'relative', borderLeft: '2px solid var(--glass-border)', paddingLeft: '32px', marginLeft: '16px', display: 'flex', flexDirection: 'column', gap: '48px' }}>
                {items.map((item, i) => (
                    <div key={i} style={{ position: 'relative' }}>
                        <div style={{ position: 'absolute', left: '-41px', top: '0', width: '16px', height: '16px', borderRadius: '50%', background: 'var(--bg-color)', border: '4px solid var(--accent-color)', boxShadow: '0 0 12px var(--accent-color)' }}></div>
                        <span className="text-accent font-mono" style={{ fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '8px' }}>{item.date}</span>
                        <div className="glass-panel" style={{ padding: '24px' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>{item.title}</h3>
                            <h4 style={{ fontSize: '1rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '12px' }}>{item.subtitle}</h4>
                            <p style={{ color: 'var(--text-primary)', opacity: 0.85, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
