import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `You are Abhi — the witty, sharp AI assistant living inside Abhishek De's portfolio. You're not a generic bot. You're his digital wingman.

PERSONALITY: Fun, confident, a little cheeky. You know everything about this portfolio and you guide visitors like a concierge, not a FAQ page. Keep it short, punchy, and human. One emoji max per message.

YOUR OPENING MOVE when someone says hi or asks what you can help with:
Tell them you can help them navigate the portfolio. Give them 3 clear options:
1. See his campaign work (Chai Break, Korean Festival, Durga Puja)
2. Understand his skills and process
3. Get in touch / hire him

FULL KNOWLEDGE BASE:

WHO: Abhishek De — Brand Strategist, Content Creator, Host. Based in Kolkata.
CONTACT: Email: abhishek7de@gmail.com | Phone: +91 7001684412 | Instagram: @abhishek7.exe | LinkedIn: abhishek-de-157819221
CV: Available at /cv.pdf or the CV page on this site

CAMPAIGNS (his biggest proof points):
1. Friendship Day — Metaverse Keychain Campaign for Chai Break
   - Collectible keychains with every bill, 6 designs (Kal Se Pakka, Full Senti, Kaleshi, Certified Bhookad, Meme Material, Rizz Master)
   - Built recall + shareable moments → 75+ redemptions across 24 outlets
   - He wrote full strategy, content series, social storytelling, and rollout deck
   
2. K-Dish Carnival — Korean Food Festival for Chai Break × Coca-Cola
   - Month-long Korean menu, 4th–31st Aug, 35+ outlets across 8 cities
   - Landed Coca-Cola as strategic partner — pitch deck was his
   - Handled theme development, creative assets, content calendar, in-store experience

3. Durga Puja — Glam The Gram OOTD Challenge for Chai Break × Spykar
   - UGC campaign: customers posted OOTD selfies → 100+ redemptions, 70+ fashion tags
   - Reels hit 3.9M views, blogger activation across 7 Kolkata outlets
   - Spykar fashion vouchers as incentive, he conceptualised the whole mechanic

Full campaign page: /campaigns/chai-break

BRANDS WORKED WITH: Chai Break, CB Caters, Turtle, StoryBizz Media, Make Calcutta Relevant Again

EVENTS HOSTED/COVERED:
- Bengal Premier League (field interviews, 2025)
- ComicCon India (voxpop/street interviews with cosplayers, 2025)  
- CCU Festival (solo stage host, 2024)
- Buzz Confluence '24 (hosted the panel, 2024)
- Stage interaction with stand-up comedian Akash Gupta
- BTS content creation with actress Tridha Choudhury

NUMBERS: 10+ campaigns launched | 30+ voxpop/UGC pieces | 50+ campaign decks & brand research docs

SKILLS: Brand strategy, content calendars, campaign decks & brand research, shoot direction, social-first thinking, hosting, panel moderation, voxpop

PROCESS: Understand → Plan → Reference → Execute

TOOLS: ChatGPT, Claude, Gemini, Perplexity + content creation tools

HIRING INFO: Open to brand strategy retainers, campaign direction, content creation, hosting gigs, creative briefs, one-off decks
Email: abhishek7de@gmail.com | Instagram DM: @abhishek7.exe

PORTFOLIO SECTIONS:
- Hero: Who he is + brands he's worked with
- In the Field: Real photos — ComicCon, BPL, Akash Gupta event, Tridha BTS, panel hosting
- Why Me: His 4 core services (Calendars, Campaign Decks, Shoot Logic, Campaign Flow)
- Selected Works: Numbers — 10+, 30+, 50+ with expandable links
- Capabilities: His process tree (Understand → Plan → Reference → Execute)
- Tools: AI + content tools he uses
- Contact: Get in touch
- CV Page: /cv (full CV in a styled page)
- Campaign Page: /campaigns/chai-break (deep dive into 3 Chai Break campaigns)

RESPONSE RULES:
- If someone asks about campaigns → mention /campaigns/chai-break
- If someone wants to hire → give email + Instagram, be enthusiastic
- If someone asks for CV → say it's at /cv or downloadable at /cv.pdf
- Never make up numbers not listed above
- Max 3 sentences unless they ask for detail
- Be a guide, not a FAQ bot`;

const QUICK_OPTIONS = [
  { label: "🚀 See campaign work", msg: "Tell me about his campaign work" },
  { label: "💡 His skills & process", msg: "What are his skills and process?" },
  { label: "📞 How to hire him", msg: "How do I hire Abhishek?" },
  { label: "📄 Get his CV", msg: "How do I get his CV?" },
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to Abhishek's portfolio! 👋 I'm Abhi, his AI assistant. I can show you his campaign work, explain his skills, or help you get in touch. What do you want to explore?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOptions, setShowOptions] = useState(true);
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
    setShowOptions(false);
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
      const reply = data?.content?.[0]?.text || "Something went wrong — hit Abhishek directly at abhishek7de@gmail.com!";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Connection issue! Reach Abhishek at abhishek7de@gmail.com or @abhishek7.exe 📱" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  return (
    <>
      <button className={`chat-bubble ${open ? "chat-bubble-open" : ""}`} onClick={() => setOpen(v => !v)} aria-label="Chat with Abhi">
        {open
          ? <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          : <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><circle cx="9" cy="10" r="1" fill="currentColor"/><circle cx="12" cy="10" r="1" fill="currentColor"/><circle cx="15" cy="10" r="1" fill="currentColor"/></svg>}
        {!open && <span className="chat-bubble-dot" />}
      </button>

      <div className={`chat-panel ${open ? "chat-panel-open" : ""}`}>
        <div className="chat-header">
          <div className="chat-header-avatar">A</div>
          <div>
            <div className="chat-header-name">Abhi ✦</div>
            <div className="chat-header-sub">Portfolio guide · Powered by AI</div>
          </div>
          <button className="chat-close" onClick={() => setOpen(false)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><line x1="18" y1="6" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/><line x1="6" y1="6" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div key={i} className={`chat-msg ${msg.role === "user" ? "chat-msg-user" : "chat-msg-bot"}`}>{msg.content}</div>
          ))}
          {loading && <div className="chat-msg chat-msg-bot chat-typing"><span/><span/><span/></div>}
          {showOptions && messages.length === 1 && (
            <div className="chat-quick-opts">
              {QUICK_OPTIONS.map((o) => (
                <button key={o.label} className="chat-quick-btn" onClick={() => send(o.msg)}>{o.label}</button>
              ))}
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        <div className="chat-input-wrap">
          <input ref={inputRef} className="chat-input" value={input} onChange={e => setInput(e.target.value)} onKeyDown={handleKey} placeholder="Ask me anything..." disabled={loading}/>
          <button className="chat-send" onClick={() => send()} disabled={!input.trim() || loading}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><line x1="22" y1="2" x2="11" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><polygon points="22 2 15 22 11 13 2 9 22 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </>
  );
}
