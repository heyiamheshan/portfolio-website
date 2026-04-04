import { FiGithub } from 'react-icons/fi';

export default function Projects() {
    const projects = [
        {
            title: "SOLIX.AI",
            role: "End-to-End AI Developer",
            desc: "AI-Powered Solar Energy Feasibility System",
            stack: ["Python", "PyTorch", "YOLOv8", "LangChain", "RAG (Gemini Pro)", "ChromaDB", "FastAPI"],
            highlights: [
                "Engineered a custom dataset of Sri Lankan satellite imagery to fine-tune YOLOv8, achieving 80% mAP for precise rooftop segmentation.",
                "Architected a Retrieval-Augmented Generation pipeline using LangChain and ChromaDB to ground LLM responses in technical CEB documentation."
            ],
            link: "https://github.com/heyiamheshan"
        },
        {
            title: "MediAgent SL",
            role: "End-to-End AI Developer",
            desc: "Voice-Enabled Medical AI Assistant",
            stack: ["Python", "LLaMA-3 (Groq)", "LangChain", "RAG", "Faster-Whisper", "Streamlit"],
            highlights: [
                "System Design: Built a low-latency medical Q&A system using RAG and Groq LPU acceleration for rapid document retrieval.",
                "Multimodal Interaction: Integrated Faster-Whisper (ASR) and Edge-TTS for real-time, bi-directional voice communication."
            ],
            link: "https://github.com/heyiamheshan"
        }
    ];

    return (
        <section id="projects" className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>Featured Research & Development</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
                Highlighting high-end engineering case studies and structurally robust ML pipelines.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                {projects.map((proj, idx) => (
                    <div key={idx} className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                            <div>
                                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>{proj.title}</h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{proj.desc} | <span className="text-accent">{proj.role}</span></p>
                            </div>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <a href={proj.link} target="_blank" rel="noreferrer" className="glass-btn" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>
                                    <FiGithub size={16} /> GitHub
                                </a>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            {proj.stack.map(s => <span key={s} className="glass-chip" style={{ fontSize: '0.8rem', padding: '4px 10px' }}>{s}</span>)}
                        </div>

                        <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            {proj.highlights.map((point, i) => (
                                <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: 'var(--text-primary)', lineHeight: 1.6, fontSize: '0.95rem' }}>
                                    <div style={{ background: 'var(--accent-color)', width: '6px', height: '6px', borderRadius: '50%', marginTop: '10px', flexShrink: 0 }}></div>
                                    <span style={{ opacity: 0.85 }}>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
