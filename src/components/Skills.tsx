import { Brain, Cpu, Server, Code2 } from 'lucide-react';

export default function Skills() {
    const categories = [
        {
            title: "AI/ML Core",
            icon: <Brain size={24} className="text-accent" />,
            skills: ["PyTorch", "Scikit-learn", "YOLOv8", "NumPy", "Pandas", "Matplotlib"]
        },
        {
            title: "LLM & RAG",
            icon: <Code2 size={24} className="text-accent" />,
            skills: ["LangChain", "Gemini Pro", "LLaMA-3", "ChromaDB", "Faster-Whisper"]
        },
        {
            title: "MLOps & Cloud",
            icon: <Server size={24} className="text-accent" />,
            skills: ["Docker", "AWS (EC2, S3)", "GitHub Actions", "Render", "CI/CD"]
        },
        {
            title: "Full-Stack Web",
            icon: <Cpu size={24} className="text-accent" />,
            skills: ["React.js", "FastAPI", "Node.js", "MongoDB", "Python", "SQL"]
        }
    ];

    return (
        <section id="skills" className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>Technical Arsenal</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
                Foundational expertise and specialized tools driving modern AI architectures. High proficiency in Linear Algebra, Calculus, and Probability & Statistics.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
                {categories.map((cat, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '32px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ padding: '10px', background: 'var(--bg-color)', borderRadius: '12px', display: 'flex', border: '1px solid var(--glass-border)' }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>{cat.title}</h3>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {cat.skills.map(skill => (
                                <span key={skill} className="glass-chip">{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
