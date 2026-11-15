import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { ArrowUpRight, ArrowUp, Menu, X, ChevronDown, Phone, Mail, MapPin, ShoppingBag } from 'lucide-react';
import logo from '../assets/logo.png';
import mark from '../assets/mark.png';
import { NAV, COMPANY, SECTORS, BRANCHES } from '../data';
import { Magnetic } from './ui';
import { ease } from './blocks';

export function Preloader({ onDone }) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);
  useEffect(() => {
    document.body.classList.add('loading');
    let n = 0;
    const id = setInterval(() => {
      n = Math.min(100, n + Math.ceil(Math.random() * 10));
      setCount(n);
      if (n >= 100) { clearInterval(id); setTimeout(() => setExit(true), 200); }
    }, 45);
    return () => clearInterval(id);
  }, []);
  return (
    <AnimatePresence onExitComplete={() => { document.body.classList.remove('loading'); onDone(); }}>
      {!exit && (
        <motion.div className="preloader" key="pre" initial={{ clipPath: 'inset(0 0 0% 0)' }} exit={{ clipPath: 'inset(0 0 100% 0)' }} transition={{ duration: 0.9, ease }}>
          <div className="preloader-inner">
            <motion.img src={mark} alt="" className="preloader-mark" initial={{ scale: 0.4, rotate: -90, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ duration: 1, ease }} />
            <div className="preloader-bar"><motion.span style={{ scaleX: count / 100 }} /></div>
            <div className="preloader-count">{String(count).padStart(3, '0')}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);
  useEffect(() => {
    if (matchMedia('(hover: none)').matches) return;
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y, raf;
    const move = (e) => {
      x = e.clientX; y = e.clientY;
      ring.current?.classList.toggle('hover', !!e.target.closest?.('a, button, .feat, .photo-card, input, textarea, select, .brand-tile'));
    };
    const loop = () => {
      rx += (x - rx) * 0.16; ry += (y - ry) * 0.16;
      if (dot.current) dot.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ring.current) ring.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };
    addEventListener('mousemove', move); loop();
    return () => { removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);
  return (<><div className="cursor-ring" ref={ring} /><div className="cursor-dot" ref={dot} /></>);
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}

export function Navbar({ ready }) {
  const { scrollY } = useScroll();
  const { pathname } = useLocation();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState(false);
  const [hover, setHover] = useState(null);
  useMotionValueEvent(scrollY, 'change', (v) => { const p = scrollY.getPrevious() ?? 0; setHidden(v > p && v > 300 && !open); });
  useEffect(() => { setOpen(false); setDrop(false); }, [pathname]);
  const services = NAV.find((n) => n.children).children;
  const inServices = services.some((s) => pathname.startsWith(s.to));

  return (
    <>
      <motion.header className="nav" initial={{ y: -130 }} animate={{ y: ready && !hidden ? 0 : -130 }} transition={{ duration: 0.6, ease }}>
        <div className="nav-inner">
          <Link to="/" className="nav-logo"><img src={logo} alt={COMPANY.name} /></Link>
          <nav className="nav-links" onMouseLeave={() => { setHover(null); setDrop(false); }}>
            {NAV.map((n) => n.children ? (
              <div className="nav-drop" key={n.label} onMouseEnter={() => { setHover(n.label); setDrop(true); }}>
                <button className={`nav-a ${inServices ? 'active' : ''}`} onClick={() => setDrop((d) => !d)} aria-expanded={drop}>
                  {hover === n.label && <motion.span layoutId="navbg" className="bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                  {n.label} <motion.i animate={{ rotate: drop ? 180 : 0 }}><ChevronDown /></motion.i>
                </button>
                <AnimatePresence>
                  {drop && (
                    <motion.div className="mega" initial={{ opacity: 0, y: 14, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.97 }} transition={{ duration: 0.3, ease }}>
                      {n.children.map((c, i) => {
                        const Icon = c.icon;
                        return (
                          <motion.div key={c.to} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i, duration: 0.4, ease }}>
                            <Link to={c.to} className="mega-item"><span className="mega-ic"><Icon /></span><span><strong>{c.label}</strong><small>{c.desc}</small></span></Link>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `nav-a ${isActive ? 'active' : ''}`} onMouseEnter={() => { setHover(n.to); setDrop(false); }}>
                {hover === n.to && <motion.span layoutId="navbg" className="bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}
                {n.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav-cta">
            <a className="nav-shop" href={COMPANY.store} target="_blank" rel="noreferrer"><ShoppingBag /> Shop</a>
            <Magnetic strength={0.25}><Link className="btn btn-primary btn-quote" to="/quote">Get a quote <ArrowUpRight /></Link></Magnetic>
            <button className="nav-burger" aria-label="Menu" onClick={() => setOpen((o) => !o)}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu" data-lenis-prevent initial={{ clipPath: 'circle(0% at 92% 6%)' }} animate={{ clipPath: 'circle(150% at 92% 6%)' }} exit={{ clipPath: 'circle(0% at 92% 6%)' }} transition={{ duration: 0.7, ease }}>
            <div className="mm-links">
              {NAV.flatMap((n) => (n.children ? n.children : [n])).map((n, i) => (
                <motion.div key={n.to} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.035, duration: 0.5, ease }}>
                  <Link to={n.to}>{n.label}</Link>
                </motion.div>
              ))}
            </div>
            <div className="mm-foot">
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              <a href={COMPANY.store} target="_blank" rel="noreferrer">mariotstore.com ↗</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export function Footer({ toTop }) {
  const quick = [['About', '/about'], ['Projects', '/projects'], ['Brands', '/brands'], ['Branches', '/branches'], ['Blog', '/blog'], ['How We Work', '/how-we-work'], ['Get Quote', '/quote']];
  const services = [['Design Your Project', '/design'], ['Fabrication', '/fabrication'], ['Maintenance', '/maintenance'], ['Business Hub', '/business-hub'], ['Kitchen Consultation', '/consultation'], ['Restaurant Opening', '/restaurant-opening'], ['Urgent Request', '/urgent-request']];
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo"><img src={logo} alt={COMPANY.name} /></div>
            <p className="about">Professional supplier of commercial kitchen equipment, refrigeration, stainless steel fabrication and laundry solutions across the UAE and GCC.</p>
            <div className="socials">
              <a href={COMPANY.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">IG</a>
              <a href={COMPANY.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">FB</a>
              <a href={COMPANY.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">IN</a>
            </div>
          </div>
          <div><h5>Quick links</h5><ul>{quick.map(([l, t]) => <li key={t}><Link to={t}>{l}</Link></li>)}<li><a href={COMPANY.store} target="_blank" rel="noreferrer">Shop Now ↗</a></li></ul></div>
          <div><h5>Services</h5><ul>{services.map(([l, t]) => <li key={t}><Link to={t}>{l}</Link></li>)}</ul></div>
          <div><h5>Sectors</h5><ul>{SECTORS.slice(0, 8).map((s) => <li key={s.slug}><Link to={`/sectors/${s.slug}`}>{s.name}</Link></li>)}</ul></div>
          <div>
            <h5>Contact</h5>
            <ul className="foot-contact">
              <li><MapPin /> <span>{COMPANY.address}</span></li>
              <li><Phone /> <a href={COMPANY.phoneHref}>{COMPANY.phone}</a></li>
              <li><Mail /> <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><span className="muted">{BRANCHES.length} branches: Dubai · Abu Dhabi · Sharjah · Al Ain</span></li>
            </ul>
          </div>
        </div>
        <motion.div className="footer-mega" initial={{ y: 80, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease }}>MARIOT</motion.div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <button className="to-top" onClick={toTop}>Back to top <ArrowUp /></button>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <motion.a className="wa-float" href={COMPANY.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, type: 'spring' }} whileHover={{ scale: 1.12 }}>
      <svg viewBox="0 0 24 24" fill="#fff"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3M12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.4-9.8 9.8-9.8 2.6 0 5.1 1 6.9 2.9 1.9 1.9 2.9 4.3 2.9 6.9 0 5.4-4.4 9.8-9.8 9.8m8.4-18.2C18.1 1.3 15.1 0 12 0 5.4 0 .1 5.3.1 11.9c0 2.1.6 4.1 1.6 5.9L0 24l6.3-1.7c1.7.9 3.7 1.4 5.7 1.4 6.6 0 11.9-5.3 11.9-11.9 0-3.2-1.2-6.2-3.5-8.4" /></svg>
    </motion.a>
  );
}

/* Curtain wipe between routes */
export function PageTransition({ children, onSwap }) {
  const { pathname } = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={onSwap}>
      <motion.div key={pathname}>
        <motion.div className="curtain" initial={{ y: '0%' }} animate={{ y: '-100%' }} exit={{ y: ['100%', '0%'] }} transition={{ duration: 0.6, ease }} />
        <motion.div className="curtain two" initial={{ y: '0%' }} animate={{ y: '-100%' }} exit={{ y: '-100%' }} transition={{ duration: 0.8, ease, delay: 0.07 }} />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
