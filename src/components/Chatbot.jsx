import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaComments, FaTimes, FaPaperPlane, FaMapMarkerAlt, FaBullhorn, FaPlane, FaDesktop, FaUsers, FaPhoneAlt, FaEnvelope, FaLandmark, FaInfoCircle, FaChevronRight } from 'react-icons/fa';

const audioCtx = () => {
  if (!window.__chatAudioCtx) {
    window.__chatAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return window.__chatAudioCtx;
};

const playTone = (freq, duration, type = 'sine', vol = 0.15) => {
  try {
    const ctx = audioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch { /* audio not supported */ }
};

const sounds = {
  open: () => { playTone(520, 0.12); setTimeout(() => playTone(780, 0.15), 80); },
  close: () => { playTone(780, 0.1); setTimeout(() => playTone(520, 0.12), 60); },
  send: () => { playTone(600, 0.08); setTimeout(() => playTone(900, 0.1), 50); },
  receive: () => { playTone(440, 0.1, 'triangle'); setTimeout(() => playTone(660, 0.15, 'triangle'), 100); },
  notification: () => { playTone(800, 0.08); setTimeout(() => playTone(1000, 0.08), 80); setTimeout(() => playTone(1200, 0.12), 160); },
};

const QUICK_REPLIES = [
  { id: 'services', label: 'Our Services', icon: <FaBullhorn /> },
  { id: 'locations', label: 'Locations', icon: <FaMapMarkerAlt /> },
  { id: 'about', label: 'About Us', icon: <FaInfoCircle /> },
  { id: 'contact', label: 'Contact', icon: <FaPhoneAlt /> },
  { id: 'landowners', label: 'Land Owners', icon: <FaLandmark /> },
  { id: 'team', label: 'Our Team', icon: <FaUsers /> },
];

const SERVICE_OPTIONS = [
  { id: 'billboards', label: 'Billboards', icon: <FaBullhorn /> },
  { id: 'airports', label: 'Airport Ads', icon: <FaPlane /> },
  { id: 'digital', label: 'Digital Displays', icon: <FaDesktop /> },
];

const buildBotReply = (key, navigate) => {
  switch (key) {
    case 'greeting':
      return { text: "G'day! Welcome to WA Billboards — Western Australia's largest privately owned outdoor media company. How can I help you today?", quickReplies: QUICK_REPLIES };
    case 'services':
      return {
        text: "We offer three powerful advertising solutions across Western Australia:",
        cards: [
          { title: 'Billboards', desc: '200+ sites from Perth Metro to the Kimberley. Cyclone-rated, built in-house.', icon: <FaBullhorn />, link: '/services#billboards' },
          { title: 'Airport Advertising', desc: '6 regional airports including Karratha, Port Hedland, Newman, Kalgoorlie, Geraldton & Onslow.', icon: <FaPlane />, link: '/services#airports' },
          { title: 'Digital Displays', desc: 'Digital screens at Karratha Airport (12-faced), Newman & Kalgoorlie (3-panelled each).', icon: <FaDesktop />, link: '/services#digital' },
        ],
        quickReplies: [
          { id: 'billboards', label: 'More on Billboards', icon: <FaBullhorn /> },
          { id: 'airports', label: 'More on Airports', icon: <FaPlane /> },
          { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> },
        ],
      };
    case 'billboards':
      return {
        text: "Our billboard network spans the entire state of Western Australia — from Perth Metro to the Kimberley, Goldfields, and South West regions. With 200+ sites, we offer:\n\n- Metro and regional coverage\n- Cyclone-rated billboards built in-house\n- Competitive rates with flexible booking\n- Perfect audience targeting",
        quickReplies: [{ id: 'locations', label: 'View Locations', icon: <FaMapMarkerAlt /> }, { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }, { id: 'services', label: 'All Services', icon: <FaBullhorn /> }],
        link: { text: 'View Billboard Details', path: '/services#billboards' },
      };
    case 'airports':
      return {
        text: "We hold advertising rights to 6 regional airports across WA:\n\n1. Karratha Airport\n2. Port Hedland Airport\n3. Newman Airport\n4. Kalgoorlie-Boulder Airport\n5. Geraldton Airport\n6. Onslow Airport\n\nReach FIFO workers, tourists, commuters, and more with unmatched audience diversity!",
        quickReplies: [{ id: 'digital', label: 'Digital Displays', icon: <FaDesktop /> }, { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }, { id: 'locations', label: 'View Map', icon: <FaMapMarkerAlt /> }],
        link: { text: 'View Airport Advertising', path: '/services#airports' },
      };
    case 'digital':
      return {
        text: "Our growing digital display network includes:\n\n- 12-faced digital screen at Karratha Airport\n- 3-panelled digital screens in Newman\n- 3-panelled digital screens in Kalgoorlie\n\nDigital allows multiple clients per site, dynamic content scheduling, and we're constantly adding new locations!",
        quickReplies: [{ id: 'billboards', label: 'Billboards', icon: <FaBullhorn /> }, { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }],
        link: { text: 'View Digital Displays', path: '/services#digital' },
      };
    case 'locations':
      return {
        text: "We have billboard and advertising sites across all of Western Australia, including:\n\n- Perth Metro (Mitchell Freeway, Great Eastern Hwy & more)\n- Karratha, Port Hedland, Newman\n- Kalgoorlie, Geraldton, Onslow\n- Kimberley, Goldfields, South West\n- Jandakot (HQ & manufacturing)\n- Malaga (Office)",
        quickReplies: [{ id: 'services', label: 'Our Services', icon: <FaBullhorn /> }, { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }],
        link: { text: 'View All Locations on Map', path: '/locations' },
      };
    case 'about':
      return {
        text: "WA Billboards was founded in 1991 by Stephen and Kerry Robinson and has grown to become Western Australia's largest domestic outdoor media operator.\n\nKey facts:\n- 30+ years of experience\n- 200+ billboard sites\n- 6 regional airports\n- 100% WA family-owned\n- Own aircraft fleet with CASA approved maintenance\n- In-house sign manufacturing at Jandakot Airport\n- National reach through oOh! Media & JCDecaux partnerships",
        quickReplies: [{ id: 'team', label: 'Meet the Team', icon: <FaUsers /> }, { id: 'why_us', label: 'Why Choose Us?', icon: <FaInfoCircle /> }, { id: 'services', label: 'Our Services', icon: <FaBullhorn /> }],
        link: { text: 'Read Our Full Story', path: '/about' },
      };
    case 'why_us':
      return {
        text: "Why choose WA Billboards?\n\n- Family-owned & operated since 1991\n- Last privately owned outdoor media company in WA\n- Australia-wide representation via oOh! Media & JCDecaux\n- Cyclone-rated billboards built in-house\n- Own aircraft fleet with CASA approved maintenance\n- Quick response — no corporate delays\n- Competitive rates with flexible booking\n- Independence allows personalized service",
        quickReplies: [{ id: 'contact', label: 'Get Started', icon: <FaPhoneAlt /> }, { id: 'services', label: 'Our Services', icon: <FaBullhorn /> }, { id: 'about', label: 'About Us', icon: <FaInfoCircle /> }],
      };
    case 'team':
      return {
        text: "Meet the WA Billboards family:\n\n- Stephen Robinson — Founder & Managing Director (40+ years in outdoor media, Commercial Pilot)\n- Christopher Robinson — Operations Manager (joined 2010, Private Pilot, ASIC certified)\n- Mitchell Robinson — Business Development\n- Rebecca Zaubzer — Sales & Marketing Manager\n\nOur team holds pilot licenses to service remote locations and ASIC cards for airport access!",
        quickReplies: [{ id: 'about', label: 'About Us', icon: <FaInfoCircle /> }, { id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }],
        link: { text: 'Meet the Full Team', path: '/team' },
      };
    case 'contact':
      return {
        text: "We'd love to hear from you!\n\nPhone: 08 9248 5070\nEmail: sales@wabillboards.com.au\nAddress: 40B Boulder Road, MALAGA 6090\n\nBusiness Hours:\nMon-Fri: 8:30am - 5pm\nSat-Sun: Closed",
        quickReplies: [{ id: 'services', label: 'Our Services', icon: <FaBullhorn /> }, { id: 'locations', label: 'Locations', icon: <FaMapMarkerAlt /> }],
        link: { text: 'Go to Contact Page', path: '/contact' },
      };
    case 'landowners':
      return {
        text: "Own commercial land on a busy road? Generate steady income with a WA Billboards site!\n\nBenefits:\n- Steady income stream for contract duration\n- Flexible contracts starting at 3 years\n- Long-term relationships — some over 20 years!\n\nIdeal properties: Busy roads, blank walls/roofs facing traffic, vacant blocks.\n\nContact us:\nPhone: 08 9248 5070\nEmail: sales@wabillboards.com.au",
        quickReplies: [{ id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }, { id: 'services', label: 'Our Services', icon: <FaBullhorn /> }],
        link: { text: 'Learn More About Land Owners', path: '/land-owners' },
      };
    case 'pricing':
      return {
        text: "Our rates are competitive and flexible! Pricing depends on:\n\n- Billboard location & size\n- Campaign duration\n- Type (static billboard, airport, or digital)\n\nWe'd love to put together a custom quote for your needs. Give us a call at 08 9248 5070 or send an email to sales@wabillboards.com.au!",
        quickReplies: [{ id: 'contact', label: 'Contact Us', icon: <FaPhoneAlt /> }, { id: 'services', label: 'Our Services', icon: <FaBullhorn /> }],
        link: { text: 'Contact Us for Pricing', path: '/contact' },
      };
    case 'hours':
      return {
        text: "Our business hours are:\n\nMonday - Friday: 8:30am - 5pm\nSaturday & Sunday: Closed\n\nFeel free to reach out during business hours:\nPhone: 08 9248 5070\nEmail: sales@wabillboards.com.au",
        quickReplies: [{ id: 'contact', label: 'Contact Page', icon: <FaPhoneAlt /> }, { id: 'services', label: 'Our Services', icon: <FaBullhorn /> }],
      };
    default:
      return {
        text: "I'm not sure about that, but I'm here to help! You can ask me about:\n\n- Our advertising services (billboards, airports, digital)\n- Billboard locations across WA\n- Company info & team\n- Contact details & pricing\n- Land owner opportunities\n\nOr try one of the quick options below!",
        quickReplies: QUICK_REPLIES,
      };
  }
};

const matchIntent = (input) => {
  const text = input.toLowerCase().trim();
  if (/\b(hi|hello|hey|g'?day|howdy|good\s*(morning|afternoon|evening))\b/.test(text)) return 'greeting';
  if (/\b(billboard|billboards|outdoor\s*media|signage|signs)\b/.test(text) && !/airport|digital|screen/.test(text)) return 'billboards';
  if (/\b(airport|airports|terminal|fly|flying|fifo)\b/.test(text)) return 'airports';
  if (/\b(digital|screen|display|led)\b/.test(text)) return 'digital';
  if (/\b(service|services|advertis|offering|what\s*(do|can)\s*you)\b/.test(text)) return 'services';
  if (/\b(location|where|map|city|cities|region|perth|karratha|hedland|newman|kalgoorlie|geraldton|onslow|kimberley|goldfield|south\s*west|jandakot|malaga)\b/.test(text)) return 'locations';
  if (/\b(about|who\s*(are|is)|story|history|company|founded|family)\b/.test(text)) return 'about';
  if (/\b(why|choose|advantage|benefit|unique|different|special)\b/.test(text) && !/land/.test(text)) return 'why_us';
  if (/\b(team|people|staff|member|stephen|christopher|mitchell|rebecca|founder|director|manager)\b/.test(text)) return 'team';
  if (/\b(contact|phone|email|call|reach|address|office|enquir|inquir)\b/.test(text)) return 'contact';
  if (/\b(land\s*owner|landowner|property|site\s*(for|on)|lease|rent|income|my\s*land)\b/.test(text)) return 'landowners';
  if (/\b(price|pricing|cost|rate|how\s*much|quote|budget|afford)\b/.test(text)) return 'pricing';
  if (/\b(hour|hours|open|close|when|time|business\s*hour|trading)\b/.test(text)) return 'hours';
  return 'fallback';
};

export default function Chatbot() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => { scrollToBottom(); }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (hasGreeted) return;
    const timer = setTimeout(() => {
      const reply = buildBotReply('greeting', navigate);
      setMessages([{ id: Date.now(), sender: 'bot', ...reply }]);
      setUnreadCount(1);
      sounds.notification();
      setHasGreeted(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [hasGreeted, navigate]);

  const toggleChat = () => {
    if (isOpen) { sounds.close(); setIsOpen(false); }
    else { sounds.open(); setIsOpen(true); setUnreadCount(0); setTimeout(() => inputRef.current?.focus(), 300); }
  };

  const addBotReply = useCallback((key) => {
    setIsTyping(true);
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      const reply = buildBotReply(key, navigate);
      setMessages(prev => [...prev, { id: Date.now(), sender: 'bot', ...reply }]);
      setIsTyping(false);
      sounds.receive();
      if (!isOpen) { setUnreadCount(prev => prev + 1); sounds.notification(); }
    }, delay);
  }, [navigate, isOpen]);

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;
    sounds.send();
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text }]);
    setInput('');
    const intent = matchIntent(text);
    addBotReply(intent);
  };

  const handleQuickReply = (id) => {
    sounds.send();
    const label = [...QUICK_REPLIES, ...SERVICE_OPTIONS, { id: 'why_us', label: 'Why Choose Us?' }, { id: 'pricing', label: 'Pricing Info' }, { id: 'hours', label: 'Business Hours' }].find(q => q.id === id)?.label || id;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'user', text: label }]);
    addBotReply(id);
  };

  const handleNavigate = (path) => { navigate(path); setIsOpen(false); sounds.close(); };
  const handleKeyDown = (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Toggle */}
      <button
        className={`relative w-14 h-14 flex items-center justify-center text-white shadow-lg shadow-black/40 transition-all duration-300 ${
          isOpen ? 'bg-charcoal-mid border border-white/10' : 'bg-lime hover:bg-lime-dark hover:-translate-y-0.5 shadow-glow'
        }`}
        onClick={toggleChat}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <span className="text-xl">{isOpen ? <FaTimes /> : <FaComments />}</span>
        {!isOpen && unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 bg-white text-charcoal text-[11px] font-bold flex items-center justify-center border border-charcoal animate-bounce">{unreadCount}</span>
        )}
        {!isOpen && <span className="absolute inset-0 bg-lime/40 animate-ping pointer-events-none" />}
      </button>

      {/* Panel */}
      <div className={`absolute bottom-20 right-0 w-[380px] max-w-[calc(100vw-3rem)] max-h-[520px] overflow-hidden bg-charcoal-light border border-white/10 shadow-2xl shadow-black/60 transition-all duration-300 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="bg-charcoal border-b border-white/10 px-5 py-4 flex items-center gap-3">
          <div className="w-10 h-10 bg-lime flex items-center justify-center text-white"><FaComments /></div>
          <div className="flex-1">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.08em]">WA Billboards</h4>
            <span className="text-ash text-xs flex items-center gap-1.5">
              <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block" />
              Online — Ready to help
            </span>
          </div>
          <button className="text-ash hover:text-white transition-colors" onClick={toggleChat} aria-label="Close chat"><FaTimes /></button>
        </div>

        {/* Messages */}
        <div className="h-[340px] overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'thin' }}>
          {messages.map((msg) => (
            <div key={msg.id} className={`flex gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.sender === 'bot' && (
                <div className="w-7 h-7 bg-lime/15 flex items-center justify-center text-lime text-xs shrink-0 mt-1"><FaComments /></div>
              )}
              <div className={`max-w-[80%] ${msg.sender === 'user' ? 'bg-lime text-white px-4 py-2.5' : ''}`}>
                {msg.sender === 'bot' && (
                  <div className="bg-charcoal px-4 py-2.5 border border-white/10">
                    {msg.text && <p className="text-chalk/90 text-sm whitespace-pre-line">{msg.text}</p>}
                    {msg.cards && (
                      <div className="mt-3 space-y-2">
                        {msg.cards.map((card, i) => (
                          <button key={i} className="w-full flex items-center gap-3 p-3 bg-white/5 border border-white/5 hover:border-lime/40 hover:bg-white/10 transition-colors text-left" onClick={() => handleNavigate(card.link)}>
                            <span className="text-lime">{card.icon}</span>
                            <div className="flex-1 min-w-0"><strong className="text-white text-xs block">{card.title}</strong><p className="text-ash text-xs truncate">{card.desc}</p></div>
                            <FaChevronRight className="text-ash text-xs shrink-0" />
                          </button>
                        ))}
                      </div>
                    )}
                    {msg.link && (
                      <button className="mt-3 text-lime text-xs font-bold uppercase tracking-[0.08em] flex items-center gap-1 hover:gap-2 transition-all" onClick={() => handleNavigate(msg.link.path)}>
                        {msg.link.text} <FaChevronRight className="text-[10px]" />
                      </button>
                    )}
                    {msg.quickReplies && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {msg.quickReplies.map((qr) => (
                          <button key={qr.id} className="px-3 py-1.5 border border-lime/30 text-lime text-xs font-medium hover:bg-lime/10 transition-colors flex items-center gap-1.5" onClick={() => handleQuickReply(qr.id)}>
                            {qr.icon} {qr.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {msg.sender === 'user' && <p className="text-sm">{msg.text}</p>}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2">
              <div className="w-7 h-7 bg-lime/15 flex items-center justify-center text-lime text-xs shrink-0"><FaComments /></div>
              <div className="bg-charcoal px-4 py-3 border border-white/10">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 bg-lime/70 rounded-full" style={{ animation: 'typing 1.2s infinite 0s' }} />
                  <span className="w-2 h-2 bg-lime/70 rounded-full" style={{ animation: 'typing 1.2s infinite 0.2s' }} />
                  <span className="w-2 h-2 bg-lime/70 rounded-full" style={{ animation: 'typing 1.2s infinite 0.4s' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/10 bg-charcoal flex gap-2">
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-charcoal-light text-white text-sm px-4 py-2.5 border border-white/10 focus:border-lime focus:outline-none placeholder-ash/60 transition-colors"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            className={`w-10 h-10 flex items-center justify-center transition-all duration-200 ${
              input.trim() ? 'bg-lime text-white hover:bg-lime-dark' : 'bg-charcoal-light border border-white/10 text-ash'
            }`}
            onClick={handleSend}
            disabled={!input.trim()}
            aria-label="Send message"
          >
            <FaPaperPlane className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
