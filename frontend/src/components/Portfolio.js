import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Inject Google Fonts (Playfair Display for titles + Montserrat for body).
// We check first so the tag is only added once even if the component remounts.
if (!document.head.querySelector('link[href*="Playfair+Display"]')) {
  const link = document.createElement('link');
  link.href =
    'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
}

// ---------------------------------------------------------------------------
// Style objects — converted from the original HTML stylesheet to React
// camelCase. Only the two new additions (header + Playfair Display) are
// marked with "← ADDED". Everything else is identical to the base file.
// ---------------------------------------------------------------------------
const s = {
  // Page wrapper
  page: {
    background: '#060d1a',
    fontFamily: "'Montserrat', system-ui, -apple-system, sans-serif",
    color: '#e2e8f0',
    margin: 0,
    padding: 0,
    WebkitFontSmoothing: 'antialiased',
  },

  // ── ADDED: sticky header ─────────────────────────────────────────────────
  header: {
    position: 'sticky',
    top: 0,
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '14px 32px',
    background: 'rgba(6,13,26,0.90)',
    backdropFilter: 'blur(14px)',
    borderBottom: '1px solid rgba(79,163,224,0.1)',
  },
  homeBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    color: '#9ab0c8',
    fontSize: '0.85rem',
    fontWeight: 600,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  headerLogo: { height: '50px', width: 'auto', opacity: 0.9 },
  headerSpacer: { width: '80px' }, // keeps logo visually centred

  // ── Hero ─────────────────────────────────────────────────────────────────
  hero: { textAlign: 'center', padding: '60px 20px' },
  heroH1: {
    fontSize: '3rem',
    color: '#fff',
    marginBottom: '10px',
    fontWeight: 700,
    fontFamily: "'Playfair Display', serif", // ← ADDED
  },
  heroSpan: { color: '#4fa3e0' },
  heroP: { color: '#9ab0c8', marginBottom: '40px', fontSize: '1.1rem' },

  // ── Tabs ─────────────────────────────────────────────────────────────────
  tabNav: { display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '30px' },
  tabBtn: {
    background: 'rgba(79,163,224,0.05)',
    border: '1px solid rgba(79,163,224,0.2)',
    color: '#9ab0c8',
    padding: '10px 24px',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '0.95rem',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  },
  tabBtnActive: {
    background: '#4fa3e0',
    color: '#fff',
    borderColor: '#4fa3e0',
    boxShadow: '0 0 20px rgba(79,163,224,0.3)',
  },

  // ── Stats bar ────────────────────────────────────────────────────────────
  stats: {
    display: 'flex',
    justifyContent: 'center',
    gap: '100px',
    padding: '30px',
    background: 'rgba(255,255,255,0.02)',
    borderTop: '1px solid rgba(79,163,224,0.1)',
    borderBottom: '1px solid rgba(79,163,224,0.1)',
    marginBottom: '50px',
    flexWrap: 'wrap',
  },
  statValue: { fontSize: '2.5rem', fontWeight: 800, color: '#4fa3e0' },
  statLabel: { fontSize: '0.8rem', color: '#9ab0c8', marginTop: '4px', letterSpacing: '1px' },

  // ── Section heading (h2) ─────────────────────────────────────────────────
  sectionH2: {
    color: '#f1f5f9',
    fontSize: '1.8rem',
    fontWeight: 600,
    marginBottom: '10px',
    fontFamily: "'Playfair Display', serif", // ← ADDED
  },

  // ── Card grid ────────────────────────────────────────────────────────────
  grid: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px 80px',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
    gap: '24px',
  },
  card: {
    background: 'linear-gradient(145deg, #0d1829, #111f33)',
    border: '1px solid rgba(79,163,224,0.15)',
    borderRadius: '16px',
    padding: '28px',
    transition: 'transform 0.25s, border-color 0.25s',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
    alignItems: 'center',
  },
  sector: { fontSize: '0.75rem', padding: '4px 12px', borderRadius: '8px', fontWeight: 600 },

  // Badges
  activeBadge:    { background: 'rgba(34,197,94,0.1)',  color: '#4ade80', border: '1px solid rgba(34,197,94,0.3)',   padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 },
  expansionBadge: { background: 'rgba(251,146,60,0.1)', color: '#fb923c', border: '1px solid rgba(251,146,60,0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 },
  partnerBadge:   { background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.7rem', fontWeight: 700 },

  cardH3: {
    color: '#f1f5f9',
    fontSize: '1.15rem',
    marginTop: 0,
    marginBottom: '12px',
    position: 'relative',
    zIndex: 1,
    fontFamily: "'Playfair Display', serif", // ← ADDED
  },
  cardP: {
    color: '#7a9ab5',
    fontSize: '0.88rem',
    lineHeight: 1.65,
    marginBottom: '20px',
    minHeight: '85px',
    position: 'relative',
    zIndex: 1,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '1px solid rgba(79,163,224,0.1)',
    marginTop: 'auto',
    position: 'relative',
    zIndex: 1,
  },
  amount: { fontSize: '1.25rem', fontWeight: 800, color: '#4fa3e0' },
  visitLink: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    color: '#4fa3e0',
    fontSize: '0.8rem',
    fontWeight: 600,
    textDecoration: 'none',
    padding: '5px 12px',
    border: '1px solid rgba(79,163,224,0.3)',
    borderRadius: '20px',
    background: 'rgba(79,163,224,0.05)',
    transition: 'all 0.25s ease',
  },

  // Image-reveal overlay (used on Jet / Watch / Med cards)
  logoBg: {
    position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
    width: '100%', pointerEvents: 'none', zIndex: 2, transition: 'opacity 0.45s ease',
  },
  logoBgMed: {
    position: 'absolute', width: '100%', height: '100%', objectFit: 'cover',
    top: 0, left: 0, pointerEvents: 'none', zIndex: 2, transition: 'opacity 0.45s ease',
  },
  cardText:       { position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', transition: 'opacity 0.45s ease' },
  cardPersistent: { position: 'relative', zIndex: 3, marginTop: 'auto' },

  // ── VC map section ────────────────────────────────────────────────────────
  mapSection: { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px 100px' },
  mapContainer: {
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(79,163,224,0.1)',
    borderRadius: '24px',
    padding: '40px',
    marginBottom: '40px',
    boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
  },
  locGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' },
  locCard: {
    background: 'rgba(255,255,255,0.03)',
    border: '1px solid rgba(79,163,224,0.1)',
    borderRadius: '12px',
    padding: '16px 20px',
    fontSize: '1rem',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    transition: 'all 0.25s ease',
  },
};

// Keyframe CSS injected as a <style> tag — pulse-glow animation + responsive rules
const inlineCSS = `
  @keyframes pulse-glow {
    0%, 100% { transform: scale(1);   opacity: 1;   box-shadow: 0 0 15px #4fa3e0, 0 0 30px rgba(79,163,224,0.5); }
    50%       { transform: scale(1.3); opacity: 0.8; box-shadow: 0 0 25px #4fa3e0, 0 0 50px rgba(79,163,224,0.7); }
  }
  @media (max-width: 768px) {
    .pf-h1   { font-size: 2.2rem !important; }
    .pf-stats { gap: 40px !important; }
    .pf-stat-val { font-size: 2rem !important; }
    .pf-tabs { flex-direction: column !important; align-items: stretch !important; padding: 0 40px !important; }
  }
`;

// Small external-link SVG icon reused on every card button
const ExtIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" style={{ width: 12, height: 12 }}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// Builds a mailto URL with cc and a dynamic subject line taken from each card's title.
// encodeURIComponent() converts spaces and special chars to URL-safe equivalents
// e.g. "Plastic-to-Hydrogen Energy Platform" → "Plastic-to-Hydrogen%20Energy%20Platform"
const MAIL = (title) =>
  `mailto:info@arabicalps.ch?cc=nawal@arabicalps.ch&subject=${encodeURIComponent(title)}`;

// ===========================================================================
// Component
// ===========================================================================
export default function Portfolio() {
  const navigate = useNavigate();
  const [tab, setTab] = useState('portfolio');       // 'portfolio' | 'vc-funds'
  const [hov, setHov] = useState({});                // tracks hover per card id
  const over  = (id) => setHov((h) => ({ ...h, [id]: true }));
  const out   = (id) => setHov((h) => ({ ...h, [id]: false }));

  return (
    <div style={s.page}>
      <style>{inlineCSS}</style>

      {/* ── HEADER ── */}
      <header style={s.header}>
        <button
          style={s.homeBtn}
          onClick={() => navigate('/')}
          onMouseOver={(e) => (e.currentTarget.style.color = '#4fa3e0')}
          onMouseOut={(e)  => (e.currentTarget.style.color = '#9ab0c8')}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Home
        </button>
        <img src="/images/arabic-alps-logo.png" alt="Arabic Alps" style={s.headerLogo} />
        <div style={s.headerSpacer} />
      </header>

      {/* ── HERO ── */}
      <div style={s.hero}>
        <h1 className="pf-h1" style={s.heroH1}>
          arabic alps <span style={s.heroSpan}>Portfolio</span>
        </h1>
        {/* <p>Bridging Sovereign Capital &amp; Swiss Precision</p> */}
        <p></p>
        <div className="pf-tabs" style={s.tabNav}>
          <button
            style={{ ...s.tabBtn, ...(tab === 'portfolio' ? s.tabBtnActive : {}) }}
            onClick={() => setTab('portfolio')}
          >Active Portfolio</button>
          <button
            style={{ ...s.tabBtn, ...(tab === 'vc-funds' ? s.tabBtnActive : {}) }}
            onClick={() => setTab('vc-funds')}
          >VC Fund Network</button>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════════
          PORTFOLIO TAB
      ══════════════════════════════════════════════════════════════════ */}
      {tab === 'portfolio' && (
        <div>
          <div style={{ textAlign: 'center', marginBottom: '30px' }}>
            <h2 style={s.sectionH2}>Active Portfolio Companies</h2>
          </div>

          <div className="pf-stats" style={s.stats}>
            <div style={{ textAlign: 'center' }}>
              <div className="pf-stat-val" style={s.statValue}>12</div>
              <div style={s.statLabel}>ACTIVE PORTFOLIO</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div className="pf-stat-val" style={s.statValue}>5</div>
              <div style={s.statLabel}>SECTORS</div>
            </div>
          </div>

          <div style={s.grid}>

            {/* 1 — AI-Powered Critical Minerals */}
            {(() => { const title = "AI-Powered Critical Minerals"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#1e1040', color: '#a78bfa' }}>⛏️ AI Mineral Mining</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>Hyperspectral satellite imaging + autonomous robotics for rare earth elements, gold &amp; silver discovery. Real-time AI data fusion lifts success rates to 70–90% with minimal environmental impact.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 2 — GenAI-Powered Cybersecurity */}
            {(() => { const title = "GenAI-Powered Cybersecurity"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#1e1040', color: '#a78bfa' }}>🔐 AI Cybersecurity</span>
                <span style={s.expansionBadge}>● MARKET EXPANSION</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>End-to-end AI-powered cybersecurity platform combining automated phishing simulation, risk quantification, and zero-touch remediation. Serving Swiss/European clients with Japan market expansion facilitated by arabic alps.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 3 — Conversational AI Platform */}
            {(() => { const title = "Conversational AI Platform"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#1e1040', color: '#a78bfa' }}>🤖 AI Voice</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>UK-based multilingual Voice AI with self-learning Business Agents. Transforms call centers and QSR operations, delivering personalized service with up to 70% operational cost reduction.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 4 — Metaverse Surgical Hospital */}
            {(() => { const title = "Metaverse Surgical Hospital"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#2d1a1a', color: '#fda4af' }}>🏥 AI Health Care</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>Advanced smart-city Telemedicine delivering world-class Real-Time Robotic Telesurgery, Diagnostics, and Patient care across geographies. NASA-approved space protocols. Strategic hubs in Middle East and Europe.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 5 — Patented Odour Neutralisation Device */}
            {(() => { const title = "Patented Odour Neutralisation Device"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#2d1a1a', color: '#fda4af' }}>🏥 Health Care</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>Non-invasive Class 1 medical device, patented across 154 countries under PCT, with NHS‑fixed pricing and initial launches in the UK and Japan.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 6 — Medical Tourism Gateway (image reveal on hover) */}
            <div style={s.card} onMouseEnter={() => over('med')} onMouseLeave={() => out('med')}>
              <img style={{ ...s.logoBgMed, opacity: hov.med ? 0.4 : 0 }}
                src="https://static.wixstatic.com/media/44af76_322e3fc43f4d42ff9b09e5d3dd565709~mv2.jpg/v1/fill/w_438,h_555,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Her%20skin%20is%20so%20glassy!%20%F0%9F%98%8A.jpg"
                alt="South Korea Medical Tourism" />
              <div style={{ ...s.cardText, opacity: hov.med ? 0 : 1 }}>
                <div style={s.cardHeader}>
                  <span style={{ ...s.sector, background: '#2d1a1a', color: '#fda4af' }}>🏥 Health Care</span>
                  <span style={s.partnerBadge}>● PARTNER</span>
                </div>
                <h3 style={s.cardH3}>Medical Tourism Gateway</h3>
                <p style={s.cardP}>Connecting European and Middle East clients with premium skin care clinics and plastic surgery centers in South Korea. Partners with private jet services for seamless experiences.</p>
              </div>
              <div style={s.cardPersistent}>
                <div style={s.cardFooter}>
                  <span style={s.amount}>Partnership</span>
                  <a href="https://wa.me/41798659629?text=MedicalTourismSouthKorea" target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
                </div>
              </div>
            </div>

            {/* 7 — Plastic-to-Hydrogen Energy Platform */}
            {(() => { const title = "Plastic-to-Hydrogen Energy Platform"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#14532d', color: '#4ade80' }}>⚡ Energy &amp; Sustainability</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>Converting plastic waste into green hydrogen using patented distributed generation technology. Multi-continent operations with carbon credit revenue streams.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$35M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 8 — Green Data Centre Infrastructure */}
            {(() => { const title = "Green Data Centre Infrastructure"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#14532d', color: '#4ade80' }}>⚡ Energy &amp; Sustainability</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>Next-generation ultra-secure data centres specialising in sovereign data security, AI, and HPC for defence, telecommunications, and critical infrastructure sectors.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 9 — Flexible Private Jet Access (FlyRavenJet image reveal) */}
            <div style={s.card} onMouseEnter={() => over('jet')} onMouseLeave={() => out('jet')}>
              <img style={{ ...s.logoBg, opacity: hov.jet ? 1 : 0 }}
                src="https://flyravenjet.com/wp-content/uploads/2025/01/fly-raven-1024x424.jpg"
                alt="FlyRavenJet logo" />
              <div style={{ ...s.cardText, opacity: hov.jet ? 0 : 1 }}>
                <div style={s.cardHeader}>
                  <span style={{ ...s.sector, background: '#3b1f00', color: '#fb923c' }}>✈️ Transportation</span>
                  <span style={s.partnerBadge}>● PARTNER</span>
                </div>
                <h3 style={s.cardH3}>Flexible Private Jet Access</h3>
                <p style={s.cardP}>Asset-light private aviation with no pre-funding, no lock-in, no minimum hours. Carbon-offset included. Full concierge services across MENA, Europe, and Americas.</p>
              </div>
              <div style={s.cardPersistent}>
                <p style={{ textAlign: 'center' }}>Use referral code <b>Alps2026NS</b> for an exclusive discount.</p>
                <div style={s.cardFooter}>
                  <span style={s.amount}>$500K</span>
                  <a href="https://flyravenjet.com/membership/" target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Visit Site</a>
                </div>
              </div>
            </div>

            {/* 10 — Overnight Luxury Bus Network */}
            {(() => { const title = "Overnight Luxury Bus Network"; return (
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#3b1f00', color: '#fb923c' }}>🚌 Transportation</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>{title}</h3>
              <p style={s.cardP}>Unique lie‑flat bus seats designed in Switzerland, turning overnight journeys into restful sleep. Routes live, with potential extension to MENA operators.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>$5M</span>
                <a href={MAIL(title)} target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
              </div>
            </div>
            ); })()}

            {/* 11 — Premium Property Platform */}
            <div style={s.card}>
              <div style={s.cardHeader}>
                <span style={{ ...s.sector, background: '#3d1c5e', color: '#d4a5ff' }}>🏠 Luxury Real Estate</span>
                <span style={s.activeBadge}>● ACTIVE</span>
              </div>
              <h3 style={s.cardH3}>Premium Property Platform</h3>
              <p style={s.cardP}>Curated access to exclusive Swiss and European real estate portfolios, incl. off-market luxury assets, commercial developments, and strategic land acquisitions. With innovative Rent2Buy structures that reduce entry barriers.</p>
              <div style={s.cardFooter}>
                <span style={s.amount}>&gt;$1M</span>
                <a href="https://europeanproperty.com/author/arabicalps/" target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Visit Site</a>
              </div>
            </div>

            {/* 12 — Swiss-Made Spiritual Timepiece (Aramedes image reveal) */}
            <div style={s.card} onMouseEnter={() => over('watch')} onMouseLeave={() => out('watch')}>
              <img style={{ ...s.logoBg, opacity: hov.watch ? 1 : 0 }}
                src="https://aramedes.com/cdn/shop/files/aramedes_logo_zh_rgb_def.png?v=1752727149&width=280"
                alt="Aramedes logo" />
              <div style={{ ...s.cardText, opacity: hov.watch ? 0 : 1 }}>
                <div style={s.cardHeader}>
                  <span style={{ ...s.sector, background: '#3d1c5e', color: '#d4a5ff' }}>⌚ Luxury Goods</span>
                  <span style={s.partnerBadge}>● PARTNER</span>
                </div>
                <h3 style={s.cardH3}>Swiss-Made Spiritual Timepiece</h3>
                <p style={s.cardP}>Patented mechanical Swiss watch with exclusive features (Qibla, Salat &amp; Sawm Indicator) for the global Muslim community.</p>
              </div>
              <div style={s.cardPersistent}>
                <p style={{ textAlign: 'center' }}>Contact us for <b>Special Ramadan Offer!</b></p>
                <div style={s.cardFooter}>
                  <span style={s.amount}>Partnership</span>
                  <a href="https://wa.me/41798659629?text=QiblaMastertimerOffer" target="_blank" rel="noreferrer" style={s.visitLink}><ExtIcon /> Contact Us</a>
                </div>
              </div>
            </div>

          </div>{/* /grid */}
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          VC FUND NETWORK TAB
      ══════════════════════════════════════════════════════════════════ */}
      {tab === 'vc-funds' && (
        <div style={s.mapSection}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={s.sectionH2}>Global Venture Capital Fund Network</h2>
            <p style={{ color: '#9ab0c8', fontSize: '1rem' }}>Strategic partnerships across continents</p>
          </div>

          <div style={s.mapContainer}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '900px', margin: '0 auto' }}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/013/360/998/non_2x/blue-circle-shape-world-map-free-png.png"
                alt="World Map"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* Pulse dots — positions match the original HTML exactly */}
              {[
                { top: '34%',   left: '50.4%', delay: '0s'   }, // Switzerland
                { top: '41.5%', left: '85.5%', delay: '0.2s' }, // Japan
                { top: '62%',   left: '76%',   delay: '0.4s' }, // Singapore
                { top: '49%',   left: '62%',   delay: '0.6s' }, // UAE
                { top: '48.6%', left: '61%',   delay: '0.8s' }, // Qatar
                { top: '48.3%', left: '61%',   delay: '0.9s' }, // Bahrain
                { top: '49%',   left: '59%',   delay: '1s'   }, // Saudi Arabia
                { top: '38%',   left: '23%',   delay: '1.2s' }, // USA
              ].map((d, i) => (
                <div key={i} style={{
                  position: 'absolute', top: d.top, left: d.left,
                  width: '12px', height: '12px', background: '#22c55e', borderRadius: '50%',
                  boxShadow: '0 0 15px #4fa3e0, 0 0 30px rgba(79,163,224,0.5)',
                  animation: `pulse-glow 2s infinite ${d.delay}`,
                }} />
              ))}
            </div>
          </div>

          <div style={{ ...s.locGrid, marginTop: '40px' }}>
            {[
              { flag: '🇨🇭', name: 'Switzerland' }, { flag: '🇯🇵', name: 'Japan' },
              { flag: '🇸🇬', name: 'Singapore' },   { flag: '🇦🇪', name: 'UAE' },
              { flag: '🇶🇦', name: 'Qatar' },        { flag: '🇧🇭', name: 'Bahrain' },
              { flag: '🇸🇦', name: 'Saudi Arabia' }, { flag: '🇺🇸', name: 'USA' },
            ].map((loc) => (
              <div key={loc.name} style={s.locCard}>
                <span style={{ fontSize: '1.2rem' }}>{loc.flag}</span> {loc.name}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════════════════════════════════
          FOOTER — copied verbatim from Arabic-Alps-Portfolio-Final_wFooter.html
      ══════════════════════════════════════════════════════════════════ */}
      <footer style={{
        borderTop: '1px solid rgba(79,163,224,.12)',
        background: 'rgba(4,9,18,.7)',
        padding: '48px 32px 36px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* soft glow */}
        <div style={{
          position: 'absolute', bottom: '-60px', left: '50%', transform: 'translateX(-50%)',
          width: '600px', height: '200px',
          background: 'radial-gradient(ellipse, rgba(79,163,224,.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <img
          src="/images/arabic-alps-logo.png"
          alt="Arabic Alps"
          style={{ height: '48px', width: 'auto', opacity: 0.85, marginBottom: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />

        {/* decorative divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', maxWidth: '280px', margin: '0 auto 20px' }}>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to right, transparent, rgba(79,163,224,.4))' }} />
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4fa3e0', flexShrink: 0 }} />
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(to left, transparent, rgba(79,163,224,.4))' }} />
        </div>

        <p style={{ color: '#9ab0c8', fontSize: '.88rem', fontWeight: 300, marginBottom: '18px', letterSpacing: '.3px' }}>
          Bridging Gulf Capital with European Excellence
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginBottom: '20px', flexWrap: 'wrap' }}>
          {[' '].map((label) => (
            <button
              key={label}
              onClick={() => navigate(`/#${label.toLowerCase()}`)}
              style={{ color: 'rgba(154,176,200,.55)', fontSize: '.78rem', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {label}
            </button>
          ))}
        </div>

        <p style={{ color: 'rgba(154,176,200,.35)', fontSize: '.74rem' }}>
          © {new Date().getFullYear()} arabic alps – Nawal Amra. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

