import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, animate } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

/* Word-by-word masked reveal. `lines` = array of strings (or JSX-free strings). */
export function SplitText({ lines, className = '', as: Tag = 'h2', delay = 0, stagger = 0.06, wordClass = () => '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  let i = 0;
  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, li) => (
        <span className="split-line" key={li}>
          {line.split(' ').map((w, wi) => {
            const idx = i++;
            return (
              <motion.span
                key={wi}
                className={`split-word ${wordClass(w, li)}`}
                initial={{ y: '110%', rotate: 4 }}
                animate={inView ? { y: '0%', rotate: 0 } : {}}
                transition={{ duration: 1, ease, delay: delay + idx * stagger }}
              >
                {w}{wi < line.split(' ').length - 1 ? ' ' : ''}
              </motion.span>
            );
          })}
        </span>
      ))}
    </Tag>
  );
}

export function Reveal({ children, delay = 0, y = 40, className = '', as = 'div', ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/* Element gently follows the cursor while hovered */
export function Magnetic({ children, strength = 0.35 }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 200, damping: 15, mass: 0.4 });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} style={{ x, y, display: 'inline-block' }} onMouseMove={onMove} onMouseLeave={reset}>
      {children}
    </motion.div>
  );
}

export function Counter({ to, duration = 2.2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration, ease: [0.16, 1, 0.3, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to, duration]);
  return <span ref={ref}>{val}</span>;
}

/* 3D tilt card with moving glare */
export function Tilt({ children, className = '', max = 10, glare = 'rgba(255,255,255,0.12)', ...rest }) {
  const ref = useRef(null);
  const rx = useSpring(0, { stiffness: 150, damping: 18 });
  const ry = useSpring(0, { stiffness: 150, damping: 18 });
  const [bg, setBg] = useState('');
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    ry.set((px - 0.5) * max * 2);
    rx.set(-(py - 0.5) * max * 2);
    setBg(`radial-gradient(circle at ${px * 100}% ${py * 100}%, ${glare}, transparent 55%)`);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div ref={ref} className={className} style={{ rotateX: rx, rotateY: ry }} onMouseMove={onMove} onMouseLeave={reset} {...rest}>
      <span className="glare" style={{ background: bg }} />
      {children}
    </motion.div>
  );
}
