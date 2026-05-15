import { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minus } from 'lucide-react';

export default function TerminalComponent() {
    const [isOpen, setIsOpen] = useState(true);
    const [history, setHistory] = useState([
        { type: 'sys', text: 'GeniusEnv v2.0.4 loaded.' },
        { type: 'sys', text: 'Type "help" to see available commands.' }
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const cmd = input.trim().toLowerCase();
        const newHistory = [...history, { type: 'user', text: `user@genius-env:~$ ${cmd}` }];

        switch (cmd) {
            case 'help':
                newHistory.push({ type: 'sys', text: 'Available commands: help, about, contact, clear, skills, repo' });
                break;
            case 'about':
                newHistory.push({ type: 'sys', text: 'Heshan Pramuditha Dharmasena - AI & ML Engineer based in Sri Lanka.' });
                newHistory.push({ type: 'sys', text: 'Strong mathematical foundations (Linear Algebra, Calculus, Probability) applied to real-world scale AI.' });
                break;
            case 'contact':
                newHistory.push({ type: 'link', text: 'Email: rmheshanpramuditha@gmail.com' });
                newHistory.push({ type: 'link', text: 'Phone: +94 710 691 571' });
                break;
            case 'skills':
                newHistory.push({ type: 'sys', text: 'PyTorch, Scikit-learn, YOLOv8, LangChain, RAG, ChromaDB, Faster-Whisper, Gemini Pro, LLaMA-3' });
                break;
            case 'repo':
                newHistory.push({ type: 'link', text: 'Opening GitHub... (https://github.com/heyiamheshan)' });
                setTimeout(() => window.open('https://github.com/heyiamheshan', '_blank'), 500);
                break;
            case 'clear':
                setHistory([]);
                setInput('');
                return;
            default:
                newHistory.push({ type: 'err', text: `command not found: ${cmd}` });
        }

        setHistory(newHistory);
        setInput('');
    };

    if (!isOpen) return (
        <button onClick={() => setIsOpen(true)} className="glass-btn primary" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
            <TerminalIcon size={20} /> Access Terminal
        </button>
    );

    return (
        <div className="glass-panel" style={{ position: 'fixed', bottom: '30px', right: '30px', width: '380px', height: '300px', zIndex: 100, display: 'flex', flexDirection: 'column', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            {/* Header */}
            <div style={{ padding: '12px 16px', background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>
                    <TerminalIcon size={16} /> genius-env — zsh
                </div>
                <div style={{ display: 'flex', gap: '12px', color: '#f8fafc' }}>
                    <Minus size={14} style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => setIsOpen(false)} />
                    <Maximize2 size={14} style={{ cursor: 'pointer', opacity: 0.7 }} />
                    <X size={14} style={{ cursor: 'pointer', opacity: 0.7 }} onClick={() => setIsOpen(false)} />
                </div>
            </div>

            {/* Body */}
            <div className="font-mono" style={{ padding: '16px', flex: 1, overflowY: 'auto', fontSize: '0.85rem', lineHeight: 1.5, color: '#f8fafc', background: 'rgba(15, 23, 42, 0.85)' }}>
                {history.map((cmd, i) => (
                    <div key={i} style={{ marginBottom: '6px', color: cmd.type === 'err' ? '#ef4444' : cmd.type === 'user' ? '#2997ff' : cmd.type === 'link' ? '#4ade80' : '#cbd5e1' }}>
                        {cmd.text}
                    </div>
                ))}
                <div ref={bottomRef} />
            </div>

            {/* Input Form */}
            <form onSubmit={handleCommand} style={{ background: 'rgba(15, 23, 42, 0.95)', padding: '12px 16px', display: 'flex', gap: '8px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <span className="font-mono" style={{ color: '#2997ff', fontSize: '0.85rem' }}>$</span>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    className="font-mono"
                    style={{ background: 'transparent', border: 'none', color: '#f8fafc', outline: 'none', flex: 1, fontSize: '0.85rem' }}
                />
            </form>
        </div>
    );
}
