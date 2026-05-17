import { Brain, Cpu, Server, Code2, BarChart2, Cloud, Database, GitBranch } from 'lucide-react';
import {
    SiPytorch, SiScikitlearn, SiNumpy, SiPandas, SiYolo,
    SiLangchain, SiGooglegemini, SiMeta, SiOpenai,
    SiDocker, SiGithubactions, SiRender,
    SiReact, SiFastapi, SiNodedotjs, SiMongodb, SiPython, SiMysql,
} from 'react-icons/si';
import type { ReactNode } from 'react';

interface Skill { label: string; icon: ReactNode; color: string; }

const categories: { icon: ReactNode; title: string; accent: string; skills: Skill[] }[] = [
    {
        icon: <Brain size={26} />,
        title: 'AI / ML Core',
        accent: '#0071e3',
        skills: [
            { label: 'PyTorch',      icon: <SiPytorch />,     color: '#EE4C2C' },
            { label: 'Scikit-learn', icon: <SiScikitlearn />, color: '#F7931E' },
            { label: 'YOLOv8',      icon: <SiYolo />,        color: '#111111' },
            { label: 'NumPy',        icon: <SiNumpy />,       color: '#4DABCF' },
            { label: 'Pandas',       icon: <SiPandas />,      color: '#150458' },
            { label: 'Matplotlib',   icon: <BarChart2 size={13} />, color: '#11557c' },
        ],
    },
    {
        icon: <Code2 size={26} />,
        title: 'LLM & RAG',
        accent: '#34c759',
        skills: [
            { label: 'LangChain',      icon: <SiLangchain />,    color: '#1C3C3C' },
            { label: 'Gemini Pro',     icon: <SiGooglegemini />, color: '#8E75B2' },
            { label: 'LLaMA-3',       icon: <SiMeta />,         color: '#0081FB' },
            { label: 'Faster-Whisper', icon: <SiOpenai />,      color: '#412991' },
            { label: 'ChromaDB',       icon: <Database size={13} />, color: '#FF6B35' },
        ],
    },
    {
        icon: <Server size={26} />,
        title: 'MLOps & Cloud',
        accent: '#ff9500',
        skills: [
            { label: 'Docker',          icon: <SiDocker />,         color: '#2496ED' },
            { label: 'AWS',             icon: <Cloud size={13} />,   color: '#FF9900' },
            { label: 'GitHub Actions',  icon: <SiGithubactions />,  color: '#2088FF' },
            { label: 'Render',          icon: <SiRender />,         color: '#46E3B7' },
            { label: 'CI/CD',           icon: <GitBranch size={13} />, color: '#6e6e73' },
        ],
    },
    {
        icon: <Cpu size={26} />,
        title: 'Full-Stack Web',
        accent: '#af52de',
        skills: [
            { label: 'React.js',  icon: <SiReact />,    color: '#61DAFB' },
            { label: 'FastAPI',   icon: <SiFastapi />,  color: '#009688' },
            { label: 'Node.js',   icon: <SiNodedotjs />,color: '#339933' },
            { label: 'MongoDB',   icon: <SiMongodb />,  color: '#47A248' },
            { label: 'Python',    icon: <SiPython />,   color: '#3776AB' },
            { label: 'SQL',       icon: <SiMysql />,    color: '#4479A1' },
        ],
    },
];

function SkillChip({ skill }: { skill: Skill }) {
    return (
        <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '6px',
            background: '#ffffff', border: '1px solid var(--border-color)',
            padding: '6px 12px 6px 10px', borderRadius: '980px',
            fontSize: '0.82rem', fontWeight: 500, color: 'var(--text-primary)',
            transition: 'box-shadow 0.2s, transform 0.2s',
            cursor: 'default', whiteSpace: 'nowrap',
        }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLSpanElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.1)';
                (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLSpanElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(0)';
            }}
        >
            <span style={{ color: skill.color, display: 'flex', alignItems: 'center', fontSize: '13px' }}>
                {skill.icon}
            </span>
            {skill.label}
        </span>
    );
}

export default function Skills() {
    return (
        <section id="skills" style={{ background: 'var(--bg-alt)' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p className="eyebrow" style={{ marginBottom: '12px' }}>Expertise</p>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>Technical Arsenal</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Core tools and frameworks powering modern AI architectures —
                        grounded in linear algebra, calculus, and probability.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                    {categories.map((cat, i) => (
                        <div key={i} style={{
                            background: '#ffffff', borderRadius: '20px',
                            border: '1px solid var(--border-color)', padding: '32px 28px',
                            transition: 'box-shadow 0.25s, transform 0.25s',
                        }}
                            onMouseEnter={e => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.09)';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)';
                            }}
                            onMouseLeave={e => {
                                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                            }}
                        >
                            <div style={{
                                width: '50px', height: '50px', borderRadius: '14px',
                                background: `${cat.accent}14`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: cat.accent, marginBottom: '20px',
                            }}>
                                {cat.icon}
                            </div>
                            <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '18px', color: 'var(--text-primary)' }}>
                                {cat.title}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {cat.skills.map(s => <SkillChip key={s.label} skill={s} />)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
