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
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '120px 24px 80px',
                position: 'relative',
                zIndex: 1,
                background: 'var(--bg-color)',
            }}
        >
            {/* Eyebrow */}
            <p className="eyebrow animate-fade-in" style={{ marginBottom: '20px' }}>
                AI &amp; Machine Learning Engineer
            </p>

            {/* Headline */}
            <h1
                className="animate-fade-in"
                style={{
                    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.03em',
                    lineHeight: 1.05,
                    maxWidth: '900px',
                    marginBottom: '24px',
                    animationDelay: '0.05s',
                    color: 'var(--text-primary)',
                }}
            >
                Heshan Pramuditha
                <br />
                <span style={{ color: 'var(--accent-color)' }}>Dharmasena</span>
            </h1>

            {/* Sub-headline */}
            <p
                className="animate-fade-in"
                style={{
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    maxWidth: '580px',
                    lineHeight: 1.6,
                    marginBottom: '40px',
                    animationDelay: '0.1s',
                }}
            >
                3rd Year BSc (Hons) IT Undergraduate specialising in end-to-end AI systems,
                RAG pipelines, and high-performance ML architectures.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '64px', animationDelay: '0.15s' }}>
                <a href="/heshan-cv.pdf" download="Heshan_Pramuditha_CV.pdf" className="glass-btn primary">
                    <Download size={16} /> Download CV
                </a>
                <a href="#projects" className="glass-btn">
                    View Projects
                </a>
            </div>

            {/* GitHub stats strip */}
            <a
                href="https://github.com/heyiamheshan"
                target="_blank"
                rel="noreferrer"
                className="animate-fade-in"
                style={{
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '20px',
                    padding: '16px 28px',
                    background: 'var(--bg-alt)',
                    borderRadius: '980px',
                    border: '1px solid var(--border-color)',
                    transition: 'box-shadow 0.2s, transform 0.2s',
                    animationDelay: '0.2s',
                    color: 'inherit',
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
                <FiGithub size={18} color="var(--text-secondary)" />
                <span style={{ width: '1px', height: '16px', background: 'var(--border-color)' }} />
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{githubStats.repos}</strong> Repositories
                </span>
                <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                    <strong style={{ color: 'var(--text-primary)', fontWeight: 600 }}>{githubStats.followers}</strong> Followers
                </span>
            </a>
        </section>
    );
}
