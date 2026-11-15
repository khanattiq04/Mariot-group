import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight, Check, MessageCircle, Award, ShieldCheck, Truck, Ship, Plane, Calculator, ShoppingBag, Star } from 'lucide-react';
import {
  IMG, COMPANY, HERO_WORDS, CLIENTS, STATS, NUMBERS, SECTORS, HUB, WHY, FAB_ITEMS, GCC, BEYOND, EXPORT_STATS,
  MAINT_POINTS, MAINT_STATS, PACKAGES, TESTIMONIALS, TRUST, PROJECTS, BRANDS, ABOUT, u,
} from '../data';
import { SplitText, Reveal, Counter } from '../components/ui';
import { ease, Img, RevealImg, FireIce, SectionHead, Btn, Marquee, StatsRow, FeatureCard, PhotoCard, Testimonials, CTA, BrandLogo } from '../components/blocks';

function Hero() {
  const ref = useRef(null);
  const [w, setW] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.3]);
  const cy = useTransform(scrollYProgress, [0, 1], ['0%', '45%']);
  const op = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  useEffect(() => { const id = setInterval(() => setW((x) => (x + 1) % HERO_WORDS.length), 2600); return () => clearInterval(id); }, []);
  return (
    <section className="hero" ref={ref}>
      <motion.div className="page-hero-bg" style={{ y, scale }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
        <Img src={IMG.hero} alt="Commercial kitchen" zoom={false} className="fill" />
      </motion.div>
      <div className="page-hero-shade hero-shade" />
      <div className="hero-glow r" /><div className="hero-glow b" />
      <FireIce />
      <motion.div className="container hero-content" style={{ y: cy, opacity: op }}>
        <motion.div className="hero-badge" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.5 }}>
          <b>Since {COMPANY.since}</b> Commercial kitchen specialists · UAE &amp; GCC
        </motion.div>
        <h1>
          <SplitText as="span" className="hero-line" lines={['Turnkey kitchen', 'solutions for']} delay={0.6} />
          <span className="hero-rot">
            <AnimatePresence mode="wait">
              <motion.span key={w} className={w % 2 ? 'cold-text' : 'hot-text'} initial={{ y: '100%', opacity: 0, rotateX: -60 }} animate={{ y: '0%', opacity: 1, rotateX: 0 }}
                exit={{ y: '-100%', opacity: 0, rotateX: 60 }} transition={{ duration: 0.6, ease }}>{HERO_WORDS[w]}</motion.span>
            </AnimatePresence>
          </span>
        </h1>
        <div className="hero-bottom">
          <motion.p className="lead" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 1 }}>
            We supply and support commercial kitchen, refrigeration, stainless steel, laundry, and food service projects across UAE and GCC.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease, delay: 1.15 }}>
            <Btn to="/quote">Request free quotation</Btn>
            <Btn to="/projects" variant="ghost">View our projects</Btn>
            <Btn href={COMPANY.whatsapp} variant="ghost" icon={false}><MessageCircle /> WhatsApp us</Btn>
          </motion.div>
        </div>
        <motion.div className="chips hero-chips" initial="h" animate="s" variants={{ s: { transition: { staggerChildren: 0.1, delayChildren: 1.4 } } }}>
          {[[Award, '20+ years experience'], [ShieldCheck, 'Quality guaranteed'], [Truck, 'Fast UAE delivery']].map(([I, t]) => (
            <motion.span className="chip" key={t} variants={{ h: { opacity: 0, y: 16 }, s: { opacity: 1, y: 0 } }}><I />{t}</motion.span>
          ))}
        </motion.div>
      </motion.div>
      <div className="hero-scroll">SCROLL<i /></div>
    </section>
  );
}

function ScrubWord({ children, progress, range }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return <motion.span className="w" style={{ opacity }}>{children}</motion.span>;
}

function Intro() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.5'] });
  const words = ABOUT.story.split(' ');
  return (
    <section className="section">
      <div className="container">
        <div className="about-grid">
          <div>
            <Reveal><span className="eyebrow">Turnkey commercial kitchen solutions</span></Reveal>
            <p className="about-big" ref={ref} style={{ marginTop: 28 }}>
              {words.map((x, i) => <ScrubWord key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>{x}</ScrubWord>)}
            </p>
            <Reveal delay={0.1} style={{ marginTop: 34 }}><Btn to="/about" variant="ghost">About Mariot</Btn></Reveal>
          </div>
          <RevealImg src={IMG.chefLine} alt="Chefs at work on a professional line" ratio="4 / 5" />
        </div>
        <StatsRow items={STATS} />
      </div>
    </section>
  );
}

function SectorsScroll() {
  const ref = useRef(null);
  const [dist, setDist] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  const x = useTransform(smooth, (v) => -v * dist);
  const measure = (el) => {
    if (!el || el._ro) return;
    const calc = () => setDist(Math.max(0, el.scrollWidth - window.innerWidth));
    calc(); el._ro = new ResizeObserver(calc); el._ro.observe(el); addEventListener('resize', calc);
  };
  return (
    <section className="solutions sec-light" ref={ref} style={{ height: `calc(100vh + ${dist}px)` }}>
      <div className="solutions-pin">
        <div className="container">
          <SectionHead eyebrow="Main business categories" lines={['Every sector.', 'One partner.']} accent="partner." text="Complete equipment solutions for every food service segment. Scroll to move through all twelve." />
        </div>
        <motion.div className="solutions-track" ref={measure} style={{ x }}>
          {SECTORS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link to={`/sectors/${s.slug}`} className="sector-card" key={s.slug}>
                <Img src={u(s.img, 800)} alt={s.name} className="fill" />
                <div className="photo-shade" />
                <span className="sector-num">{String(i + 1).padStart(2, '0')}</span>
                <span className="sector-ic"><Icon /></span>
                <div className="photo-body"><h3>{s.name}</h3><p>{s.text}</p><span className="photo-cta">View sector <ArrowUpRight /></span></div>
              </Link>
            );
          })}
          <div className="sol-end"><h3>Not sure where your project fits?</h3><Btn to="/consultation">Book a free consultation</Btn></div>
        </motion.div>
        <div className="solutions-progress"><motion.span style={{ scaleX: smooth }} /></div>
      </div>
    </section>
  );
}

const SIZES = [['Under 40 m²', 30], ['40 – 80 m²', 60], ['80 – 150 m²', 115], ['150 – 300 m²', 225], ['Over 300 m²', 380]];
function Estimator() {
  const [sector, setSector] = useState(0);
  const [size, setSize] = useState(2);
  const [premium, setPremium] = useState(false);
  const mid = SECTORS[sector].rate * SIZES[size][1] * (premium ? 1.45 : 1);
  const lo = Math.round((mid * 0.85) / 1000), hi = Math.round((mid * 1.15) / 1000);
  const fmt = (k) => (k >= 1000 ? `${(k / 1000).toFixed(2)}M` : `${k}K`);
  return (
    <section className="section" id="estimate">
      <div className="container calc-grid">
        <div>
          <SectionHead eyebrow="Instant estimate" lines={['Estimate your', 'kitchen budget']} accent="budget" />
          <Reveal><p className="lead">Get a rough AED range for your commercial kitchen in seconds — then request a precise quotation from our engineers.</p></Reveal>
          <ul className="ticks big">
            {['Ranges based on real UAE project data', 'Covers equipment, install, and fabrication', 'Zero commitment — for planning only'].map((t, i) => (
              <Reveal as="li" key={t} delay={0.1 * i}><Check />{t}</Reveal>
            ))}
          </ul>
        </div>
        <motion.div className="calc" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 1, ease }}>
          <div className="calc-top"><span className="feat-ic"><Calculator /></span><div><strong>Project Cost Calculator</strong><small>Pick sector · size · level</small></div></div>
          <label className="fl" htmlFor="calc-sector">Sector</label>
          <div className="field"><select id="calc-sector" value={sector} onChange={(e) => setSector(+e.target.value)}>{SECTORS.map((s, i) => <option key={s.slug} value={i}>{s.name}</option>)}</select></div>
          <span className="fl">Kitchen size</span>
          <div className="seg">{SIZES.map(([l], i) => (
            <button key={l} className={size === i ? 'on' : ''} onClick={() => setSize(i)}>{size === i && <motion.span layoutId="seg-size" className="seg-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}<b>{l}</b></button>
          ))}</div>
          <span className="fl">Equipment level</span>
          <div className="seg two">{[['Standard', 'Reliable, cost-effective'], ['Premium', 'Top brands, longer warranty']].map(([l, d], i) => (
            <button key={l} className={premium === !!i ? 'on' : ''} onClick={() => setPremium(!!i)}>{premium === !!i && <motion.span layoutId="seg-lvl" className="seg-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}<b>{l}</b><small>{d}</small></button>
          ))}</div>
          <div className="calc-out">
            <small>Estimated budget range</small>
            <AnimatePresence mode="wait">
              <motion.div key={`${lo}-${hi}`} className="calc-num" initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }} transition={{ duration: 0.35 }}>
                {fmt(lo)} – {fmt(hi)} <span>AED</span>
              </motion.div>
            </AnimatePresence>
            <small>For approximately {SIZES[size][1]} m²</small>
          </div>
          <Btn to="/quote">Get exact quotation</Btn>
          <p className="fine">Estimate only. Actual quote depends on brand, layout, MEP, and site conditions.</p>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="marquee-label">Trusted by leading UAE hospitality brands</div>
      <Marquee className="tilted" items={CLIENTS} />
      <Intro />
      <SectorsScroll />

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Mariot Business Hub" lines={['Business solutions for', 'commercial kitchens']} accent="commercial kitchens" text="Request business support, project quotations, procurement assistance, and expert kitchen equipment guidance from Mariot." />
          <div className="grid g4">{HUB.map((h, i) => <PhotoCard key={h.to} {...h} cta={h.cta} i={i} tall />)}</div>
        </div>
      </section>

      <section className="section sec-ink2">
        <div className="container">
          <SectionHead eyebrow="Our work" lines={['Featured projects']} text="A glimpse of our recent turnkey deliveries across the UAE."><Btn to="/projects" variant="ghost">View all projects</Btn></SectionHead>
          <div className="grid g3">{PROJECTS.slice(0, 3).map((p, i) => <PhotoCard key={p.slug} to={`/projects/${p.slug}`} img={p.img} title={p.title} text={`${p.place} · ${p.area}`} tag={SECTORS.find((s) => s.slug === p.sector)?.name} cta="View project" i={i} tall />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Why Mariot" lines={['Your trusted', 'kitchen partner']} accent="partner" text="Two decades of expertise in commercial kitchen equipment across the UAE and GCC." center />
          <div className="grid g4 why-grid">{WHY.map((x, i) => <FeatureCard key={x.title} {...x} i={i} num />)}
            <Reveal className="why-cta"><h3>Serving the UAE's most trusted restaurants, hotels, and food businesses since {COMPANY.since}.</h3><Btn to="/about">Our story</Btn></Reveal>
          </div>
          <StatsRow items={NUMBERS} />
        </div>
      </section>

      <section className="section sec-light">
        <div className="container split">
          <RevealImg src={IMG.welding} alt="Stainless steel welding in our factory" ratio="4 / 5" from="left" />
          <div>
            <SectionHead eyebrow="Own fabrication factory · UAE" lines={["We don't just supply —", 'we manufacture']} accent="manufacture" />
            <Reveal><p className="lead">Custom units built in our own UAE factory to your exact kitchen layout, Grade 304 &amp; 430, precision-welded and finished to hospitality standards.</p></Reveal>
            <Reveal delay={0.1} className="chips">{['Made to Measure', 'In-House Welders', 'Grade 304 & 430', 'Delivery in 10–14 days'].map((c) => <span className="chip" key={c}><Check />{c}</span>)}</Reveal>
            <div className="tag-cloud">{FAB_ITEMS.map((f, i) => (
              <motion.span key={f.name} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i, type: 'spring', stiffness: 200 }} whileHover={{ y: -4, scale: 1.05 }}>{f.name}</motion.span>
            ))}</div>
            <Reveal delay={0.2} className="hero-actions"><Btn to="/fabrication">Explore fabrication</Btn><Btn to="/quote" variant="ghost">Send your drawings</Btn></Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Global export · Serving the GCC" lines={['Headquartered in the UAE.', 'Delivering worldwide.']} accent="worldwide." text="We supply commercial kitchen equipment across all six GCC countries and export to selected markets in the Middle East, Africa and Asia — with logistics tuned for hospitality timelines." />
          <div className="export-grid">
            <div>
              <Reveal className="chips">{[[Truck, 'Land Freight'], [Ship, 'Sea Freight'], [Plane, 'Air Freight']].map(([I, t]) => <span className="chip" key={t}><I />{t}</span>)}</Reveal>
              <div className="flags">{GCC.map((g, i) => (
                <motion.div className="flag" key={g.name} initial={{ opacity: 0, y: 30, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.07 * i, duration: 0.6, ease }} whileHover={{ y: -6 }}>
                  <span className="flag-e">{g.flag}</span><strong>{g.name}</strong><small>{g.note}</small>
                </motion.div>
              ))}</div>
              <Reveal><p className="fl" style={{ marginTop: 26 }}>Beyond the GCC</p></Reveal>
              <div className="tag-cloud dark">{BEYOND.map((b, i) => <motion.span key={b} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * i }}>{b}</motion.span>)}</div>
            </div>
            <div className="export-side">
              <RevealImg src={IMG.warehouse} alt="Warehouse and logistics" ratio="16 / 10" from="right" />
              <StatsRow items={EXPORT_STATS} />
              <div className="hero-actions"><Btn to="/quote">Request export quote</Btn><Btn href={COMPANY.whatsapp} variant="ghost">Talk to export team</Btn></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sec-ink2">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Professional maintenance · UAE" lines={['Keep your kitchen running']} accent="running" />
            <Reveal><p className="lead">Reduce downtime by up to 75%. A dedicated in-house maintenance team, preventive service plans, spare-parts warehouse, and 24/7 emergency call-outs for hotels, restaurants and multi-outlet operators.</p></Reveal>
            <ul className="ticks big cols">{MAINT_POINTS.map((t, i) => <Reveal as="li" key={t} delay={0.06 * i}><Check />{t}</Reveal>)}</ul>
            <Reveal className="hero-actions"><Btn to="/maintenance">Explore maintenance plans</Btn><Btn to="/maintenance#plans" variant="ghost">See pricing</Btn></Reveal>
          </div>
          <div className="big-stats">{MAINT_STATS.map((s, i) => (
            <motion.div className="big-stat" key={s.k} initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 0.9, ease, delay: i * 0.12 }}>
              <div className="big-num"><Counter to={s.value} /><span className={i % 2 ? 'blue' : 'red'}>{s.suffix}</span></div>
              <p>{s.label}</p>
              <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: s.value / 100 }} viewport={{ once: true }} transition={{ duration: 1.4, ease, delay: 0.3 + i * 0.12 }} />
            </motion.div>
          ))}</div>
        </div>
      </section>

      <Estimator />

      <section className="section sec-light">
        <div className="container">
          <SectionHead eyebrow="Turnkey solutions" lines={['Packages & offers']} accent="offers" text="Tailored equipment packages for new projects and startups." />
          <div className="grid g5">{PACKAGES.map((p, i) => <PhotoCard key={p.name} to="/quote" img={p.img} title={p.name} text={p.text} cta="Request package" i={i} tall />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Client testimonials" lines={['What our partners say']} accent="partners" text="Proud to be trusted by hundreds of hotels, restaurants and hospitality venues across the UAE and the Gulf." />
          <Testimonials items={TESTIMONIALS} />
          <div className="trust">{TRUST.map((t, i) => <Reveal key={t.l} delay={i * 0.1}><b>{t.v}{t.l === 'Average rating' && <Star />}</b><small>{t.l}</small></Reveal>)}</div>
        </div>
      </section>

      <section className="section sec-light brands-sec">
        <div className="container">
          <SectionHead eyebrow="Shop by brand" lines={['Trusted global brands']} accent="brands" text="We partner with the world's leading manufacturers."><Btn to="/brands" variant="ghost">View all brands</Btn></SectionHead>
        </div>
        {[0, 1].map((r) => (
          <div className={`logo-row ${r ? 'rev' : ''}`} key={r}>
            <div className="logo-track">{[...BRANDS.slice(r * 30, r * 30 + 30), ...BRANDS.slice(r * 30, r * 30 + 30)].map((b, i) => <Link to={`/brands/${b.slug}`} className="brand-tile" key={i}><BrandLogo brand={b} /></Link>)}</div>
          </div>
        ))}
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="store-band" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 1, ease }}>
            <Img src={IMG.store} alt="" className="fill" />
            <div className="photo-shade side" />
            <div className="store-in">
              <span className="eyebrow">Online store</span>
              <h2 className="h-2">Shop kitchen equipment online</h2>
              <p className="lead">Fast delivery across the UAE. Browse our full catalogue of ready-to-order commercial kitchen equipment, spare parts and accessories.</p>
              <div className="chips">{['Fast UAE delivery', 'Original brands', 'Secure checkout'].map((c) => <span className="chip" key={c}><Check />{c}</span>)}</div>
              <Btn href={COMPANY.store} icon={false}><ShoppingBag /> Shop now · mariotstore.com</Btn>
            </div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </>
  );
}
