import { useState, useEffect } from 'react';

export default function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const update = () => {
            const scrolled = window.scrollY;
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setProgress(total > 0 ? (scrolled / total) * 100 : 0);
        };
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '3px',
            zIndex: 200, background: 'rgba(0,0,0,0.06)',
        }}>
            <div style={{
                height: '100%',
                width: `${progress}%`,
                background: 'var(--accent-color)',
                transition: 'width 0.1s linear',
            }} />
        </div>
    );
}
