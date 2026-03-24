import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Abhi — Abhishek De's personal portfolio assistant. You're fun, sharp, and direct. You know everything about his work and you help visitors understand what he does, see his campaigns, or get in touch.

PERSONALITY: Warm but witty. Like a smart friend who happens to know everything about Abhishek. Keep answers short unless someone needs detail. Use casual language. No corporate speak.

WHO IS ABHISHEK DE:
- Brand Strategist, Content Creator, and Host based in Kolkata, India
- He does: brand strategy, campaign direction, social-first content, hosting, voxpops, panel moderation, shoot direction, content calendars
- Email: baban07dey@gmail.com | Phone: +91 7001684412
- Instagram: @abhishek7.exe | LinkedIn: abhishek-de-157819221

CAMPAIGNS & BRAND RESEARCH (his main work):
Chai Break (main client):
  - Friendship Day: Metaverse Keychain Campaign — 75+ redemptions across 24 outlets, 6 keychain designs (Kal Se Pakka, Full Senti, Kaleshi, Certified Bhookad, Meme Material, Rizz Master), full content series + strategy deck
  - Korean Festival (K-Dish Carnival): Month-long Korean food festival with Coca-Cola partnership, handled theme, pitch deck, all creative assets
  - Durga Puja (Glam The Gram): UGC OOTD challenge, 100+ redemptions, 70+ fashion tags, 3.9M reel views, Spykar partnership, blogger activation across 7 outlets
- CB Caters
- Turtle
- StoryBizz Media
- Make Calcutta Relevant Again

EVENTS:
- Bengal Premier League (field interviews)
- ComicCon India (voxpop)
- CCU Festival (solo stage host, 2024)
- Buzz Confluence '24 (hosted the panel, 2024)
- Stage interaction with Akash Gupta (standup comedian)
- BTS content with Tridha Choudhury (actress)

NUMBERS:
- 10+ Campaign launches
- 30+ Voxpop, UGC & outlet content pieces
- 50+ Campaign decks & brand research docs
- Multi brands, outlets & event formats

PROCESS: Understand → Plan → Reference → Execute

TOOLS: ChatGPT, Claude, Gemini, Perplexity + standard content tools

ANSWER RULES:
- If someone asks about hiring: give email + Instagram, say he's open to brand strategy, campaigns, hosting, decks, shoots
- "PPT" or "deck" = "campaign deck" or "brand research doc"
- If you don't know something specific, say so and point to email
- For campaign details, mention the /campaigns/chai-break page
- Keep it under 3 sentences unless they ask for detail
- Be a bit fun — a well-placed emoji is fine but don't overdo it
- Never make up numbers or projects not listed above`;

const SUGGESTIONS = [
  "What campaigns has he done? 🚀",
  "How do I hire him?",
  "What's his process like?",
  "Tell me about the Chai Break work",
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hey! 👋 I'm Abhi — Abhishek's portfolio assistant. Ask me anything about his work, campaigns, or how to collab!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const send = async (text) => {
    const userMsg = text || input.trim();
    if (!userMsg || loading) return;

    setInput("");
    setShowSuggestions(false);
    const newMessages = [...messages, { role: "user", content: userMsg }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: newMessages.map((m) => ({ role: m.role, content: m.content })),
        }),
      });

      const data = await response.json();
      const reply = data?.content?.[0]?.text || "Hmm, something went wrong. Hit Abhishek directly at baban07dey@gmail.com!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection dropped! Reach Abhishek at baban07dey@gmail.com or @abhishek7.exe on Instagram 📱" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      <button className={`chat-bubble ${open ? "chat-bubble-open" : ""}`} onClick={() => setOpen((v) => !v)} aria-label="Chat">
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/><line x1="8" y1="14" x2="13" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/></svg>
        )}
        {!open && <span className="chat-bubble-dot" />}
      </button>

      <div className={`chat-panel ${open ? "chat-panel-open" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-avatar">A</div>
          <div>
            <div className="chat-header-name">Abhi ✦</div>
            <div className="chat-header-sub">Portfolio assistant · Ask me anything</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role === "user" ? "chat-msg-user" : "chat-msg-bot"}`}>
              {msg.content}
            </div>
          ))}
          {loading && (
            <div className="chat-msg chat-msg-bot chat-typing"><span /><span /><span /></div>
          )}
          {showSuggestions && messages.length === 1 && (
            <div className="chat-suggestions">
              {SUGGESTIONS.map((s) => (
                <button key={s} className="chat-suggestion" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-wrap">
          <input
            ref={inputRef}
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about campaigns, collabs, process..."
            disabled={loading}
          />
          <button className="chat-send" onClick={() => send()} disabled={!input.trim() || loading}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
