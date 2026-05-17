import { Mail } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

const links = [
    {
        icon: <Mail size={24} />,
        label: 'Email',
        value: 'heshan@example.com',
        href: 'mailto:heshan@example.com',
        color: '#0071e3',
    },
    {
        icon: <FiLinkedin size={24} />,
        label: 'LinkedIn',
        value: 'Connect with me',
        href: 'https://linkedin.com/in/heshan',
        color: '#0a66c2',
    },
    {
        icon: <FiGithub size={24} />,
        label: 'GitHub',
        value: 'heyiamheshan',
        href: 'https://github.com/heyiamheshan',
        color: '#1d1d1f',
    },
];

export default function Contact() {
    return (
        <section id="contact" style={{ background: 'var(--bg-alt)' }}>
            <div className="section-container">
                <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                    <p className="eyebrow" style={{ marginBottom: '12px' }}>Contact</p>
                    <h2 className="section-title" style={{ marginBottom: '16px' }}>Get In Touch</h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        Open to new opportunities, collaborations, and conversations about AI.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', maxWidth: '860px', margin: '0 auto' }}>
                    {links.map(({ icon, label, value, href, color }) => (
                        <a key={label} href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
                            style={{ textDecoration: 'none', display: 'block' }}>
                            <div style={{
                                background: '#ffffff',
                                borderRadius: '20px',
                                border: '1px solid var(--border-color)',
                                padding: '32px 28px',
                                display: 'flex', flexDirection: 'column', gap: '16px',
                                transition: 'box-shadow 0.25s, transform 0.25s',
                                cursor: 'pointer',
                            }}
                                onMouseEnter={e => {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                                }}
                                onMouseLeave={e => {
                                    (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                                    (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
                                }}
                            >
                                <div style={{
                                    width: '48px', height: '48px', borderRadius: '12px',
                                    background: `${color}14`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color,
                                }}>
                                    {icon}
                                </div>
                                <div>
                                    <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>{label}</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-primary)' }}>{value}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
