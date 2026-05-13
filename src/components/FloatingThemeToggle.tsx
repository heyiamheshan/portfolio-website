import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function FloatingThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [hovered, setHovered] = useState(false);

    return (
        <button
            onClick={toggleTheme}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            title={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
            style={{
                position: 'fixed',
                bottom: '32px',
                right: '32px',
                zIndex: 100,
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                border: `1px solid ${hovered ? 'var(--accent-color)' : 'var(--glass-border)'}`,
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                boxShadow: hovered
                    ? '0 8px 32px rgba(14, 165, 233, 0.25), 0 0 0 4px rgba(14, 165, 233, 0.08)'
                    : 'var(--glass-shadow)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: hovered ? 'translateY(-3px) scale(1.08)' : 'translateY(0) scale(1)',
                color: theme === 'light' ? '#f59e0b' : '#38bdf8',
            }}
        >
            <div style={{
                transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s',
                transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                {theme === 'dark'
                    ? <Moon size={22} />
                    : <Sun size={22} />
                }
            </div>
        </button>
    );
}
