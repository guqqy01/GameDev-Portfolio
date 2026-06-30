import React, { useRef, useState } from 'react';

function Contact(){
    const formRef = useRef<HTMLFormElement | null>(null);
    const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

    const FORM_ENDPOINT = 'https://formspree.io/f/xykajkvv';

    const handleSubmit = async (e: React.SubmitEvent) => {
        e.preventDefault();
        if (!formRef.current) return;
        setStatus('loading');
        const fd = new FormData(formRef.current);

        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: fd,
                headers: { 'Accept': 'application/json' },
            });

            if (res.ok) {
                setStatus('success');
                formRef.current.reset();
                setTimeout(() => setStatus('idle'), 4000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 4000);
            }
        } catch (err) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 4000);
        }
    };

    return (
        <div className="view" id="view-contact">

            <div className="hero-eyebrow" style={{ marginBottom: '12px' }}>// CONTACT</div>
            <div className="hero-name" style={{ fontSize: '48px', marginBottom: '16px' }}>GET IN <span>TOUCH</span></div>

            <div className="hero-bio" style={{ marginBottom: '32px' }}>
            Open to collaborations, freelance work, and interesting conversations about games.
            Response time: usually within a day or two.
            </div>

            <div className="section-title">CHANNELS</div>

            <div className="contact-grid" style={{ marginBottom: '32px' }}>
                <a className="contact-item" href="mailto:guqqy.dev@gmail.com">
                    <span className     ="contact-icon">✉</span>
                    <div>
                    <div className="contact-label">EMAIL</div>
                    <div className="contact-val">guqqy.dev@gmail.com</div>
                    </div>
                </a>
                <a className="contact-item" href="https://github.com/Guqqy01" target="_blank">
                    <span className="contact-icon">◇</span>
                    <div>
                    <div className="contact-label">GITHUB</div>
                    <div className="contact-val">github.com/Guqqy01</div>
                    </div>
                </a>
                <a className="contact-item" href="https://linkedin.com/in/DaleGush" target="_blank">
                    <span className="contact-icon">◉</span>
                    <div>
                    <div className="contact-label">LINKEDIN</div>
                    <div className="contact-val">/in/DaleGush</div>
                    </div>
                </a>
                <a className="contact-item" href="https://www.youtube.com/@dalegush9579" target="_blank">
                    <span className="contact-icon">▶</span>
                    <div>
                    <div className="contact-label">YOUTUBE</div>
                    <div className="contact-val">youtube/dalegush9579</div>
                    </div>
                </a>
            </div>

            <div className="section-title">SEND A MESSAGE</div>

            <form
                ref={formRef}
                onSubmit={handleSubmit}
                action={FORM_ENDPOINT}
                method="POST"
                style={{ maxWidth: '500px' }}
            >
                <input type="hidden" name="_subject" value="New contact message from portfolio site" />
                <div className="form-field">
                    <label className="form-label" htmlFor="name">YOUR NAME</label>
                    <input
                        id="name"
                        name="name"
                        className="form-input"
                        type="text"
                        placeholder="Jane Smith"
                        required
                    />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="email">EMAIL</label>
                    <input
                        id="email"
                        name="_replyto"
                        className="form-input"
                        type="email"
                        placeholder="jane@example.com"
                        required
                    />
                </div>
                <div className="form-field">
                    <label className="form-label" htmlFor="message">MESSAGE</label>
                    <textarea
                        id="message"
                        name="message"
                        className="form-input"
                        placeholder="Hey, I want to make a game together..."
                        required
                    />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <button className="btn-send" type="submit" disabled={status === 'loading'}>
                    {status === 'loading' ? 'SENDING…' : 'SEND_MESSAGE →'}
                  </button>

                  <div aria-live="polite">
                    {status === 'success' && (
                      <div className="form-feedback success">✓ Message sent. Thanks!</div>
                    )}
                    {status === 'error' && (
                      <div className="form-feedback error">✕ Something went wrong. Try again.</div>
                    )}
                  </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;