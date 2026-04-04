import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Initial theme check based on system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <header className="glass-navbar animate-fade-in" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '24px', background: 'var(--accent-color)', borderRadius: '4px', opacity: 0.8 }}></div>
                    HESHAN.
                </div>

                <nav style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
                    <a href="#about" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>About</a>
                    <a href="#skills" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Skills</a>
                    <a href="#projects" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Projects</a>
                    <a href="#timeline" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Timeline</a>

                    <button onClick={toggleTheme} style={{
                        background: 'transparent', border: 'none', cursor: 'pointer', color: 'inherit',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6px', borderRadius: '50%',
                        transition: 'background 0.3s'
                    }} title="Toggle Theme" aria-label="Toggle Theme">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                </nav>
            </div>
        </header>
    );
}
