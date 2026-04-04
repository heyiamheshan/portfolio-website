import { Download } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [githubStats, setGithubStats] = useState({ repos: 0, followers: 0 });

    useEffect(() => {
        fetch('https://api.github.com/users/heyiamheshan')
            .then(res => res.json())
            .then(data => {
                setGithubStats({ repos: data.public_repos || 0, followers: data.followers || 0 });
            })
            .catch(e => console.error(e));
    }, []);

    return (
        <section id="about" className="section-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '100px' }}>
            <div className="glass-panel animate-fade-in" style={{ padding: '40px', maxWidth: '800px', width: '100%' }}>
                <h2 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)', marginBottom: '16px', fontWeight: 600 }}>
                    AI & Machine Learning Engineer
                </h2>
                <h1 style={{ fontSize: '3.5rem', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px', background: '-webkit-linear-gradient(135deg, var(--text-primary), var(--accent-color))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    HESHAN PRAMUDITHA DHARMASENA
                </h1>
                <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', lineHeight: 1.6 }}>
                    Architecting the Future of AI & Machine Learning. 3rd Year BSc (Hons) IT Undergraduate specializing in building end-to-end AI systems, RAG pipelines, and high-performance ML architectures.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                    <a href="#" className="glass-btn primary" title="Download CV">
                        <Download size={20} /> Download CV
                    </a>
                    <a href="#projects" className="glass-btn">
                        View Research & Projects
                    </a>
                </div>

                {/* GitHub Live Integration */}
                <a href="https://github.com/heyiamheshan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    <div className="glass-panel" style={{ padding: '16px 24px', display: 'flex', alignItems: 'center', gap: '20px', transition: 'all 0.3s' }}>
                        <div style={{ padding: '10px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '12px', color: 'var(--accent-color)' }}>
                            <FiGithub size={24} />
                        </div>
                        <div>
                            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>GitHub Activity</div>
                            <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{githubStats.repos} <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>Repositories</span></span>
                                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{githubStats.followers} <span style={{ fontWeight: 400, color: 'var(--text-secondary)' }}>Followers</span></span>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    );
}
