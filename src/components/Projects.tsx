import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        tag: 'Computer Vision · LLM · RAG',
        title: 'SOLIX.AI',
        desc: 'AI-Powered Solar Energy Feasibility System',
        detail: 'Engineered a custom dataset of Sri Lankan satellite imagery to fine-tune YOLOv8, achieving 80% mAP for precise rooftop segmentation. Architected a RAG pipeline using LangChain and ChromaDB to ground LLM responses in technical CEB documentation.',
        stack: ['Python', 'PyTorch', 'YOLOv8', 'LangChain', 'Gemini Pro', 'ChromaDB', 'FastAPI'],
        link: 'https://github.com/heyiamheshan',
        color: '#0071e3',
    },
    {
        tag: 'Voice AI · ASR · LLM',
        title: 'MediAgent SL',
        desc: 'Voice-Enabled Medical AI Assistant',
        detail: 'Built a low-latency medical Q&A system using RAG and Groq LPU acceleration for rapid document retrieval. Integrated Faster-Whisper (ASR) and Edge-TTS for real-time, bi-directional voice communication.',
        stack: ['Python', 'LLaMA-3', 'LangChain', 'RAG', 'Faster-Whisper', 'Streamlit'],
        link: 'https://github.com/heyiamheshan',
        color: '#34c759',
    },
    {
        tag: 'Full-Stack · Issue Tracking · Web App',
        title: 'trackNFix',
        desc: 'Smart Issue Tracking & Fix Management System',
        detail: 'A full-stack web application for logging, tracking, and resolving issues in real time. Features role-based dashboards, status workflows, and analytics to streamline bug triage and resolution cycles.',
        stack: ['React.js', 'Node.js', 'MongoDB', 'FastAPI', 'Python'],
        link: 'https://github.com/heyiamheshan',
        color: '#af52de',
    },
];

export default function Projects() {
    return (
        <section id="projects" style={{ background: 'var(--bg-color)' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p className="eyebrow" style={{ marginBottom: '12px' }}>Work</p>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>Featured Projects</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        End-to-end AI engineering case studies built for real-world impact.
                    </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {projects.map((p, i) => (
                        <div key={i} style={{
                            background: 'var(--bg-alt)',
                            borderRadius: '24px',
                            border: '1px solid var(--border-color)',
                            padding: '48px',
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '48px',
                            alignItems: 'center',
                            transition: 'box-shadow 0.25s',
                        }}
                            onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 40px rgba(0,0,0,0.08)'}
                            onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'}
                        >
                            {/* Left */}
                            <div>
                                <span style={{
                                    fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.06em',
                                    textTransform: 'uppercase', color: p.color,
                                    background: `${p.color}14`, padding: '4px 12px',
                                    borderRadius: '980px', display: 'inline-block', marginBottom: '20px',
                                }}>{p.tag}</span>

                                <h3 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '8px', color: 'var(--text-primary)' }}>
                                    {p.title}
                                </h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                                    {p.desc}
                                </p>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                    <a href={p.link} target="_blank" rel="noreferrer" className="glass-btn primary" style={{ fontSize: '0.85rem', padding: '8px 18px' }}>
                                        <FiGithub size={14} /> GitHub
                                    </a>
                                    <a href={p.link} target="_blank" rel="noreferrer" className="glass-btn" style={{ fontSize: '0.85rem', padding: '8px 18px' }}>
                                        <FiExternalLink size={14} /> Live
                                    </a>
                                </div>
                            </div>

                            {/* Right */}
                            <div>
                                <p style={{ fontSize: '0.97rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px' }}>
                                    {p.detail}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {p.stack.map(s => <span key={s} className="glass-chip" style={{ fontSize: '0.78rem' }}>{s}</span>)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
