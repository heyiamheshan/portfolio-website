import { Mail } from 'lucide-react';
import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Contact() {
    return (
        <section id="contact" className="section-container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '12px' }}>Get In Touch</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '600px' }}>
                I'm always open to discussing new opportunities, collaborations, or just having a chat about AI and technology.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                
                {/* Email */}
                <a href="mailto:heshan@example.com" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div 
                        className="glass-panel" 
                        style={{ 
                            display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', gap: '20px', 
                            height: '100%', transition: 'all 0.3s ease', cursor: 'pointer' 
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 113, 227, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                        }}
                    >
                        <div style={{ background: 'rgba(0, 113, 227, 0.1)', border: '1px solid rgba(0, 113, 227, 0.3)', padding: '20px', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Mail size={32} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '8px' }}>Email</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>heshan@example.com</p>
                        </div>
                    </div>
                </a>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/heshan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div 
                        className="glass-panel" 
                        style={{ 
                            display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', gap: '20px', 
                            height: '100%', transition: 'all 0.3s ease', cursor: 'pointer' 
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 113, 227, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                        }}
                    >
                        <div style={{ background: 'rgba(0, 113, 227, 0.1)', border: '1px solid rgba(0, 113, 227, 0.3)', padding: '20px', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <FiLinkedin size={32} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '8px' }}>LinkedIn</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Let's connect</p>
                        </div>
                    </div>
                </a>

                {/* GitHub */}
                <a href="https://github.com/heyiamheshan" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
                    <div 
                        className="glass-panel" 
                        style={{ 
                            display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 24px', gap: '20px', 
                            height: '100%', transition: 'all 0.3s ease', cursor: 'pointer' 
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-5px)';
                            e.currentTarget.style.borderColor = 'var(--accent-color)';
                            e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 113, 227, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.borderColor = 'var(--glass-border)';
                            e.currentTarget.style.boxShadow = 'var(--glass-shadow)';
                        }}
                    >
                        <div style={{ background: 'rgba(0, 113, 227, 0.1)', border: '1px solid rgba(0, 113, 227, 0.3)', padding: '20px', borderRadius: '50%', color: 'var(--accent-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <Github size={32} />
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, marginBottom: '8px' }}>GitHub</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>Explore my code</p>
                        </div>
                    </div>
                </a>

            </div>
        </section>
    );
}
