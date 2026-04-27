import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [theme, setTheme] = useState(() => {
        // Check localStorage first, then system preference
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme) {
            return savedTheme;
        }
        if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('portfolio-theme', theme);
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
                    <a href="#contact" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Contact</a>

                    <button 
                        onClick={toggleTheme} 
                        style={{
                            background: theme === 'light' ? '#e2e8f0' : '#1e293b',
                            border: `1px solid ${theme === 'light' ? '#cbd5e1' : '#334155'}`,
                            cursor: 'pointer',
                            color: theme === 'light' ? '#f59e0b' : '#38bdf8',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            width: '56px',
                            height: '28px',
                            borderRadius: '30px',
                            padding: '2px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
                        }} 
                        title="Toggle Theme" 
                        aria-label="Toggle Theme"
                    >
                        {/* Sun Icon Background */}
                        <div style={{ 
                            position: 'absolute', left: '6px', opacity: theme === 'dark' ? 0 : 1, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center' 
                        }}>
                            <Sun size={14} color="#f59e0b" />
                        </div>
                        
                        {/* Moon Icon Background */}
                        <div style={{ 
                            position: 'absolute', right: '6px', opacity: theme === 'light' ? 0 : 1, transition: 'opacity 0.3s', display: 'flex', alignItems: 'center' 
                        }}>
                            <Moon size={14} color="#38bdf8" />
                        </div>

                        {/* Sliding Circle */}
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: theme === 'light' ? '#ffffff' : '#0b0f19',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            transform: `translateX(${theme === 'light' ? '0px' : '28px'})`,
                            transition: 'transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), background-color 0.4s',
                            zIndex: 2
                        }}>
                            {theme === 'light' ? <Sun size={12} color="#f59e0b" /> : <Moon size={12} color="#38bdf8" />}
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    );
}
