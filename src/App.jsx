import { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter, MemoryRouter, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Preloader, Cursor, ScrollProgress, Navbar, Footer, WhatsAppFloat, PageTransition } from './components/Layout';
import Home from './pages/Home';
import { About, HowWeWork, Sectors, SectorDetail, Projects, ProjectDetail, Brands, BrandDetail, Branches, Blog, NotFound } from './pages/Company';
import { Design, Fabrication, Maintenance, BusinessHub, BusinessAccount, Consultation, RestaurantOpening, UrgentRequest, Contact, Quote } from './pages/Services';

/* VITE_ROUTER=memory builds a self-contained preview that needs no server routing */
const Router = import.meta.env.VITE_ROUTER === 'memory' ? MemoryRouter : BrowserRouter;

function Shell() {
  const [ready, setReady] = useState(false);
  const lenis = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const l = new Lenis({ duration: 1.15, smoothWheel: true });
    lenis.current = l;
    let raf;
    const loop = (t) => { l.raf(t); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); l.destroy(); };
  }, []);

  const toTop = useCallback((smooth) => {
    if (lenis.current) lenis.current.scrollTo(0, smooth ? { duration: 1.4 } : { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, []);

  /* #anchor links (e.g. /maintenance#plans) */
  useEffect(() => {
    if (!location.hash) return;
    const id = setTimeout(() => {
      const el = document.querySelector(location.hash);
      if (el) lenis.current ? lenis.current.scrollTo(el, { offset: -90, duration: 1.4 }) : el.scrollIntoView({ behavior: 'smooth' });
    }, 750);
    return () => clearTimeout(id);
  }, [location.hash, location.pathname]);

  return (
    <>
      <Preloader onDone={() => setReady(true)} />
      <Cursor />
      <ScrollProgress />
      <Navbar ready={ready} />
      {ready && (
        <PageTransition onSwap={() => toTop(false)}>
          <main>
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/how-we-work" element={<HowWeWork />} />
              <Route path="/sectors" element={<Sectors />} />
              <Route path="/sectors/:slug" element={<SectorDetail />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/design" element={<Design />} />
              <Route path="/fabrication" element={<Fabrication />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/business-hub" element={<BusinessHub />} />
              <Route path="/business-account" element={<BusinessAccount />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/restaurant-opening" element={<RestaurantOpening />} />
              <Route path="/urgent-request" element={<UrgentRequest />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:slug" element={<BrandDetail />} />
              <Route path="/branches" element={<Branches />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer toTop={() => toTop(true)} />
        </PageTransition>
      )}
      <WhatsAppFloat />
    </>
  );
}

export default function App() {
  return <Router><Shell /></Router>;
}
