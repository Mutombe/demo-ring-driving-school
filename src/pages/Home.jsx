import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowDown,
  Car,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  RoadHorizon,
  Rocket,
  Star,
  Quotes,
  CaretLeft,
  CaretRight,
  CheckCircle,
} from '@phosphor-icons/react';
import PageTransition from '../components/PageTransition';
import siteData from '../data/siteData';


/* ================================================================
   ANIMATED COUNTER
   ================================================================ */
function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const numericTarget = parseFloat(target.replace(/[^0-9.]/g, '')) || 0;
  const isDecimal = target.includes('.');

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const increment = numericTarget / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericTarget) {
        setCount(numericTarget);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, numericTarget, duration, isDecimal]);

  return (
    <span ref={ref}>
      {prefix}{inView ? (isDecimal ? count.toFixed(1) : count.toLocaleString()) : '0'}{suffix}
    </span>
  );
}

/* ================================================================
   ICON MAP
   ================================================================ */
const ICON_MAP = {
  Car, ShieldCheck, Briefcase, GraduationCap, RoadHorizon, Rocket,
};


/* ================================================================
   1. HERO — Road-Ready, Navy & Green
   ================================================================ */
function HeroSection() {
  const { hero } = siteData;
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[700px] overflow-hidden bg-navy-950">
      {/* Background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={hero.backgroundImage}
          alt={hero.backgroundAlt}
          className="absolute inset-0 w-full h-[130%] object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 via-navy-950/60 to-navy-950/90 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/40 z-[1]" />
      </motion.div>

      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Green accent line — left edge */}
      <div className="absolute top-[20%] left-0 w-16 sm:w-24 h-[2px] bg-green-500 z-20" />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12"
        style={{ y: textY, opacity }}
      >
        {/* Green accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="w-12 h-[3px] bg-green-500 mb-6 origin-left"
        />

        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] mb-6 sm:mb-8"
        >
          {hero.badge}
        </motion.p>

        {/* Giant stacked headline */}
        <div className="overflow-hidden">
          {['LEARN', 'TO DRIVE', 'WITH CONFIDENCE.'].map((word, i) => (
            <motion.div
              key={word}
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1
                className={`font-heading font-bold leading-[0.88] tracking-tight ${
                  word === 'WITH CONFIDENCE.' ? 'text-green-500' : 'text-white'
                }`}
                style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}
              >
                {word}
              </h1>
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mt-8 leading-relaxed font-light"
        >
          {hero.subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="flex flex-wrap gap-4 mt-8 sm:mt-10"
        >
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-3 bg-green-500 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/20"
          >
            {hero.ctaPrimary}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 border border-white/30 text-white px-7 py-3.5 sm:py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white hover:bg-white/5"
          >
            {hero.ctaSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-heading">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
          <ArrowDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>

      {/* Side text */}
      <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 z-20">
        <span className="text-white/10 text-[10px] uppercase tracking-[0.4em] font-heading" style={{ writingMode: 'vertical-rl' }}>
          Ring Driving School &mdash; Harare, Zimbabwe
        </span>
      </div>
    </section>
  );
}


/* ================================================================
   2. MARQUEE TICKER
   ================================================================ */
function MarqueeTicker() {
  const items = ['LEARNER LESSONS', 'DEFENSIVE DRIVING', 'FLEET TRAINING', 'LICENCE RENEWAL', 'CODE 1-14', 'REFRESHER COURSES', 'ROAD SAFETY', '95% PASS RATE'];
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <section className="bg-navy-900 border-y border-white/5 py-4 sm:py-5 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center gap-4 sm:gap-6 mx-4 sm:mx-6">
            <span className="text-green-500 font-heading text-lg sm:text-2xl font-bold uppercase tracking-wider">
              {item}
            </span>
            <span className="text-green-500/40 text-lg">&bull;</span>
          </span>
        ))}
      </div>
    </section>
  );
}


/* ================================================================
   3. ABOUT SPLIT — Story Section
   ================================================================ */
function AboutSplit() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] bg-green-500 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-8"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              THE ROAD TO<br />
              <span className="text-green-500">CONFIDENCE</span><br />
              STARTS HERE.
            </h2>
            <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-6 max-w-lg">
              Ring Driving School was founded in 2008 with one car and one mission: to make Harare's
              roads safer by producing better, more confident drivers. At a time when driving instruction
              meant being shouted at in a car park, we took a different approach entirely.
            </p>
            <p className="text-white/40 text-sm leading-relaxed max-w-lg">
              We built a structured curriculum based on international best practices. We hired instructors
              who were patient as they were skilled. And we invested in modern dual-control vehicles.
              Today, over 15,000 graduates carry our confidence on every road in Zimbabwe.
            </p>

            <div className="w-full h-px bg-white/10 my-8" />

            <div className="flex gap-8 sm:gap-12">
              <div>
                <div className="text-green-500 font-heading text-3xl sm:text-4xl font-bold">2008</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Founded</div>
              </div>
              <div>
                <div className="text-green-500 font-heading text-3xl sm:text-4xl font-bold">15K+</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Graduates</div>
              </div>
              <div>
                <div className="text-green-500 font-heading text-3xl sm:text-4xl font-bold">95%</div>
                <div className="text-white/40 text-xs uppercase tracking-wider mt-1">Pass Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Image composition */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative">
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800"
                  alt="Ring Driving School lesson in progress"
                  className="w-full aspect-[4/5] object-cover object-center"
                  loading="lazy"
                />
              </div>

              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[45%] overflow-hidden border-4 border-navy-950 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=400"
                  alt="Student passing driving test"
                  className="w-full aspect-square object-cover object-center"
                  loading="lazy"
                />
              </div>

              {/* Pass rate badge */}
              <div className="absolute -top-4 -right-4 sm:-right-6 bg-green-500 text-white p-4 sm:p-6 shadow-2xl">
                <div className="text-center">
                  <div className="font-heading text-2xl sm:text-3xl font-bold leading-none">95%</div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider font-semibold mt-1 text-white/80">
                    First-Time<br />Pass Rate
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   4. SERVICES GRID — 6 course cards
   ================================================================ */
function ServicesGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { servicesPreview } = siteData;

  const serviceImages = [
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
    'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800',
    'https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800',
    'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800',
  ];

  return (
    <section ref={ref} className="bg-navy-900 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-16"
        >
          <div className="w-10 h-[3px] bg-green-500 mb-6" />
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2
              className="font-heading font-bold text-white leading-[0.92]"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              OUR <span className="text-green-500">COURSES</span>
            </h2>
            <Link
              to="/services"
              className="group text-white/40 text-sm uppercase tracking-wider font-heading flex items-center gap-2 hover:text-green-500 transition-colors"
            >
              All Courses
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {servicesPreview.map((service, i) => {
            const Icon = ICON_MAP[service.iconName];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * i }}
              >
                <Link
                  to={`/services/${siteData.services?.items?.[i]?.slug || '#'}`}
                  className="group relative block overflow-hidden aspect-[4/5] sm:aspect-[3/4]"
                >
                  <img
                    src={serviceImages[i]}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />

                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-green-500/20 font-heading text-5xl sm:text-6xl font-bold leading-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="absolute top-4 left-4 z-10">
                    {Icon && <Icon size={28} className="text-green-500/60" />}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
                    <h3 className="font-heading text-white text-lg sm:text-xl font-bold uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/0 group-hover:text-white/60 text-sm leading-relaxed transition-all duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">
                      {service.desc}
                    </p>
                    <div className="flex items-center gap-2 mt-3 text-green-500 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-xs uppercase tracking-wider font-heading font-semibold">Learn More</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   5. JOURNEY STEPS — How It Works
   ================================================================ */
function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const steps = [
    { number: '01', title: 'Book Your First Lesson', desc: 'Choose your course, pick a time slot, and meet your instructor. No experience needed.' },
    { number: '02', title: 'Learn the Fundamentals', desc: 'Vehicle control, road rules, hazard perception. Our structured curriculum builds skills step by step.' },
    { number: '03', title: 'Practice on Real Roads', desc: 'Highway driving, urban navigation, parking manoeuvres. You will drive on the actual test routes.' },
    { number: '04', title: 'Pass Your Test', desc: 'Mock tests, final preparation, and test-day support. 95% of our students pass on the first attempt.' },
  ];

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="w-10 h-[3px] bg-green-500 mx-auto mb-6" />
          <h2
            className="font-heading font-bold text-white leading-[0.92]"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            YOUR <span className="text-green-500">JOURNEY</span>
          </h2>
          <p className="text-white/40 text-sm sm:text-base mt-4 max-w-md mx-auto">
            From first lesson to licence in four clear steps.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="relative text-center lg:text-left"
            >
              {/* Connecting line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px bg-white/10 z-0" />
              )}

              <div className="relative z-10">
                <div className="text-green-500/20 font-heading text-6xl sm:text-7xl font-bold leading-none mb-4">
                  {step.number}
                </div>
                <h3 className="font-heading text-white text-base sm:text-lg font-bold uppercase tracking-wide mb-3">
                  {step.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   6. WHY CHOOSE US
   ================================================================ */
function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { whyChooseUs } = siteData;

  return (
    <section ref={ref} className="bg-navy-900 py-20 sm:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <div className="overflow-hidden">
              <img
                src={whyChooseUs.image}
                alt={whyChooseUs.imageAlt}
                className="w-full aspect-[4/5] object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-navy-950 border border-green-500/20 p-6 sm:p-8 shadow-2xl">
              <div className="text-center">
                <div className="text-green-500 font-heading text-4xl sm:text-5xl font-bold leading-none">
                  {whyChooseUs.experienceYears}
                </div>
                <div className="text-white/50 text-[10px] sm:text-xs uppercase tracking-wider font-heading mt-2">
                  {whyChooseUs.experienceLabel}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="w-10 h-[3px] bg-green-500 mb-6" />
            <h2
              className="font-heading font-bold text-white leading-[0.92] mb-10"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)' }}
            >
              WHY <span className="text-green-500">RING</span><br />
              DRIVING SCHOOL?
            </h2>

            <div className="space-y-6">
              {whyChooseUs.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-8 h-8 bg-green-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={18} weight="fill" className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-heading text-white text-sm sm:text-base font-bold uppercase tracking-wide mb-1">
                      {point.title}
                    </h4>
                    <p className="text-white/40 text-sm leading-relaxed">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   7. STATS BAND
   ================================================================ */
function StatsBand() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  const stats = [
    { number: '15000', suffix: '+', label: 'Graduates' },
    { number: '95', suffix: '%', label: 'Pass Rate' },
    { number: '16', suffix: '+', label: 'Years Experience' },
    { number: '20', suffix: '+', label: 'Certified Instructors' },
  ];

  return (
    <section ref={ref} className="relative bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="font-heading font-bold text-white leading-none" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                <AnimatedCounter target={stat.number} duration={2} />
                <span className="text-green-500">{stat.suffix}</span>
              </div>
              <div className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.2em] font-heading mt-2 sm:mt-3">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


/* ================================================================
   8. TESTIMONIALS
   ================================================================ */
function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { homeTestimonials } = siteData;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + homeTestimonials.length) % homeTestimonials.length);
  }, [homeTestimonials.length]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = homeTestimonials[active];

  return (
    <section ref={ref} className="bg-navy-950 py-20 sm:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <Quotes size={40} weight="fill" className="text-green-500/20 mx-auto mb-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <blockquote className="text-white text-lg sm:text-xl lg:text-2xl leading-relaxed font-light italic mb-8">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-[2px] bg-green-500 mb-2" />
                <div className="text-white font-heading text-sm uppercase tracking-wider font-bold">{t.name}</div>
                <div className="text-white/40 text-xs uppercase tracking-wider">{t.role}</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={12} weight="fill" className="text-green-500" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Previous testimonial"
            >
              <CaretLeft size={16} />
            </button>
            <div className="flex gap-2">
              {homeTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`h-[3px] transition-all duration-300 ${
                    i === active ? 'w-8 bg-green-500' : 'w-3 bg-white/15 hover:bg-white/30'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors"
              aria-label="Next testimonial"
            >
              <CaretRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   9. CTA — Full-Bleed Road Photo
   ================================================================ */
function CTASection() {
  const { homeCta } = siteData;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 lg:py-44 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src={homeCta.backgroundImage}
          alt={homeCta.backgroundAlt}
          className="w-full h-[130%] object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-navy-950/70" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      <div className="relative z-20 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading font-bold text-white leading-[0.88] mb-8" style={{ fontSize: 'clamp(2.5rem, 7vw, 4.5rem)' }}>
            GET BEHIND<br />
            <span className="text-green-500">THE WHEEL.</span>
          </h2>

          <p className="text-white/50 text-sm sm:text-base lg:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            {homeCta.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-green-600 hover:shadow-xl hover:shadow-green-500/20"
            >
              {homeCta.ctaPrimary}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 border border-white/30 text-white px-8 py-4 font-heading text-sm sm:text-base uppercase tracking-wider font-semibold transition-all duration-300 hover:border-white hover:bg-white/5"
            >
              View All Courses
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


/* ================================================================
   HOME — Assembled
   ================================================================ */
function Home() {
  return (
    <PageTransition>
      <HeroSection />
      <MarqueeTicker />
      <AboutSplit />
      <ServicesGrid />
      <HowItWorks />
      <WhyChooseUs />
      <StatsBand />
      <TestimonialsSection />
      <CTASection />
    </PageTransition>
  );
}

export default Home;
