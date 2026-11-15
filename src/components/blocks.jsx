import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion, AnimatePresence, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue,
} from 'framer-motion';
import { ArrowUpRight, Plus, Check, MessageCircle, Phone } from 'lucide-react';
import { COMPANY, BRAND_LOGO_PATHS, u } from '../data';
import { SplitText, Reveal, Magnetic, Counter, Tilt } from './ui';

export const ease = [0.22, 1, 0.36, 1];

/* ---------- Image with reveal + graceful fallback ---------- */
export function Img({ src, alt = '', className = '', zoom = true, ...rest }) {
  const [ok, setOk] = useState(false);
  const [bad, setBad] = useState(false);
  return (
    <div className={`img ${zoom ? 'img-zoom' : ''} ${className}`} {...rest}>
      {!bad && (
        <img src={src} alt={alt} loading="lazy" decoding="async" className={ok ? 'ok' : ''}
          onLoad={() => setOk(true)} onError={() => setBad(true)} />
      )}
    </div>
  );
}

/* Image that un-masks as it scrolls into view and drifts with parallax */
export function RevealImg({ src, alt, className = '', ratio = '4 / 3', from = 'bottom' }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const clip = { bottom: 'inset(100% 0 0 0 round 28px)', left: 'inset(0 100% 0 0 round 28px)', right: 'inset(0 0 0 100% round 28px)' }[from];
  return (
    <motion.div ref={ref} className={`reveal-img ${className}`} style={{ aspectRatio: ratio }}
      initial={{ clipPath: clip }} whileInView={{ clipPath: 'inset(0% 0 0 0 round 28px)' }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }} transition={{ duration: 1.3, ease }}>
      <motion.div style={{ y, position: 'absolute', inset: '-10% 0' }}><Img src={src} alt={alt} zoom={false} className="fill" /></motion.div>
    </motion.div>
  );
}

/* ---------- Fire & ice particle canvas ---------- */
export function FireIce({ density = 1 }) {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext('2d');
    let w, h, raf, parts = [], on = true;
    const mouse = { x: -999, y: -999 };
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const spawn = (init) => {
      const hot = Math.random() < 0.5;
      return { hot, x: hot ? Math.random() * w * 0.6 : w * 0.4 + Math.random() * w * 0.6, y: init ? Math.random() * h : hot ? h + 10 : -10,
        r: 0.8 + Math.random() * 2.4, vx: (Math.random() - 0.5) * 0.3, vy: hot ? -(0.4 + Math.random()) : 0.25 + Math.random() * 0.6,
        life: Math.random() * 6.28, a: 0.3 + Math.random() * 0.7 };
    };
    const resize = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      w = c.clientWidth; h = c.clientHeight; c.width = w * dpr; c.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      parts = Array.from({ length: Math.round(Math.min(130, (w * h) / 10000) * density) }, () => spawn(true));
    };
    const draw = () => {
      if (on) {
        ctx.clearRect(0, 0, w, h);
        for (let i = 0; i < parts.length; i++) {
          const p = parts[i];
          p.life += 0.02; p.x += p.vx + Math.sin(p.life) * 0.4; p.y += p.vy;
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
          if (d < 140 && d > 0) { const f = (140 - d) / 140; p.x += (dx / d) * f * 3; p.y += (dy / d) * f * 3; }
          if (p.y < -20 || p.y > h + 20 || p.x < -20 || p.x > w + 20) { parts[i] = spawn(false); continue; }
          ctx.globalAlpha = p.a * (p.hot ? Math.min(1, p.y / h + 0.15) : Math.min(1, 1 - p.y / h + 0.15));
          if (p.hot) {
            const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
            g.addColorStop(0, '#ffb199'); g.addColorStop(0.3, '#ff3b2f'); g.addColorStop(1, 'rgba(227,18,27,0)');
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(p.x, p.y, p.r * 4, 0, 6.28); ctx.fill();
          } else {
            ctx.strokeStyle = '#7fd2ff'; ctx.lineWidth = 1; ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.life * 0.5);
            for (let k = 0; k < 3; k++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(-p.r * 1.8, 0); ctx.lineTo(p.r * 1.8, 0); ctx.stroke(); }
            ctx.restore();
          }
        }
        ctx.globalAlpha = 1;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };
    const onMove = (e) => { const r = c.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting; });
    io.observe(c); resize(); draw();
    addEventListener('resize', resize); addEventListener('mousemove', onMove);
    return () => { cancelAnimationFrame(raf); io.disconnect(); removeEventListener('resize', resize); removeEventListener('mousemove', onMove); };
  }, [density]);
  return <canvas ref={ref} className="fx-canvas" />;
}

/* ---------- Inner-page hero ---------- */
export function PageHero({ eyebrow, title, accent, text, img, children, badges }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <section className="page-hero" ref={ref}>
      {img && (
        <motion.div className="page-hero-bg" style={{ y, scale }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.4 }}>
          <Img src={img} alt="" zoom={false} className="fill" />
        </motion.div>
      )}
      <div className="page-hero-shade" />
      <FireIce density={0.5} />
      <motion.div className="container page-hero-in" style={{ opacity: fade }}>
        {eyebrow && <motion.span className="eyebrow" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease, delay: 0.5 }}>{eyebrow}</motion.span>}
        <SplitText as="h1" className="h-display" lines={[title]} delay={0.55} stagger={0.05} wordClass={(w) => (accent && accent.split(' ').includes(w) ? 'grad-text' : '')} />
        {text && <motion.p className="lead" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 0.9 }}>{text}</motion.p>}
        {badges && (
          <motion.div className="chips" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.08, delayChildren: 1 } } }}>
            {badges.map((b) => <motion.span key={b} className="chip" variants={{ h: { opacity: 0, y: 14 }, s: { opacity: 1, y: 0 } }}><Check />{b}</motion.span>)}
          </motion.div>
        )}
        {children && <motion.div className="hero-actions" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease, delay: 1.05 }}>{children}</motion.div>}
      </motion.div>
    </section>
  );
}

export function SectionHead({ eyebrow, lines, accent, text, center, children }) {
  return (
    <div className={`sec-head ${center ? 'center' : ''}`}>
      <div>
        {eyebrow && <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>}
        <SplitText className="h-2" lines={lines} wordClass={(w) => (accent && accent.split(' ').includes(w) ? 'grad-text' : '')} />
      </div>
      {(text || children) && <Reveal delay={0.15} className="sec-head-side">{text && <p className="lead">{text}</p>}{children}</Reveal>}
    </div>
  );
}

export function Btn({ to, href, children, variant = 'primary', icon = true, ...rest }) {
  const cls = `btn btn-${variant}`;
  const inner = <>{children}{icon && <ArrowUpRight />}</>;
  const el = to ? <Link className={cls} to={to} {...rest}>{inner}</Link>
    : href ? <a className={cls} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" {...rest}>{inner}</a>
    : <button className={cls} {...rest}>{inner}</button>;
  return <Magnetic strength={0.2}>{el}</Magnetic>;
}

/* ---------- Velocity marquee ---------- */
const wrap = (min, max, v) => { const r = max - min; return ((((v - min) % r) + r) % r) + min; };
export function Marquee({ items, base = 2, className = '' }) {
  const x = useMotionValue(0);
  const { scrollY } = useScroll();
  const vel = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(vel, [0, 1000], [0, 5], { clamp: false });
  const dir = useRef(1);
  useAnimationFrame((t, d) => {
    let move = dir.current * base * (Math.min(d, 50) / 1000);
    if (factor.get() < 0) dir.current = -1; else if (factor.get() > 0) dir.current = 1;
    move += dir.current * move * factor.get();
    x.set(wrap(-25, 0, x.get() - move));
  });
  const tx = useTransform(x, (v) => `${v}%`);
  const row = [...items, ...items];
  return (
    <div className={`marquee-wrap ${className}`}>
      <motion.div className="marquee-track" style={{ x: tx }}>
        {[0, 1].map((k) => (
          <div key={k} style={{ display: 'flex' }}>{row.map((b, i) => <div className="marquee-item" key={i}>{b}<span className="dot" /></div>)}</div>
        ))}
      </motion.div>
    </div>
  );
}

export function StatsRow({ items, light }) {
  return (
    <div className={`stats ${light ? 'stats-light' : ''}`} style={{ '--n': items.length }}>
      {items.map((s, i) => (
        <Reveal className="stat" key={s.label} delay={i * 0.08}>
          <div className="stat-num"><Counter to={s.value} /><span className={i % 2 ? 'blue' : 'red'}>{s.suffix}</span></div>
          <div className="stat-label">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}

/* Icon feature card with tilt + glare */
export function FeatureCard({ icon: Icon, title, text, pts, i = 0, num }) {
  return (
    <motion.div initial={{ opacity: 0, y: 50, rotateX: -18 }} whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }} style={{ perspective: 1000 }}>
      <Tilt className={`feat ${i % 2 ? 'feat-b' : 'feat-r'}`} max={6} glare={i % 2 ? 'rgba(57,184,255,0.16)' : 'rgba(255,74,61,0.16)'}>
        {num && <span className="feat-num">{String(i + 1).padStart(2, '0')}</span>}
        <div className="feat-ic"><Icon /></div>
        <h3>{title}</h3>
        {text && <p>{text}</p>}
        {pts && <ul className="ticks">{pts.map((p) => <li key={p}><Check />{p}</li>)}</ul>}
      </Tilt>
    </motion.div>
  );
}

/* Image card with hover lift, zoom and sliding arrow */
export function PhotoCard({ to, img, title, text, tag, cta, i = 0, tall }) {
  const C = to ? Link : 'div';
  return (
    <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease, delay: (i % 3) * 0.08 }}>
      <C to={to} className={`photo-card ${tall ? 'tall' : ''}`}>
        <Img src={u(img, 900)} alt={title} className="fill" />
        <div className="photo-shade" />
        {tag && <span className="photo-tag">{tag}</span>}
        <div className="photo-body">
          <h3>{title}</h3>
          {text && <p>{text}</p>}
          {cta && <span className="photo-cta">{cta} <ArrowUpRight /></span>}
        </div>
      </C>
    </motion.div>
  );
}

export function Accordion({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="acc">
      {items.map((it, i) => (
        <Reveal key={it.q} delay={i * 0.06} className={`acc-item ${open === i ? 'open' : ''}`}>
          <button className="acc-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
            <span>{it.q}</span>
            <motion.i animate={{ rotate: open === i ? 135 : 0 }} transition={{ duration: 0.4, ease }}><Plus /></motion.i>
          </button>
          <AnimatePresence initial={false}>
            {open === i && (
              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease }} style={{ overflow: 'hidden' }}>
                <p className="acc-a">{it.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      ))}
    </div>
  );
}

export function Testimonials({ items }) {
  return (
    <div className="quotes">
      {items.map((t, i) => (
        <motion.figure className="quote" key={t.name} initial={{ opacity: 0, y: 60, rotate: i % 2 ? 2 : -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.9, ease, delay: (i % 3) * 0.1 }} whileHover={{ y: -8 }}>
          <span className="quote-mark">“</span>
          <blockquote>{t.q}</blockquote>
          <figcaption>
            <span className="avatar">{t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}</span>
            <span><strong>{t.name}</strong><small>{t.role}</small></span>
            {t.v && <span className="quote-kpi"><b>{t.v}</b><small>{t.k}</small></span>}
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}

/* Closing call-to-action band used at the bottom of every page */
export function CTA({ eyebrow = 'Ready to equip your kitchen?', title = 'Need help planning your commercial kitchen?', text = 'Our team is ready to advise, quote and equip your project from A to Z — from the first sketch to the first plate.' }) {
  return (
    <section className="section cta-sec">
      <div className="container">
        <motion.div className="cta-box cta-band" initial={{ clipPath: 'inset(14% 8% 14% 8% round 48px)' }} whileInView={{ clipPath: 'inset(0% 0% 0% 0% round 48px)' }}
          viewport={{ once: true, margin: '0px 0px -12% 0px' }} transition={{ duration: 1.2, ease }}>
          <motion.div className="cta-blob r" animate={{ x: [0, -60, 0], y: [0, -40, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} />
          <motion.div className="cta-blob b" animate={{ x: [0, 60, 0], y: [0, 50, 0] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="cta-band-in">
            <Reveal><span className="eyebrow">{eyebrow}</span></Reveal>
            <SplitText className="h-2" lines={[title]} />
            <Reveal delay={0.15}><p className="lead">{text}</p></Reveal>
            <Reveal delay={0.25} className="hero-actions">
              <Btn to="/quote">Request a quote</Btn>
              <Btn href={COMPANY.whatsapp} variant="ghost" icon={false}><MessageCircle /> Chat on WhatsApp</Btn>
              <Btn to="/branches" variant="ghost">Our branches</Btn>
            </Reveal>
            <Reveal delay={0.35} className="cta-contacts">
              <a href={COMPANY.phoneHref}><Phone /> {COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </Reveal>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* Brand logo: local file → live site → text */
export function BrandLogo({ brand }) {
  const [n, setN] = useState(0);
  if (n >= BRAND_LOGO_PATHS.length) return <span className="brand-text">{brand.name}</span>;
  return <img src={BRAND_LOGO_PATHS[n] + brand.file} alt={brand.name} loading="lazy" onError={() => setN(n + 1)} />;
}

/* ---------- Config-driven enquiry form (sends via WhatsApp, no server needed) ---------- */
export function EnquiryForm({ subject, fields, submit = 'Send request', note }) {
  const [sent, setSent] = useState(null);
  const [chips, setChips] = useState({});
  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const lines = [`*${subject}*`];
    fields.forEach((fd) => {
      if (fd.type === 'heading') return;
      const v = fd.type === 'chips' ? (chips[fd.name] || []).join(', ') : f.get(fd.name);
      if (v) lines.push(`${fd.label}: ${v}`);
    });
    const url = `${COMPANY.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`;
    setSent(url);
    window.open(url, '_blank', 'noopener');
  };
  const toggle = (name, o) => setChips((c) => { const cur = c[name] || []; return { ...c, [name]: cur.includes(o) ? cur.filter((x) => x !== o) : [...cur, o] }; });
  return (
    <motion.form className="form" onSubmit={onSubmit} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.9, ease }}>
      <div className="form-grid">
        {fields.map((fd, i) => {
          const id = `f-${subject.replace(/\W+/g, '-')}-${fd.name || i}`;
          if (fd.type === 'heading') return <div className="form-h" key={i}>{fd.label}</div>;
          if (fd.type === 'chips') return (
            <div className="field-chips full" key={fd.name}>
              <span className="fl">{fd.label}{fd.required && ' *'}</span>
              <div className="chips">{fd.options.map((o) => (
                <button type="button" key={o} className={`chip pick ${(chips[fd.name] || []).includes(o) ? 'on' : ''}`} onClick={() => toggle(fd.name, o)}>{o}</button>
              ))}</div>
            </div>
          );
          return (
            <div className={`field ${fd.half ? '' : 'full'}`} key={fd.name}>
              {fd.type === 'select' ? (
                <select id={id} name={fd.name} defaultValue={fd.value || fd.options[0]}>{fd.options.map((o) => <option key={o}>{o}</option>)}</select>
              ) : fd.type === 'textarea' ? (
                <textarea id={id} name={fd.name} placeholder=" " required={fd.required} />
              ) : (
                <input id={id} name={fd.name} type={fd.type || 'text'} placeholder=" " required={fd.required} />
              )}
              <label htmlFor={id} className={fd.type === 'select' || fd.type === 'date' ? 'up' : ''}>{fd.label}{fd.required && ' *'}</label>
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        {sent && (
          <motion.div className="form-ok" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
            Your request is ready in WhatsApp — press send there to reach our team. If WhatsApp did not open, <a href={sent} target="_blank" rel="noreferrer">open it here</a> or call {COMPANY.phone}.
          </motion.div>
        )}
      </AnimatePresence>
      <div className="form-foot">
        <Btn type="submit">{submit}</Btn>
        {note && <small>{note}</small>}
      </div>
    </motion.form>
  );
}
