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
    const [menuOpen, setMenuOpen]           = useState(false);
    const [scrolled, setScrolled]           = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        const ids = NAV_LINKS.map(l => l.href.slice(1));
        const observers: IntersectionObserver[] = [];
        ids.forEach(id => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([e]) => { if (e.isIntersecting) setActiveSection(id); },
                { rootMargin: '-40% 0px -55% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    useEffect(() => {
        if (window.innerWidth > 768) setMenuOpen(false);
        const fn = () => { if (window.innerWidth > 768) setMenuOpen(false); };
        window.addEventListener('resize', fn);
        return () => window.removeEventListener('resize', fn);
    }, []);

    const go = (href: string) => {
        setMenuOpen(false);
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header
                className="apple-navbar animate-fade-in"
                style={{
                    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 100,
                    boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
                    transition: 'box-shadow 0.3s',
                }}
            >
                <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                    <a href="#about" onClick={e => { e.preventDefault(); go('#about'); }}
                        style={{ textDecoration: 'none', color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.1rem', letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ width: '22px', height: '22px', background: 'var(--accent-color)', borderRadius: '6px' }} />
                        Heshan
                    </a>

                    <nav className="nav-desktop" style={{ display: 'flex', gap: '2px' }}>
                        {NAV_LINKS.map(({ label, href }) => {
                            const active = activeSection === href.slice(1);
                            return (
                                <a key={href} href={href}
                                    onClick={e => { e.preventDefault(); go(href); }}
                                    style={{
                                        textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
                                        padding: '6px 14px', borderRadius: '980px',
                                        color: active ? 'var(--accent-color)' : 'var(--text-secondary)',
                                        background: active ? 'rgba(0,113,227,0.08)' : 'transparent',
                                        transition: 'all 0.2s',
                                    }}
                                >{label}</a>
                            );
                        })}
                    </nav>

                    <button className="nav-hamburger" onClick={() => setMenuOpen(p => !p)}
                        aria-label="Toggle menu"
                        style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '6px', flexDirection: 'column', gap: '5px' }}>
                        {[0, 1, 2].map(i => (
                            <span key={i} style={{
                                display: 'block', width: '20px', height: '1.5px',
                                background: 'var(--text-primary)', borderRadius: '2px',
                                transition: 'all 0.3s',
                                transform: menuOpen
                                    ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                                    : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                                    : 'none'
                                    : 'none',
                                opacity: menuOpen && i === 1 ? 0 : 1,
                            }} />
                        ))}
                    </button>
                </div>
            </header>

            {menuOpen && (
                <div className="apple-navbar"
                    style={{ position: 'fixed', top: '52px', left: 0, width: '100%', zIndex: 99, padding: '8px 24px 20px', borderTop: '1px solid var(--border-color)', animation: 'fadeInUp 0.2s ease' }}>
                    {NAV_LINKS.map(({ label, href }) => (
                        <a key={href} href={href}
                            onClick={e => { e.preventDefault(); go(href); }}
                            style={{
                                display: 'block', textDecoration: 'none', padding: '13px 0',
                                borderBottom: '1px solid var(--border-color)',
                                color: activeSection === href.slice(1) ? 'var(--accent-color)' : 'var(--text-primary)',
                                fontWeight: 500, fontSize: '1rem',
                            }}
                        >{label}</a>
                    ))}
                </div>
            )}
        </>
    );
}
