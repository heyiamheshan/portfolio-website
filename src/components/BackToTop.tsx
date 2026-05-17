import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const fn = () => setVisible(window.scrollY > 500);
        window.addEventListener('scroll', fn, { passive: true });
        return () => window.removeEventListener('scroll', fn);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top" aria-label="Back to top"
            style={{
                position: 'fixed', bottom: '28px', right: '28px', zIndex: 100,
                width: '44px', height: '44px', borderRadius: '50%',
                background: '#ffffff', border: '1px solid var(--border-color)',
                boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                cursor: 'pointer', color: 'var(--text-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s ease',
                animation: 'fadeInUp 0.3s ease',
            }}
            onMouseEnter={e => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = 'var(--accent-color)';
                b.style.color = '#fff';
                b.style.borderColor = 'var(--accent-color)';
                b.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
                const b = e.currentTarget as HTMLButtonElement;
                b.style.background = '#ffffff';
                b.style.color = 'var(--text-secondary)';
                b.style.borderColor = 'var(--border-color)';
                b.style.transform = 'translateY(0)';
            }}
        >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}
