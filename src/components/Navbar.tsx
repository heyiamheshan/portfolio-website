import { useState, useEffect } from 'react';

const NAV_LINKS = [
    { label: 'About',      href: '#about' },
    { label: 'Skills',     href: '#skills' },
    { label: 'Projects',   href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Timeline',   href: '#timeline' },
    { label: 'Contact',    href: '#contact' },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('about');
    const [menuOpen, setMenuOpen] = useState(false);

    // Highlight the nav link whose section is most visible
    useEffect(() => {
        const sectionIds = NAV_LINKS.map(l => l.href.slice(1));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });

        return () => observers.forEach(o => o.disconnect());
    }, []);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header className="glass-navbar animate-fade-in" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50 }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

                    {/* Logo */}
                    <a href="#about" onClick={() => handleNavClick('#about')} style={{ textDecoration: 'none', color: 'inherit', fontWeight: 700, fontSize: '1.25rem', letterSpacing: '1px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '24px', height: '24px', background: 'var(--accent-color)', borderRadius: '4px', opacity: 0.9 }} />
                        HESHAN.
                    </a>

                    {/* Desktop nav */}
                    <nav className="nav-desktop" style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                        {NAV_LINKS.map(({ label, href }) => {
                            const isActive = activeSection === href.slice(1);
                            return (
                                <a
                                    key={href}
                                    href={href}
                                    onClick={e => { e.preventDefault(); handleNavClick(href); }}
                                    style={{
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                        fontSize: '0.88rem',
                                        padding: '6px 12px',
                                        borderRadius: '8px',
                                        transition: 'all 0.2s ease',
                                        color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)',
                                        background: isActive ? 'rgba(0,113,227,0.08)' : 'transparent',
                                    }}
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </nav>

                    {/* Hamburger button (mobile only) */}
                    <button
                        className="nav-hamburger"
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                        style={{
                            display: 'none', background: 'none', border: 'none',
                            cursor: 'pointer', padding: '6px', color: 'var(--text-primary)',
                            flexDirection: 'column', gap: '5px',
                        }}
                    >
                        <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
                        <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
                        <span style={{ display: 'block', width: '22px', height: '2px', background: 'currentColor', borderRadius: '2px', transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
                    </button>
                </div>
            </header>

            {/* Mobile dropdown menu */}
            {menuOpen && (
                <div className="glass-navbar" style={{
                    position: 'fixed', top: '57px', left: 0, width: '100%', zIndex: 49,
                    display: 'flex', flexDirection: 'column', padding: '8px 24px 16px',
                    borderTop: '1px solid var(--glass-border)',
                    animation: 'fadeIn 0.2s ease',
                }}>
                    {NAV_LINKS.map(({ label, href }) => {
                        const isActive = activeSection === href.slice(1);
                        return (
                            <a
                                key={href}
                                href={href}
                                onClick={e => { e.preventDefault(); handleNavClick(href); }}
                                style={{
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    padding: '12px 8px',
                                    borderBottom: '1px solid var(--glass-border)',
                                    color: isActive ? 'var(--accent-color)' : 'var(--text-primary)',
                                    transition: 'color 0.2s',
                                }}
                            >
                                {label}
                            </a>
                        );
                    })}
                </div>
            )}
        </>
    );
}
