import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Check, MessageCircle, Phone, Mail, Rotate3d, Footprints, Siren, Clock, MapPin } from 'lucide-react';
import {
  IMG, COMPANY, SECTORS, EMIRATES, BRANCHES, HUB, FAB_ITEMS, FAB_SPECS, MAINT_STATS, MAINT_FEATURES, PLANS, MAINT_NUMBERS, MAINT_TESTIMONIALS,
  DESIGN, ACCOUNT_BENEFITS, OPENING_PILLARS, URGENT_SLA, URGENT_CASES, u,
} from '../data';
import { Reveal, Counter } from '../components/ui';
import { ease, RevealImg, PageHero, SectionHead, Btn, StatsRow, FeatureCard, PhotoCard, Accordion, Testimonials, CTA, EnquiryForm } from '../components/blocks';

const sectorNames = SECTORS.map((s) => s.name);
const CONTACT_FIELDS = [
  { name: 'name', label: 'Your name', required: true, half: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
  { name: 'email', label: 'Email', type: 'email', half: true },
  { name: 'emirate', label: 'Emirate', type: 'select', options: EMIRATES, half: true },
];
const QUOTE_FIELDS = [
  { name: 'name', label: 'Full name', required: true, half: true },
  { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
  { name: 'type', label: 'Project type', type: 'select', options: sectorNames, half: true },
  { name: 'emirate', label: 'Emirate', type: 'select', options: EMIRATES, half: true },
  { name: 'description', label: 'Project description', type: 'textarea', required: true },
  { type: 'heading', label: 'Optional' },
  { name: 'company', label: 'Company name', half: true },
  { name: 'email', label: 'Email address', type: 'email', half: true },
  { name: 'budget', label: 'Approximate budget (AED)', half: true },
  { name: 'start', label: 'Expected start date', type: 'select', options: ['Not sure yet', 'Immediately', 'Within 1 month', 'Within 3 months', 'Within 6 months'], half: true },
  { name: 'website', label: 'Company website', half: true },
  { name: 'method', label: 'Preferred contact method', type: 'select', options: ['WhatsApp', 'Phone Call', 'Email'], half: true },
];

function FormSection({ eyebrow, lines, accent, text, children, aside }) {
  return (
    <section className="section" id="form">
      <div className="container form-split">
        <div className="form-aside">
          <SectionHead eyebrow={eyebrow} lines={lines} accent={accent} />
          <Reveal><p className="lead">{text}</p></Reveal>
          {aside}
          <div className="contact-items">
            {[[MessageCircle, 'WhatsApp', COMPANY.phone, COMPANY.whatsapp], [Phone, 'Call us', COMPANY.phone, COMPANY.phoneHref], [Mail, 'Email', COMPANY.email, `mailto:${COMPANY.email}`]].map(([I, l, v, h], i) => (
              <Reveal key={l} delay={0.1 + i * 0.07}><a className="contact-item" href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer"><span className="ic"><I /></span><span><small>{l}</small><strong>{v}</strong></span></a></Reveal>
            ))}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

/* ---------------- Design Your Project ---------------- */
export function Design() {
  return (
    <>
      <PageHero eyebrow="Commercial kitchen planning & design" title="From concept to a fully operational kitchen" accent="operational" text="3D design, precise engineering drawings, and world-class brands — our team is with you from the first sketch to the first plate." img={IMG.design} badges={['Free first consultation', '3D Design', 'Install & Warranty']}>
        <Btn to="/design#form">Start your consultation</Btn><Btn href={COMPANY.whatsapp} variant="ghost">Talk to an expert</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="From paper to reality" lines={['We plan, design,', 'execute']} accent="execute" text="Precise engineering drawings, realistic 3D models, then a complete kitchen delivered." />
          <div className="grid g3">{DESIGN.phases.map((p, i) => <FeatureCard key={p.title} {...p} i={i} num />)}</div>
        </div>
      </section>

      <section className="section sec-ink2">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Interactive 3D preview" lines={['Explore a real kitchen', 'in live 3D']} accent="3D" />
            <Reveal><p className="lead">Free rotation around the layout, or walk through the equipment. An immersive engineering experience built on a real model.</p></Reveal>
            <div className="modes">{[[Rotate3d, 'Overview Mode', 'Orbit · Zoom · Inspect'], [Footprints, 'Walkthrough Mode', 'First-person tour']].map(([I, t, d], i) => (
              <Reveal key={t} delay={i * 0.1} className="mode"><span className="feat-ic"><I /></span><span><strong>{t}</strong><small>{d}</small></span></Reveal>
            ))}</div>
            <Reveal delay={0.2} className="hero-actions"><Btn to="/consultation">Request a 3D layout of your space</Btn></Reveal>
          </div>
          <Kitchen3D />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="How we work" lines={['Five steps to your', 'ideal kitchen']} accent="ideal" />
          <div className="five">{DESIGN.steps.map((s, i) => (
            <motion.div className="five-step" key={s.title} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.8, ease, delay: i * 0.1 }} whileHover={{ y: -8 }}>
              <span className="five-n">{i + 1}</span><h3>{s.title}</h3><p>{s.text}</p>
            </motion.div>
          ))}</div>
        </div>
      </section>

      <section className="section sec-light">
        <div className="container split">
          <div>
            <SectionHead eyebrow="Why Mariot" lines={["A standard competitors", "can't match"]} accent="match" />
            <Reveal><p className="lead">Design, authorized supply and professional installation — all under one roof, from the first sketch to the first plate.</p></Reveal>
            <RevealImg src={IMG.blueprint} alt="Engineering drawings" ratio="16 / 10" from="left" className="mt" />
          </div>
          <div className="grid g2 tight">{DESIGN.why.map((w, i) => <FeatureCard key={w.title} {...w} i={i} />)}</div>
        </div>
      </section>

      <FormSection eyebrow="Start now" lines={['Request a consultation', 'and plan your project']} accent="plan" text="Tell us about your project and a planning expert will contact you within 24 business hours.">
        <EnquiryForm subject="Design consultation request" submit="Send consultation request" note="Your data is only used to contact you about your project." fields={[
          { name: 'type', label: 'Project type', type: 'select', options: sectorNames, half: true },
          { name: 'name', label: 'Full name', required: true, half: true },
          { name: 'company', label: 'Company / brand name', half: true },
          { name: 'phone', label: 'Phone number', type: 'tel', required: true, half: true },
          { name: 'email', label: 'Email address', type: 'email', half: true },
          { name: 'city', label: 'City / Emirate', type: 'select', options: EMIRATES, half: true },
          { name: 'area', label: 'Approximate area (m²)', half: true },
          { name: 'budget', label: 'Estimated budget', type: 'select', options: ['Under 50,000 AED', '50,000 – 150,000 AED', '150,000 – 500,000 AED', 'Over 500,000 AED'], value: '50,000 – 150,000 AED', half: true },
          { name: 'time', label: 'Timeframe', type: 'select', options: ['As soon as possible', '1 – 3 months', '3 – 6 months', 'Planning phase'], value: '1 – 3 months' },
          { name: 'details', label: 'Additional project details', type: 'textarea' },
        ]} />
      </FormSection>

      <section className="section sec-ink2">
        <div className="container faq-split">
          <SectionHead eyebrow="FAQ" lines={['Quick answers']} accent="answers" />
          <Accordion items={DESIGN.faq} />
        </div>
      </section>
      <CTA eyebrow="Start free now" title="Ready to build your dream kitchen?" text="Free first consultation and a preliminary layout, no obligation." />
    </>
  );
}

/* CSS-3D isometric kitchen that rotates with drag / scroll */
function Kitchen3D() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rot = useTransform(scrollYProgress, [0, 1], [-70, 20]);
  const blocks = [
    ['Cooking suite', 8, 10, 46, 16, 30, 'hot'], ['Hood', 8, 10, 46, 16, 8, 'hood'], ['Prep', 8, 42, 30, 14, 22, ''], ['Pass', 62, 10, 30, 12, 22, ''],
    ['Cold room', 62, 54, 30, 36, 46, 'cold'], ['Dishwash', 8, 72, 34, 16, 24, ''], ['Fridge', 46, 42, 10, 14, 40, 'cold'],
  ];
  return (
    <div className="k3d" ref={ref}>
      <span className="photo-tag static live"><i /> Live preview</span>
      <motion.div className="k3d-floor" style={{ rotateZ: rot }} drag="x" dragConstraints={{ left: 0, right: 0 }} dragElastic={0.4}>
        {blocks.map(([n, x, y, w, d, h, c], i) => (
          <motion.div key={n + i} className={`k3d-b ${c}`} style={{ left: `${x}%`, top: `${y}%`, width: `${w}%`, height: `${d}%`, '--h': `${h * 2}px`, '--z': c === 'hood' ? '110px' : '0px' }}
            initial={{ opacity: 0, z: 200 }} whileInView={{ opacity: 1, z: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: 0.2 + i * 0.12 }}>
            <span className="top">{n}</span><span className="s1" /><span className="s2" />
          </motion.div>
        ))}
      </motion.div>
      <small>Scroll or drag to rotate the layout</small>
    </div>
  );
}

/* ---------------- Fabrication ---------------- */
export function Fabrication() {
  return (
    <>
      <PageHero eyebrow="Own fabrication factory · UAE" title="We manufacture custom stainless steel" accent="stainless steel" text="Custom units built in our own UAE factory to your exact kitchen layout, Grade 304 & 430, precision-welded and finished to hospitality standards." img={IMG.welding} badges={['Made to Measure', 'In-House Welders', 'Grade 304 & 430']}>
        <Btn to="/quote">Send your drawings</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Real fabrication" lines={['Built for', 'real kitchens']} accent="real" text="Every unit is drawn, welded, polished and delivered by our own team." />
          <div className="grid g4">{FAB_ITEMS.map((f, i) => <PhotoCard key={f.name} to="/quote" img={f.img} title={f.name} tag="Custom build" cta="Request this" i={i} />)}</div>
        </div>
      </section>
      <section className="section sec-light">
        <div className="container">
          <div className="specs">{FAB_SPECS.map((s, i) => (
            <motion.div className="spec" key={s.k} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.9, ease, delay: i * 0.12 }}>
              <small>{s.k}</small><h3>{s.v}</h3><p>{s.t}</p>
              <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease, delay: 0.3 + i * 0.12 }} />
            </motion.div>
          ))}</div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <RevealImg src={IMG.kitchen} alt="Finished stainless steel kitchen" ratio="4 / 3" from="left" />
          <div>
            <SectionHead eyebrow="Our factory" lines={['Every seam, every corner —', 'built by our own team']} accent="own team" />
            <ul className="lines">{['Share your drawings, sketch or site measurements', 'We prepare shop drawings for your approval', 'Cutting, bending and TIG welding in our factory', 'Polishing, quality check and protective wrapping', 'Delivery and installation in 10–14 days'].map((t, i) => (
              <motion.li key={t} initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease, delay: i * 0.07 }}><span>{String(i + 1).padStart(2, '0')}</span>{t}</motion.li>
            ))}</ul>
          </div>
        </div>
      </section>
      <CTA eyebrow="Made to measure" title="Send your drawings for a fabrication quote" text="Upload or WhatsApp your layout and our factory team will price it within one working day." />
    </>
  );
}

/* ---------------- Maintenance ---------------- */
export function Maintenance() {
  return (
    <>
      <PageHero eyebrow="Maintenance & service plans" title="Professional maintenance that keeps your kitchen running" accent="running" text="In-house technicians, preventive service plans, genuine spare parts, and a smart portal to track every service call and every asset in real time." img={IMG.technician}>
        <Btn to="/maintenance#plans">See plans & pricing</Btn><Btn to="/maintenance#form" variant="ghost">Request free site audit</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="big-stats row">{MAINT_STATS.map((s, i) => (
            <motion.div className="big-stat" key={s.k} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease, delay: i * 0.12 }}>
              <small className="fl">{s.k}</small>
              <div className="big-num"><Counter to={s.value} /><span className={i % 2 ? 'blue' : 'red'}>{s.suffix}</span></div>
              <p>{s.label}</p>
              <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: s.value / 100 }} viewport={{ once: true }} transition={{ duration: 1.4, ease, delay: 0.3 }} />
            </motion.div>
          ))}</div>
        </div>
      </section>
      <section className="section sec-ink2">
        <div className="container">
          <SectionHead eyebrow="Platform & process" lines={['Everything you need to keep', 'every asset performing']} accent="performing" text="A modern maintenance operation blending certified technicians with a smart portal." />
          <div className="grid g3">{MAINT_FEATURES.map((f, i) => <FeatureCard key={f.title} {...f} i={i} />)}</div>
        </div>
      </section>
      <section className="section sec-light" id="plans">
        <div className="container">
          <SectionHead eyebrow="Maintenance packages" lines={['Choose the plan that', 'fits your operation']} accent="fits" text="Transparent tiered plans — upgrade or scale as your operation grows." center />
          <div className="plans">{PLANS.map((p, i) => (
            <motion.div className={`plan ${p.popular ? 'pop' : ''}`} key={p.name} initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '0px 0px -8% 0px' }} transition={{ duration: 0.9, ease, delay: i * 0.12 }} whileHover={{ y: -12 }}>
              {p.popular && <span className="plan-badge">Most popular</span>}
              <small className="fl">{p.tier}</small><h3>{p.name}</h3><p>{p.text}</p>
              <div className="price"><span>AED</span> {p.price} <small>/ month</small></div>
              <ul className="ticks">{p.pts.map((t) => <li key={t}><Check />{t}</li>)}</ul>
              <Link className={`btn ${p.popular ? 'btn-primary' : 'btn-ghost'}`} to="/maintenance#form">Select this plan <ArrowUpRight /></Link>
            </motion.div>
          ))}</div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <StatsRow items={MAINT_NUMBERS} />
          <div style={{ height: 90 }} />
          <SectionHead eyebrow="Real maintenance clients" lines={["Trusted by the UAE's", 'busiest kitchens']} accent="busiest" text="F&B leaders trust Mariot to keep their equipment running — here's what they say." />
          <Testimonials items={MAINT_TESTIMONIALS} />
        </div>
      </section>
      <section className="section sec-red">
        <div className="container center-box">
          <motion.span className="siren" animate={{ rotate: [-10, 10, -10] }} transition={{ duration: 0.6, repeat: Infinity }}><Siren /></motion.span>
          <SectionHead eyebrow="24/7 emergency maintenance" lines={['Kitchen down? Reach our', 'on-call engineer now.']} center />
          <Reveal><p className="lead">For active maintenance plan holders — direct WhatsApp line and priority phone routing to the technician on call, 24 hours a day.</p></Reveal>
          <Reveal delay={0.1} className="hero-actions"><Btn href={COMPANY.whatsapp} variant="white" icon={false}><MessageCircle /> Emergency WhatsApp</Btn><Btn href={COMPANY.phoneHref} variant="ghost" icon={false}><Phone /> Emergency call</Btn></Reveal>
        </div>
      </section>
      <FormSection eyebrow="Request maintenance plan" lines={['Get a tailored', 'maintenance offer']} accent="offer" text="Tell us about your equipment fleet. We'll reply within 24 working hours.">
        <EnquiryForm subject="Maintenance plan request" submit="Request quote" note="Includes a free on-site audit for qualifying operations." fields={[
          { name: 'plan', label: 'Preferred plan', type: 'select', options: PLANS.map((p) => p.name), value: 'Professional Plan' },
          { name: 'company', label: 'Company name', required: true, half: true },
          { name: 'person', label: 'Contact person', required: true, half: true },
          { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
          { name: 'email', label: 'Email', type: 'email', half: true },
          { name: 'count', label: 'Equipment count (approx)', half: true },
          { name: 'outlets', label: 'Number of outlets', half: true },
          { name: 'emirate', label: 'Emirate', type: 'select', options: EMIRATES },
          { name: 'notes', label: 'Additional notes', type: 'textarea' },
        ]} />
      </FormSection>
    </>
  );
}

/* ---------------- Business Hub + sub-pages ---------------- */
export function BusinessHub() {
  return (
    <>
      <PageHero eyebrow="Mariot Business Hub" title="Business solutions for restaurants, cafés, hotels and commercial kitchens" accent="Business" text="Request business support, project quotations, procurement assistance, and expert kitchen equipment guidance from Mariot." img={IMG.team} />
      <section className="section">
        <div className="container"><div className="grid g2">{HUB.map((h, i) => <PhotoCard key={h.to} {...h} i={i} tall />)}</div></div>
      </section>
      <CTA />
    </>
  );
}

export function BusinessAccount() {
  return (
    <>
      <PageHero eyebrow="B2B trade account" title="Open a Mariot Business Account" accent="Business Account" text="For groups, chains, and repeat buyers — get credit terms, a dedicated account manager, priority delivery and quarterly business reviews." img={u('1552664730-d307ca884978', 1800)} badges={['Credit terms available', 'Dedicated manager', 'Volume pricing']}>
        <Btn to="/business-account#form">Apply for account</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="kpis">{[['Credit up to', 'Net 60'], ['Volume discount', 'up to 22%'], ['Verification', '48 hrs']].map(([k, v], i) => (
            <motion.div key={k} className="kpi" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 160 }}><small>{k}</small><b>{v}</b></motion.div>
          ))}</div>
          <SectionHead eyebrow="Why open an account" lines={['Benefits that grow', 'with your business']} accent="grow" />
          <div className="grid g3">{ACCOUNT_BENEFITS.map((b, i) => <FeatureCard key={b.title} {...b} i={i} />)}</div>
        </div>
      </section>
      <FormSection eyebrow="Trade account application" lines={['Open your account']} accent="account" text="Verified in 48 business hours. Documents can be sent later.">
        <EnquiryForm subject="Trade account application" submit="Submit application" note="Trade license and VAT certificate will be requested by email after submission." fields={[
          { type: 'heading', label: 'Company details' },
          { name: 'company', label: 'Legal company name', required: true, half: true },
          { name: 'btype', label: 'Business type', type: 'select', options: ['Restaurant Group', 'Hotel / Resort', 'Café Chain', 'Catering Company', 'Supermarket', 'Contractor / Consultant', 'Other'], half: true },
          { name: 'license', label: 'Trade license number', required: true, half: true },
          { name: 'trn', label: 'VAT / TRN number', half: true },
          { name: 'emirate', label: 'Registered emirate', type: 'select', options: EMIRATES },
          { type: 'heading', label: 'Primary contact' },
          { name: 'person', label: 'Contact person', required: true, half: true },
          { name: 'role', label: 'Role / position', required: true, half: true },
          { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
          { name: 'email', label: 'Business email', type: 'email', required: true, half: true },
          { type: 'heading', label: 'Commercial profile' },
          { name: 'volume', label: 'Expected monthly volume (AED)', type: 'select', options: ['Under 20,000 AED', '20,000 – 50,000 AED', '50,000 – 150,000 AED', 'Over 150,000 AED'], half: true },
          { name: 'terms', label: 'Preferred credit terms', type: 'select', options: ['Prepaid', 'Net-15', 'Net-30', 'Net-60'], half: true },
          { name: 'notes', label: 'Additional notes', type: 'textarea' },
        ]} />
      </FormSection>
    </>
  );
}

export function Consultation() {
  const steps = [['You Book', 'Pick a preferred date & time. Site visit, video call or phone — your choice.'], ['We Confirm', 'A consultant confirms within 4 hours and shares a project briefing.'], ['You Meet & Plan', 'We walk the space, discuss workflow, then follow up with a written report.']];
  return (
    <>
      <PageHero eyebrow="Kitchen consultation" title="Book a free kitchen consultation & site visit" accent="free" text="60 minutes with a senior kitchen consultant. On-site visit, video call, or phone — whichever fits your project stage." img={u('1556909114-f6e7ad7d3136', 1800)} badges={['Free with no obligation', 'All 7 emirates', 'Layout suggestions during the visit', 'Written notes within 48 hours']}>
        <Btn to="/consultation#form">Book your slot</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <div className="kpis">{[['Response time', '< 4 hrs'], ['Session length', '60 min'], ['Cost', 'Free']].map(([k, v], i) => (
            <motion.div key={k} className="kpi" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, type: 'spring', stiffness: 160 }}><small>{k}</small><b>{v}</b></motion.div>
          ))}</div>
          <div className="five three">{steps.map(([t, x], i) => (
            <motion.div className="five-step" key={t} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: i * 0.12 }} whileHover={{ y: -8 }}>
              <span className="five-n">{i + 1}</span><h3>{t}</h3><p>{x}</p>
            </motion.div>
          ))}</div>
        </div>
      </section>
      <FormSection eyebrow="Book your slot" lines={['Schedule your', 'consultation']} accent="consultation" text="We'll confirm your slot within 4 working hours.">
        <EnquiryForm subject="Consultation booking" submit="Book consultation" note="Booking is free. No obligation to proceed with any purchase." fields={[
          { name: 'ctype', label: 'Consultation type', type: 'select', options: ['Site Visit', 'Video Call', 'Phone Call'], half: true },
          { name: 'stage', label: 'Project stage', type: 'select', options: ['Concept stage', 'Space secured', 'Under construction', 'Renovation / upgrade', 'Operating'], half: true },
          { name: 'name', label: 'Your name', required: true, half: true },
          { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
          { name: 'email', label: 'Email', type: 'email', half: true },
          { name: 'emirate', label: 'Emirate', type: 'select', options: EMIRATES, half: true },
          { name: 'address', label: 'Site address' },
          { name: 'date', label: 'Preferred date', type: 'date', half: true },
          { name: 'time', label: 'Preferred time', type: 'select', options: ['Morning (9 AM – 12 PM)', 'Afternoon (12 PM – 4 PM)', 'Evening (4 PM – 7 PM)'], half: true },
          { name: 'prepare', label: 'Anything we should prepare?', type: 'textarea' },
        ]} />
      </FormSection>
    </>
  );
}

export function RestaurantOpening() {
  return (
    <>
      <PageHero eyebrow="Restaurant & café opening" title="From vision to opening day — end to end" accent="opening day" text="Launch specialists guide you across licensing, design, equipment, staff training, and marketing so your opening runs on time and on budget." img={u('1445019980597-93fa8acb246c', 1800)} badges={['Concept-to-opening playbook', 'Licensing coordination', 'Equipment package deals', 'Staff hire & train', 'Soft-launch marketing']}>
        <Btn to="/restaurant-opening#form">Start my project</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="End-to-end support" lines={['Four pillars of a', 'successful opening']} accent="successful" />
          <div className="grid g4">{OPENING_PILLARS.map((p, i) => <FeatureCard key={p.title} {...p} i={i} num />)}</div>
        </div>
      </section>
      <FormSection eyebrow="Opening support request" lines={['Tell us about', 'your opening']} accent="opening" text="A launch specialist will contact you within 24 hours.">
        <EnquiryForm subject="Restaurant / café opening request" submit="Request opening support" note="You'll receive an opening roadmap and rough investment breakdown within 24 hours." fields={[
          { type: 'heading', label: 'Your concept' },
          { name: 'brand', label: 'Concept / brand name', half: true },
          { name: 'ctype', label: 'Concept type', type: 'select', options: ['Casual Dining', 'Fine Dining', 'Fast Food / QSR', 'Café / Coffee Shop', 'Bakery', 'Cloud Kitchen', 'Other'], half: true },
          { name: 'cuisine', label: 'Cuisine / style', half: true },
          { name: 'seats', label: 'Seats / capacity', half: true },
          { name: 'date', label: 'Target opening date', type: 'date', half: true },
          { name: 'location', label: 'Location', type: 'select', options: EMIRATES, half: true },
          { type: 'heading', label: 'Investment & stage' },
          { name: 'invest', label: 'Investment range (AED)', type: 'select', options: ['Under 150,000', '150,000 – 500,000', '500,000 – 1,500,000', 'Over 1,500,000'], value: '150,000 – 500,000', half: true },
          { name: 'stage', label: 'Current stage', type: 'select', options: ['Concept', 'Location secured', 'Fit-out in progress', 'Ready for equipment'], half: true },
          { name: 'help', label: 'What do you need help with?', type: 'chips', options: ['Licensing', 'Design', 'Equipment', 'Installation', 'Staff Training', 'Marketing'] },
          { type: 'heading', label: 'Contact' },
          { name: 'name', label: 'Your name', required: true, half: true },
          { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
          { name: 'email', label: 'Email', type: 'email' },
          { name: 'notes', label: 'Anything else we should know?', type: 'textarea' },
        ]} />
      </FormSection>
    </>
  );
}

export function UrgentRequest() {
  return (
    <>
      <PageHero eyebrow="Urgent · SLA-backed response" title="Kitchen down? We move fast." accent="fast." text="Same-day quotes, 48-hour delivery on stocked items, and priority engineering call-outs across the UAE." img={IMG.engineer}>
        <Btn href={COMPANY.whatsapp} icon={false}><MessageCircle /> WhatsApp now</Btn><Btn href={COMPANY.phoneHref} variant="ghost" icon={false}><Phone /> Call now</Btn>
      </PageHero>
      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow">Our SLA</span></Reveal>
          <div className="sla">{URGENT_SLA.map((s, i) => (
            <motion.div key={s.k} className="sla-item" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.7, ease }}>
              <Clock /><small>{s.k}</small><b>{s.v}</b>
              <motion.i initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 + i * 0.4, ease, delay: 0.3 }} />
            </motion.div>
          ))}</div>
          <div style={{ height: 80 }} />
          <SectionHead eyebrow="What we handle" lines={['The most common urgent', 'situations we solve']} accent="urgent" />
          <div className="grid g4">{URGENT_CASES.map((c, i) => <FeatureCard key={c.title} {...c} i={i} />)}</div>
        </div>
      </section>
      <FormSection eyebrow="Urgent request" lines={['Log an urgent', 'request']} accent="urgent" text="Fastest response via phone + WhatsApp. Photos help a lot — attach them in the WhatsApp chat after sending.">
        <EnquiryForm subject="URGENT equipment request" submit="Send urgent request" note="Our on-call engineer will contact you within 30 minutes during working hours." fields={[
          { name: 'urgency', label: 'How urgent is it?', type: 'select', options: ['Same day', 'Next 48 hrs', 'This week'], half: true },
          { name: 'category', label: 'Problem category', type: 'select', options: ['Equipment down / broken', 'Need fast delivery', 'Emergency installation', 'Spare parts'], half: true },
          { name: 'equipment', label: 'Equipment type (if known)' },
          { name: 'what', label: 'What happened / what you need', type: 'textarea', required: true },
          { type: 'heading', label: 'Contact & location' },
          { name: 'name', label: 'Your name', required: true, half: true },
          { name: 'business', label: 'Business name', half: true },
          { name: 'phone', label: 'Phone / WhatsApp', type: 'tel', required: true, half: true },
          { name: 'emirate', label: 'Emirate', type: 'select', options: EMIRATES, half: true },
        ]} />
      </FormSection>
    </>
  );
}

/* ---------------- Contact & Quote ---------------- */
export function Contact() {
  return (
    <>
      <PageHero eyebrow="Get in touch" title="Contact us" accent="us" text="Reach out through your preferred channel — we typically respond within a few hours." img={IMG.kitchen2} />
      <section className="section">
        <div className="container">
          <div className="grid g3">{[[MessageCircle, 'Chat on WhatsApp', COMPANY.phone, COMPANY.whatsapp], [Phone, 'Call us', COMPANY.phone, COMPANY.phoneHref], [Mail, 'Email us', COMPANY.email, `mailto:${COMPANY.email}`]].map(([I, t, v, h], i) => (
            <motion.a className="channel" key={t} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease, delay: i * 0.1 }} whileHover={{ y: -10 }}>
              <span className="feat-ic"><I /></span><small>{t}</small><strong>{v}</strong><ArrowUpRight className="go" />
            </motion.a>
          ))}</div>
        </div>
      </section>
      <FormSection eyebrow="Request a free quotation" lines={['Tell us about', 'your project']} accent="project" text="Share the details and attach a BOQ or kitchen layout in the WhatsApp chat for an accurate quote."
        aside={<Reveal><p className="addr">{COMPANY.address}</p></Reveal>}>
        <EnquiryForm subject="Quotation request (Contact page)" submit="Submit request" fields={QUOTE_FIELDS} />
      </FormSection>
      <section className="section sec-light">
        <div className="container center-box">
          <SectionHead eyebrow="Prefer to visit?" lines={[`${BRANCHES.length} branches across the UAE and Syria`]} accent={String(BRANCHES.length)} center />
          <div className="chips" style={{ justifyContent: 'center', marginTop: 0 }}>{BRANCHES.map((b) => <span className="chip" key={b.name + b.tag}><MapPin />{b.name} · {b.tag}</span>)}</div>
          <Reveal className="hero-actions"><Btn to="/branches">Find a branch</Btn></Reveal>
        </div>
      </section>
    </>
  );
}

export function Quote() {
  return (
    <>
      <PageHero eyebrow="Request a quotation" title="Request a free quotation" accent="free" text="Tell us about your project. Attach a BOQ or kitchen layout for an accurate quote." img={IMG.blueprint} badges={['Reply within hours', 'No obligation', 'Original brands']} />
      <FormSection eyebrow="Project details" lines={['What are you', 'building?']} accent="building?" text="The more we know, the more accurate the quote. BOQ, drawings and photos can be attached in the WhatsApp chat after you send."
        aside={<ul className="ticks big">{['Equipment, fabrication and installation in one quote', 'Options at standard and premium level', 'Delivery across all 7 emirates and the GCC'].map((t, i) => <Reveal as="li" key={t} delay={i * 0.06}><Check />{t}</Reveal>)}</ul>}>
        <EnquiryForm subject="Quotation request" submit="Submit request" fields={QUOTE_FIELDS} />
      </FormSection>
    </>
  );
}

export { CONTACT_FIELDS };
