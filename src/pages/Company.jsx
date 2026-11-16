import { useRef, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Check, Eye, Target, MapPin, Phone, Mail, MessageCircle, Search, PenLine } from 'lucide-react';
import { IMG, COMPANY, ABOUT, SECTORS, STATS, STEPS, PROJECTS, BRANDS, BRAND_CATS, BRANCHES, CLIENTS, u } from '../data';
import { SplitText, Reveal } from '../components/ui';
import { ease, Img, RevealImg, PageHero, SectionHead, Btn, Marquee, StatsRow, FeatureCard, PhotoCard, CTA, BrandLogo } from '../components/blocks';

/* ---------------- About ---------------- */
export function About() {
  return (
    <>
      <PageHero eyebrow="About Mariot" title="Kitchens that perform, since 2004" accent="perform," text={ABOUT.intro} img={IMG.about}>
        <Btn to="/projects">See our projects</Btn><Btn to="/contact" variant="ghost">Talk to us</Btn>
      </PageHero>
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Our story" lines={['Two decades of', 'building kitchens']} accent="kitchens" />
            <Reveal><p className="lead">{ABOUT.story}</p></Reveal>
            <Reveal delay={0.1}><p className="lead" style={{ marginTop: 16 }}>Today we work from showrooms in Dubai, Sharjah, Abu Dhabi and Al Ain, plus a showroom in Damascus, Syria, with our own stainless steel factory and a warehouse holding stock for immediate delivery.</p></Reveal>
          </div>
          <RevealImg src={IMG.chef} alt="Chef plating in a professional kitchen" ratio="4 / 5" from="right" />
        </div>
        <div className="container"><StatsRow items={STATS} /></div>
      </section>

      <section className="section sec-light">
        <div className="container grid g2">
          {[[Eye, 'Our Vision', ABOUT.vision, 'r'], [Target, 'Our Mission', ABOUT.mission, 'b']].map(([I, t, x, c], i) => (
            <motion.div className={`vm vm-${c}`} key={t} initial={{ opacity: 0, y: 70, rotate: i ? 2 : -2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: '0px 0px -10% 0px' }} transition={{ duration: 1, ease, delay: i * 0.12 }} whileHover={{ y: -8 }}>
              <span className="vm-ic"><I /></span><h3>{t}</h3><p>{x}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <RevealImg src={IMG.kitchen2} alt="Stainless steel commercial kitchen" ratio="1 / 1" from="left" />
          <div>
            <SectionHead eyebrow="What we do" lines={['Supply, build', 'and support']} accent="support" />
            <ul className="lines">{ABOUT.whatWeDo.map((t, i) => (
              <motion.li key={t} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '0px 0px -6% 0px' }} transition={{ duration: 0.7, ease, delay: i * 0.07 }}>
                <span>{String(i + 1).padStart(2, '0')}</span>{t}
              </motion.li>
            ))}</ul>
          </div>
        </div>
      </section>

      <section className="section sec-ink2">
        <div className="container">
          <SectionHead eyebrow="Our strengths" lines={['Why clients stay', 'with Mariot']} accent="Mariot" center />
          <div className="grid g4">{ABOUT.strengths.map((s, i) => <FeatureCard key={s.t} icon={s.icon} title={s.t} i={i} />)}</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Target sectors" lines={['Who we build for']} text="Twelve food service segments, each with its own workflow, equipment and compliance needs." />
          <div className="sector-pills">{SECTORS.map((s, i) => {
            const I = s.icon;
            return (
              <motion.div key={s.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.04 * i, duration: 0.6, ease }}>
                <Link to={`/sectors/${s.slug}`} className="sector-pill"><I />{s.name}<ArrowUpRight /></Link>
              </motion.div>
            );
          })}</div>
        </div>
      </section>
      <Marquee items={CLIENTS} className="dark" />
      <CTA />
    </>
  );
}

/* ---------------- How We Work ---------------- */
export function HowWeWork() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.55', 'end 0.55'] });
  const fill = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => setActive(Math.min(STEPS.length - 1, Math.floor(v * STEPS.length + 0.1))));
  return (
    <>
      <PageHero eyebrow="Our methodology" title="From concept to hand-over" accent="hand-over" text="An 11-step proven methodology to deliver kitchens that perform." img={IMG.team} badges={['11 clear steps', 'One accountable team', 'Design to maintenance']} />
      <section className="section">
        <div className="container">
          <div className="timeline" ref={ref}>
            <div className="tl-rail"><motion.span style={{ scaleY: fill }} /></div>
            {STEPS.map((s, i) => (
              <div className={`tl-row ${i % 2 ? 'flip' : ''} ${i <= active ? 'active' : ''}`} key={s.title}>
                <motion.div className="tl-text" initial={{ opacity: 0, x: i % 2 ? 70 : -70 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: '0px 0px -15% 0px' }} transition={{ duration: 0.9, ease }}>
                  <span className="step-num">STEP {String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3><p>{s.text}</p>
                </motion.div>
                <div className="tl-dot">{String(i + 1).padStart(2, '0')}</div>
                <RevealImg src={u(s.img, 800)} alt={s.title} ratio="16 / 10" from={i % 2 ? 'left' : 'right'} className="tl-img" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA eyebrow="Ready to start your project?" title="Let's take the first step together" text="Book a free consultation or request a quotation. A specialist will respond within hours." />
    </>
  );
}

/* ---------------- Sectors ---------------- */
export function Sectors() {
  return (
    <>
      <PageHero eyebrow="Sectors we serve" title="Sector expertise across every food-service project type" accent="expertise" text="Each sector has its own dedicated page with our past work and tailored solutions." img={IMG.dining} />
      <section className="section">
        <div className="container"><div className="grid g3">{SECTORS.map((s, i) => <PhotoCard key={s.slug} to={`/sectors/${s.slug}`} img={s.img} title={s.name} text={s.text} cta="View sector" tag={String(i + 1).padStart(2, '0')} i={i} tall />)}</div></div>
      </section>
      <CTA />
    </>
  );
}

export function SectorDetail() {
  const { slug } = useParams();
  const idx = SECTORS.findIndex((x) => x.slug === slug);
  if (idx < 0) return <NotFound />;
  const s = SECTORS[idx];
  const next = SECTORS[(idx + 1) % SECTORS.length];
  const projects = PROJECTS.filter((p) => p.sector === s.slug);
  return (
    <>
      <PageHero eyebrow={`Sector · ${String(idx + 1).padStart(2, '0')} / ${SECTORS.length}`} title={s.name} accent={s.name} text={s.text} img={u(s.img, 1800)}>
        <Btn to="/quote">Request a quotation</Btn><Btn to="/consultation" variant="ghost">Book a site visit</Btn>
      </PageHero>
      <section className="section">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Our approach" lines={[`Built for ${s.name.toLowerCase()}`]} />
            <Reveal><p className="lead">{s.long}</p></Reveal>
            <Reveal delay={0.1} className="hero-actions"><Btn to="/design" variant="ghost">How we design</Btn></Reveal>
          </div>
          <div>
            <Reveal><span className="eyebrow">What we deliver</span></Reveal>
            <ul className="lines">{s.items.map((t, i) => (
              <motion.li key={t} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: i * 0.07 }}><span>{String(i + 1).padStart(2, '0')}</span>{t}</motion.li>
            ))}</ul>
          </div>
        </div>
      </section>
      {projects.length > 0 && (
        <section className="section sec-ink2">
          <div className="container">
            <SectionHead eyebrow="Past work" lines={[`${s.name} projects`]} />
            <div className="grid g3">{projects.map((p, i) => <PhotoCard key={p.slug} to={`/projects/${p.slug}`} img={p.img} title={p.title} text={`${p.place} · ${p.area}`} cta="View project" i={i} tall />)}</div>
          </div>
        </section>
      )}
      <NextLink to={`/sectors/${next.slug}`} label="Next sector" title={next.name} img={u(next.img, 1600)} />
      <CTA />
    </>
  );
}

function NextLink({ to, label, title, img }) {
  return (
    <Link to={to} className="next-link">
      <Img src={img} alt="" className="fill" />
      <div className="photo-shade full" />
      <div className="container"><span className="eyebrow">{label}</span><h2 className="h-display">{title} <ArrowUpRight /></h2></div>
    </Link>
  );
}

/* ---------------- Projects ---------------- */
export function Projects() {
  const [params, setParams] = useSearchParams();
  const cat = params.get('category') || 'all';
  const list = cat === 'all' ? PROJECTS : PROJECTS.filter((p) => p.sector === cat);
  return (
    <>
      <PageHero eyebrow="Our projects" title="Selected turn-key deliveries across the UAE" accent="turn-key" text="Kitchens we designed, fabricated, supplied and commissioned — filter by sector to find work like yours." img={IMG.kitchen} />
      <section className="section">
        <div className="container">
          <div className="filters">
            {[{ slug: 'all', name: 'All' }, ...SECTORS].map((s) => (
              <button key={s.slug} className={cat === s.slug ? 'on' : ''} onClick={() => setParams(s.slug === 'all' ? {} : { category: s.slug }, { preventScrollReset: true })}>
                {cat === s.slug && <motion.span layoutId="filter-bg" className="seg-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}<b>{s.name}</b>
              </button>
            ))}
          </div>
          <motion.div layout className="grid g3">
            <AnimatePresence mode="popLayout">
              {list.map((p) => (
                <motion.div layout key={p.slug} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.45, ease }}>
                  <Link to={`/projects/${p.slug}`} className="photo-card tall">
                    <Img src={u(p.img, 900)} alt={p.title} className="fill" /><div className="photo-shade" />
                    <span className="photo-tag">{SECTORS.find((s) => s.slug === p.sector)?.name}</span>
                    <div className="photo-body"><h3>{p.title}</h3><p>{p.place} · {p.area}</p><span className="photo-cta">View project <ArrowUpRight /></span></div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && (
            <Reveal className="empty"><h3>Projects in this sector are being added.</h3><p>Ask us for references and photos from similar jobs.</p><Btn to="/contact">Request references</Btn></Reveal>
          )}
        </div>
      </section>
      <CTA />
    </>
  );
}

export function ProjectDetail() {
  const { slug } = useParams();
  const idx = PROJECTS.findIndex((x) => x.slug === slug);
  if (idx < 0) return <NotFound />;
  const p = PROJECTS[idx];
  const sector = SECTORS.find((s) => s.slug === p.sector);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <>
      <PageHero eyebrow={`Project · ${sector.name}`} title={p.title} text={p.text} img={u(p.img, 1800)}>
        <Btn to="/projects" variant="ghost" icon={false}><ArrowLeft /> Back to all projects</Btn>
      </PageHero>
      <section className="section">
        <div className="container split">
          <div>
            <div className="facts">{[['Sector', sector.name], ['Location', p.place], ['Kitchen area', p.area], ['Scope', p.scope]].map(([k, v], i) => (
              <motion.div key={k} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.7, ease }}><small>{k}</small><strong>{v}</strong></motion.div>
            ))}</div>
            <Reveal><span className="eyebrow" style={{ marginTop: 40 }}>Equipment scope</span></Reveal>
            <ul className="ticks big">{sector.items.map((t, i) => <Reveal as="li" key={t} delay={i * 0.05}><Check />{t}</Reveal>)}</ul>
          </div>
          <div className="stack-imgs">
            <RevealImg src={u(p.img, 1200)} alt={p.title} ratio="4 / 3" from="right" />
            <RevealImg src={IMG.kitchen2} alt="Kitchen detail" ratio="16 / 9" from="bottom" />
          </div>
        </div>
      </section>
      <section className="section sec-light">
        <div className="container center-box">
          <SectionHead eyebrow="Like what you see?" lines={['Request a similar project']} accent="similar" center />
          <Reveal><p className="lead">Get a customized quotation based on this project's specifications.</p></Reveal>
          <Reveal delay={0.1} className="hero-actions"><Btn to="/quote">Request a similar project</Btn><Btn href={COMPANY.whatsapp} variant="ghost" icon={false}><MessageCircle /> WhatsApp</Btn></Reveal>
        </div>
      </section>
      <NextLink to={`/projects/${next.slug}`} label="Next project" title={next.title} img={u(next.img, 1600)} />
    </>
  );
}

/* ---------------- Brands ---------------- */
export function Brands() {
  const [cat, setCat] = useState('All');
  const [q, setQ] = useState('');
  const list = BRANDS.filter((b) => (cat === 'All' || b.cats.includes(cat)) && b.name.toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageHero eyebrow="Shop by brand" title={`${BRANDS.length} trusted global brands`} accent={String(BRANDS.length)} text="We partner with the world's leading manufacturers of cooking, refrigeration, coffee, bakery and food processing equipment." img={IMG.kitchen2} />
      <section className="section sec-light">
        <div className="container">
          <div className="brand-tools">
            <div className="filters light">{BRAND_CATS.map((c) => (
              <button key={c} className={cat === c ? 'on' : ''} onClick={() => setCat(c)}>{cat === c && <motion.span layoutId="brand-bg" className="seg-bg" transition={{ type: 'spring', stiffness: 400, damping: 32 }} />}<b>{c}</b></button>
            ))}</div>
            <label className="search" htmlFor="brand-q"><Search /><input id="brand-q" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search brands" /></label>
          </div>
          <p className="count"><b>{list.length}</b> brands</p>
          <motion.div layout className="brand-grid">
            <AnimatePresence mode="popLayout">
              {list.map((b) => (
                <motion.div layout key={b.slug} initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.7 }} transition={{ duration: 0.35, ease }}>
                  <Link to={`/brands/${b.slug}`} className="brand-tile big"><BrandLogo brand={b} /><span>{b.name}</span></Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          {list.length === 0 && <div className="empty light"><h3>No brand matches “{q}”.</h3><p>Clear the search or pick another category.</p></div>}
        </div>
      </section>
      <CTA eyebrow="Looking for a specific model?" title="Tell us the brand and model you need" text="We quote original equipment with manufacturer warranty, delivery and installation." />
    </>
  );
}

export function BrandDetail() {
  const { slug } = useParams();
  const b = BRANDS.find((x) => x.slug === slug);
  if (!b) return <NotFound />;
  const related = BRANDS.filter((x) => x.slug !== b.slug && x.cats.some((c) => b.cats.includes(c))).slice(0, 12);
  return (
    <>
      <PageHero eyebrow="Brand" title={b.name} text={`Original ${b.name} equipment supplied, installed and supported by Mariot across the UAE and GCC.`} img={IMG.kitchen}>
        <Btn to="/brands" variant="ghost" icon={false}><ArrowLeft /> Back to all brands</Btn><Btn to="/quote">Request quotation</Btn>
      </PageHero>
      <section className="section sec-light">
        <div className="container split">
          <motion.div className="brand-hero-logo" initial={{ opacity: 0, scale: 0.8, rotate: -4 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease }}><BrandLogo brand={b} /></motion.div>
          <div>
            <SectionHead eyebrow="Product categories" lines={[`${b.name} at Mariot`]} />
            <Reveal className="chips">{(b.cats.length ? b.cats : ['Available on request']).map((c) => <span className="chip" key={c}><Check />{c}</span>)}</Reveal>
            <Reveal delay={0.1}><p className="lead" style={{ marginTop: 22 }}>Ask for current models, pricing and stock. We supply with manufacturer warranty, delivery, installation and after-sales service.</p></Reveal>
            <Reveal delay={0.2} className="hero-actions"><Btn to="/quote">Request quotation</Btn><Btn href={COMPANY.store} variant="ghost">Shop online</Btn></Reveal>
          </div>
        </div>
        {related.length > 0 && (
          <div className="container" style={{ marginTop: 80 }}>
            <Reveal><span className="eyebrow">Related brands</span></Reveal>
            <div className="brand-grid" style={{ marginTop: 24 }}>{related.map((r, i) => (
              <motion.div key={r.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04, duration: 0.5, ease }}>
                <Link to={`/brands/${r.slug}`} className="brand-tile big"><BrandLogo brand={r} /><span>{r.name}</span></Link>
              </motion.div>
            ))}</div>
          </div>
        )}
      </section>
      <CTA />
    </>
  );
}

/* ---------------- Branches ---------------- */
export function Branches() {
  return (
    <>
      <PageHero eyebrow="Our branches" title={`${BRANCHES.length} locations across the UAE and Syria`} accent={String(BRANCHES.length)} text="Whether you are planning a new restaurant, hotel, bakery, supermarket, café, or commercial kitchen, our experienced team is ready to provide expert guidance, premium equipment, installation services, and reliable after-sales support." img={u('1512453979798-5ea266f8880c', 1800)} />
      <section className="section sec-light">
        <div className="container">
          <SectionHead eyebrow="Visit a showroom" lines={['Find your nearest', 'Mariot branch']} accent="Mariot" text="Explore our complete range of commercial kitchen equipment from world-renowned brands and discuss your project with our specialists." />
          <div className="br-list">{BRANCHES.map((b, i) => (
            <motion.div className="branch" key={b.name + b.tag} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.8, ease, delay: i * 0.06 }}>
              <span className="br-idx">{String(i + 1).padStart(2, '0')}</span>
              <div><span className="br-city">{b.name}</span><span className="br-tag">{b.tag}</span></div>
              <div className="branch-info">
                <span><MapPin />{b.area}</span>
                {b.phone ? <a href={`tel:${b.phone.replace(/\s/g, '')}`}><Phone />{b.phone}</a> : <a href={COMPANY.phoneHref}><Phone />{COMPANY.phone} <em>main line</em></a>}
                {b.email && <a href={`mailto:${b.email}`}><Mail />{b.email}</a>}
              </div>
              <a className="branch-go" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Mariot Kitchen Equipment ' + b.area)}`} target="_blank" rel="noreferrer" aria-label={`Directions to ${b.name} ${b.tag}`}><ArrowUpRight /></a>
            </motion.div>
          ))}</div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <RevealImg src={IMG.kitchen2} alt="Showroom equipment" ratio="4 / 3" from="left" />
          <div>
            <SectionHead eyebrow="Why visit a Mariot branch?" lines={['See it, test it,', 'plan it']} accent="plan it" />
            <Reveal><p className="lead">Our branches provide product demonstrations, project consultation, equipment recommendations, installation planning, and technical support. Whether you are upgrading an existing kitchen or launching a new hospitality project, our experts are available to help you select the ideal commercial kitchen solutions for your business.</p></Reveal>
            <ul className="ticks big cols">{['Product demonstrations', 'Project consultation', 'Equipment recommendations', 'Installation planning', 'Technical support', 'Spare parts'].map((t, i) => <Reveal as="li" key={t} delay={i * 0.05}><Check />{t}</Reveal>)}</ul>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}

/* ---------------- Blog ---------------- */
export function Blog() {
  const topics = ['Choosing a combi oven for your menu', 'Cold room sizing for restaurants', 'Grade 304 vs 430 stainless steel', 'Planning a cloud kitchen pod', 'Preventive maintenance checklists', 'Opening a café in the UAE'];
  return (
    <>
      <PageHero eyebrow="Blog" title="Insights & guides" accent="guides" text="Expert advice on kitchen equipment, project planning and maintenance." img={IMG.blueprint} />
      <section className="section">
        <div className="container">
          <Reveal className="empty"><span className="feat-ic"><PenLine /></span><h3>No articles yet.</h3><p>Our team is writing the first guides. These topics are coming up:</p></Reveal>
          <div className="grid g3" style={{ marginTop: 40 }}>{topics.map((t, i) => (
            <motion.div className="soon" key={t} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.08, duration: 0.7, ease }} whileHover={{ y: -6 }}>
              <span className="photo-tag static">Coming soon</span><h3>{t}</h3>
            </motion.div>
          ))}</div>
        </div>
      </section>
      <CTA eyebrow="Have a question now?" title="Ask our specialists directly" text="You don't need to wait for an article. Send us your question and an engineer will answer." />
    </>
  );
}

export function NotFound() {
  return (
    <section className="page-hero nf">
      <div className="container page-hero-in">
        <span className="eyebrow">Error 404</span>
        <SplitText as="h1" className="h-display" lines={['This page is', 'off the menu.']} wordClass={(w) => (w === 'menu.' ? 'grad-text' : '')} />
        <p className="lead">The page you tried to open does not exist or has moved.</p>
        <div className="hero-actions"><Btn to="/">Back to home</Btn><Btn to="/contact" variant="ghost">Contact us</Btn></div>
      </div>
    </section>
  );
}
