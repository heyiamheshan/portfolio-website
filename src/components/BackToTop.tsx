import { useState, useEffect } from 'react';

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    if (!visible) return null;

    return (
        <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Back to top"
            aria-label="Back to top"
            style={{
                position: 'fixed', bottom: '32px', right: '32px', zIndex: 100,
                width: '48px', height: '48px', borderRadius: '50%',
                background: 'var(--accent-color)',
                border: 'none', cursor: 'pointer', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 16px rgba(0,113,227,0.35)',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                animation: 'fadeIn 0.3s ease',
            }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(0,113,227,0.45)';
            }}
            onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 16px rgba(0,113,227,0.35)';
            }}
        >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 14V4M4 9l5-5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    );
}
