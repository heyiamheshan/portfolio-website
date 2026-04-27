import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>Get In Touch</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
            </p>

            <div className="glass-panel" style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                    
                    {/* Email */}
                    <a href="mailto:heshan@example.com" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="glass-chip" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 16px', gap: '16px', width: '100%' }}>
                            <div style={{ background: 'var(--accent-color)', padding: '16px', borderRadius: '50%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Mail size={24} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>Email</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Say hello!</p>
                            </div>
                        </div>
                    </a>

                    {/* LinkedIn */}
                    <a href="https://linkedin.com/in/heshan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="glass-chip" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 16px', gap: '16px', width: '100%' }}>
                            <div style={{ background: 'var(--accent-color)', padding: '16px', borderRadius: '50%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Linkedin size={24} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>LinkedIn</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Let's connect!</p>
                            </div>
                        </div>
                    </a>

                    {/* GitHub */}
                    <a href="https://github.com/heyiamheshan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="glass-chip" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '32px 16px', gap: '16px', width: '100%' }}>
                            <div style={{ background: 'var(--accent-color)', padding: '16px', borderRadius: '50%', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Github size={24} />
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '8px' }}>GitHub</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Check my repos!</p>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </section>
    );
}
