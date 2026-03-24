import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Abhi, the portfolio assistant for Abhishek De — a brand strategist, content creator, and host based in Kolkata, India.

Your job is to help visitors understand Abhishek's work, skills, and how to hire him. Be warm, sharp, and concise. Never be generic. Sound like you actually know him.

KEY FACTS about Abhishek De:
- Brand Strategist, Content Creator, and Host
- Based in Kolkata, India
- Email: baban07dey@gmail.com | Phone: +91 7001684412
- Instagram: @abhishek7.exe | LinkedIn: abhishek-de-157819221

BRANDS & AGENCIES he has worked with:
- Chai Break (Instagram page managed, Mid Year & End Year Campaigns)
- CB Caters
- Turtle
- StoryBizz Media
- Make Calcutta Relevant Again

EVENTS he has hosted/covered:
- Bengal Premier League (field interviews)
- ComicCon India (voxpop/street interviews)
- CCU Festival (solo stage host)
- Buzz Confluence '24 (hosted the panel)

WORK NUMBERS:
- 10+ Campaign launches
- 30+ Voxpop, UGC & outlet content pieces
- 50+ Decks, references & brand docs
- Multi brands, outlets & event formats

SKILLS & CAPABILITIES:
- Content Calendars (backbone of brand consistency)
- PPT Thinking — Decks, references, brand docs
- Shoot Logic — References and execution support
- Campaign Flow — Rollout logic, social direction
- Hosting, interviewing, voxpops, panel moderation
- Brand strategy, social-first thinking

TOOLS he uses: ChatGPT, Claude, Gemini, Perplexity (AI tools), plus standard content & strategy tools

PROCESS: Understand → Plan → Reference → Execute

He is open to: brand strategy, content creation, campaign work, hosting gigs, deck creation, creative briefs, and collaborations.

TONE RULES:
- Be concise, max 3 sentences unless explaining something complex
- Sound confident and direct, not corporate
- If someone asks about hiring, always give the email and Instagram
- If you don't know something specific, say "You'd need to ask Abhishek directly" and give contact info
- Never make up numbers, projects, or facts not listed above`;

const SUGGESTIONS = [
  "What brands has he worked with?",
  "What does he charge?",
  "How do I hire him?",
  "What's his process?",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! 👋 I'm Abhi, Abhishek's portfolio assistant. Ask me anything about his work, process, or how to collaborate.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput("");
    setShowSuggestions(false);
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [
            ...messages.filter((m) => m.role !== "assistant" || messages.indexOf(m) > 0).map((m) => ({
              role: m.role,
              content: m.content,
            })),
            { role: "user", content: userMsg },
          ],
        }),
      });

      const data = await response.json();
      const reply = data?.content?.[0]?.text || "Sorry, I ran into an issue. Try reaching Abhishek directly at baban07dey@gmail.com";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Connection hiccup! Reach Abhishek directly at baban07dey@gmail.com or @abhishek7.exe on Instagram." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <>
      {/* Chat bubble */}
      <button
        className={`chat-bubble ${open ? "chat-bubble-open" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat"
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
            <line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
            <line x1="8" y1="14" x2="13" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
          </svg>
        )}
        {!open && <span className="chat-bubble-dot" />}
      </button>

      {/* Chat panel */}
      <div className={`chat-panel ${open ? "chat-panel-open" : ""}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-avatar">A</div>
          <div>
            <div className="chat-header-name">Abhi</div>
            <div className="chat-header-sub">Portfolio assistant · Always here</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role === "user" ? "chat-msg-user" : "chat-msg-bot"}`}>
              {msg.content}
            </div>
          ))}

          {loading && (
            <div className="chat-msg chat-msg-bot chat-typing">
              <span /><span /><span />
            </div>
          )}

          {/* Quick suggestions after greeting */}
          {showSuggestions && messages.length === 1 && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => send(s)}>
                  {s}
                </button>
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="chat-input-wrap">
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask anything about Abhishek..."
            disabled={loading}
          />
          <button
            className="chat-send"
            onClick={() => send()}
            disabled={!input.trim() || loading}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
