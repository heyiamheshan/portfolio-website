import { Download } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import { useEffect, useState } from 'react';

export default function Hero() {
    const [githubStats, setGithubStats] = useState({ repos: 0, followers: 0 });

    useEffect(() => {
        fetch('https://api.github.com/users/heyiamheshan')
            .then(r => r.json())
            .then(d => setGithubStats({ repos: d.public_repos || 0, followers: d.followers || 0 }))
            .catch(() => {});
    }, []);

    return (
        <section
            id="about"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '100px 24px 80px',
                position: 'relative',
                zIndex: 1,
                background: 'var(--bg-color)',
                maxWidth: '1200px',
                margin: '0 auto',
                gap: '64px',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}
        >
            {/* ── Left: text ── */}
            <div className="animate-fade-in" style={{ flex: '1 1 400px', maxWidth: '580px' }}>
                <p style={{
                    fontSize: '0.95rem', fontWeight: 500,
                    color: 'var(--accent-color)', marginBottom: '16px',
                    letterSpacing: '0.04em', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600,
                }}>
                    AI &amp; Machine Learning Engineer
                </p>

                <h1 style={{
                    fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.1,
                    marginBottom: '20px',
                    color: 'var(--text-primary)',
                }}>
                    Heshan Pramuditha{' '}
                    <span style={{ color: 'var(--accent-color)' }}>Dharmasena</span>
                </h1>

                <p style={{
                    fontSize: '1.1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.7,
                    marginBottom: '36px',
                    maxWidth: '500px',
                }}>
                    3rd Year BSc (Hons) IT Undergraduate specialising in end-to-end AI systems,
                    RAG pipelines, and high-performance ML architectures.
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
                    <a href="/heshan-cv.pdf" download="Heshan_Pramuditha_CV.pdf" className="glass-btn primary">
                        <Download size={16} /> Download CV
                    </a>
                    <a href="#projects" className="glass-btn">View Projects</a>
                </div>

                {/* GitHub stats strip */}
                <a
                    href="https://github.com/heyiamheshan"
                    target="_blank" rel="noreferrer"
                    style={{
                        textDecoration: 'none', display: 'inline-flex', alignItems: 'center',
                        gap: '16px', padding: '14px 24px',
                        background: 'var(--bg-alt)', borderRadius: '980px',
                        border: '1px solid var(--border-color)',
                        transition: 'box-shadow 0.2s, transform 0.2s', color: 'inherit',
                    }}
                    onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                    }}
                >
                    <FiGithub size={16} color="var(--text-secondary)" />
                    <span style={{ width: '1px', height: '14px', background: 'var(--border-color)' }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{githubStats.repos}</strong> Repos
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                        <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{githubStats.followers}</strong> Followers
                    </span>
                </a>
            </div>

            {/* ── Right: photo ── */}
            <div
                className="animate-fade-in"
                style={{ flex: '0 0 auto', display: 'flex', justifyContent: 'center', animationDelay: '0.1s' }}
            >
                {/* Outer glow ring */}
                <div style={{
                    position: 'relative',
                    width: '280px', height: '280px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--accent-color) 0%, #34c759 100%)',
                    padding: '3px',
                    boxShadow: '0 0 48px rgba(0,113,227,0.18)',
                }}>
                    {/* White gap ring */}
                    <div style={{
                        width: '100%', height: '100%',
                        borderRadius: '50%',
                        background: 'var(--bg-color)',
                        padding: '4px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                        <img
                            src="/profile.jpg"
                            alt="Heshan Pramuditha Dharmasena"
                            style={{
                                width: '100%', height: '100%',
                                borderRadius: '50%',
                                objectFit: 'cover',
                                objectPosition: 'top center',
                                display: 'block',
                            }}
                            onError={e => {
                                const el = e.currentTarget as HTMLImageElement;
                                el.style.display = 'none';
                                (el.parentElement as HTMLDivElement).style.background = 'var(--bg-alt)';
                                (el.parentElement as HTMLDivElement).innerHTML =
                                    '<span style="font-size:4rem;font-weight:800;color:var(--accent-color)">H</span>';
                            }}
                        />
                    </div>

                    {/* Available badge */}
                    <div style={{
                        position: 'absolute', bottom: '12px', right: '4px',
                        background: '#ffffff', border: '1px solid var(--border-color)',
                        borderRadius: '980px', padding: '6px 12px',
                        display: 'flex', alignItems: 'center', gap: '6px',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                        fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-primary)',
                        whiteSpace: 'nowrap',
                    }}>
                        <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#34c759', flexShrink: 0 }} />
                        Available for hire
                    </div>
                </div>
            </div>
        </section>
    );
}
