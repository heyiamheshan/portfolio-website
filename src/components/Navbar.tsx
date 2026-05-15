import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

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
                    <a href="#experience" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Experience</a>
                    <a href="#timeline" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Timeline</a>
                    <a href="#contact" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 500, fontSize: '0.9rem', transition: 'color 0.3s' }}>Contact</a>

                    <button 
                        onClick={toggleTheme} 
                        style={{
                            background: theme === 'light' ? '#e8e8ed' : '#1d1d1f',
                            border: `1px solid ${theme === 'light' ? '#d2d2d7' : '#3d3d3f'}`,
                            cursor: 'pointer',
                            color: theme === 'light' ? '#f59e0b' : '#2997ff',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            width: '56px',
                            height: '28px',
                            borderRadius: '30px',
                            padding: '2px',
                            transition: 'all 0.4s cubic-bezier(0.4, 0.0, 0.2, 1)',
                            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.08)'
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
                            <Moon size={14} color="#2997ff" />
                        </div>

                        {/* Sliding Circle */}
                        <div style={{
                            width: '22px',
                            height: '22px',
                            background: theme === 'light' ? '#ffffff' : '#000000',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                            transform: `translateX(${theme === 'light' ? '0px' : '28px'})`,
                            transition: 'transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1), background-color 0.4s',
                            zIndex: 2
                        }}>
                            {theme === 'light' ? <Sun size={12} color="#f59e0b" /> : <Moon size={12} color="#2997ff" />}
                        </div>
                    </button>
                </nav>
            </div>
        </header>
    );
}
