// ChatWidget.jsx
// Floating chat box. It talks to a Netlify serverless function, which holds
// the API key, so no secret is ever in the browser code.

import { useEffect, useRef, useState } from 'react';

const ENDPOINT = '/.netlify/functions/chat';

const starters = [
  'What projects has Salman built?',
  'What is he looking for?',
  'What are his main skills?',
];

const greeting = {
  role: 'assistant',
  content:
    "Hi! I'm an AI assistant for this site. Ask me about Salman's projects, skills or availability.",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([greeting]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef(null);

  // Keep the newest message in view
  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, open, busy]);

  async function send(text) {
    const question = text.trim();
    if (!question || busy) return;

    const next = [...messages, { role: 'user', content: question }];
    setMessages(next);
    setInput('');
    setBusy(true);

    try {
      // Skip the local greeting; the API expects the chat to start with the user
      const history = next.filter((m) => m !== greeting);
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Request failed');
      setMessages([...next, { role: 'assistant', content: data.reply }]);
    } catch (err) {
      setMessages([
        ...next,
        {
          role: 'assistant',
          content:
            (err && err.message) ||
            'Sorry, the assistant is unavailable. Please email salshafi44@gmail.com.',
          error: true,
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="chat">
      {open && (
        <section className="chat-panel" aria-label="Chat with the portfolio assistant">
          <header className="chat-head">
            <div>
              <strong>Ask about Salman</strong>
              <span className="chat-sub">AI assistant · may make mistakes</span>
            </div>
            <button type="button" className="chat-close" aria-label="Close chat" onClick={() => setOpen(false)}>
              ×
            </button>
          </header>

          <div className="chat-body" role="log" aria-live="polite">
            {messages.map((m, i) => (
              <p key={i} className={`bubble ${m.role}${m.error ? ' error' : ''}`}>
                {m.content}
              </p>
            ))}
            {busy && <p className="bubble assistant typing">Thinking…</p>}
            {messages.length === 1 && (
              <div className="chat-starters">
                {starters.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          <form
            className="chat-form"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              type="text"
              value={input}
              maxLength={500}
              placeholder="Type your question…"
              aria-label="Your question"
              onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" disabled={busy || !input.trim()}>
              Send
            </button>
          </form>
        </section>
      )}

      <button type="button" className="chat-fab" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? 'Close' : 'Ask AI'}
      </button>
    </div>
  );
}
