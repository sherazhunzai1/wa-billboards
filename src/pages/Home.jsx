import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineClock,
  HiOutlineMap,
  HiOutlinePaperAirplane,
  HiOutlineHeart,
  HiOutlineSpeakerphone,
  HiOutlineDesktopComputer,
  HiCheckCircle,
  HiChevronDown,
} from "react-icons/hi";
import BillboardCard from "../components/BillboardCard";
import CtaSection from "../components/CtaSection";
import { MotionLink, SectionHeading, Sticker, Floater, bouncy, springy, staggerParent, popChild } from "../components/Playful";
import { billboardImages, galleryImages, heroImages } from "../assets/billboardImages";
import SEO from "../components/SEO";
import LocationsMap from "../components/LocationsMap";

const stats = [
  { icon: <HiOutlineClock />, number: "30+", label: "Years" },
  { icon: <HiOutlineMap />, number: "200+", label: "Sites" },
  { icon: <HiOutlinePaperAirplane />, number: "6", label: "Airports" },
  { icon: <HiOutlineHeart />, number: "100%", label: "WA Owned" },
];

const services = [
  { icon: <HiOutlineSpeakerphone />, title: "Billboards", description: "Metro & regional billboard inventory spanning from the Kimberley through the Goldfields to the South West.", link: "/services#billboards", tag: "01" },
  { icon: <HiOutlinePaperAirplane />, title: "Airports", description: "Exclusive advertising rights across 6 of Western Australia's busiest regional airports.", link: "/services#airports", tag: "02" },
  { icon: <HiOutlineDesktopComputer />, title: "Digital", description: "Multi-faced digital screens delivering dynamic, targeted campaigns across regional WA.", link: "/services#digital", tag: "03" },
];

const heroSlides = [
  { image: heroImages[0], label: "Perth Metro" },
  { image: heroImages[1], label: "Karratha Regional" },
  { image: heroImages[2], label: "Northbridge City" },
  { image: heroImages[3], label: "Airport Terminal" },
  { image: heroImages[4], label: "Regional Highway" },
  { image: heroImages[5], label: "Metro Digital" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <main className="bg-cream text-ink min-h-screen">
      <SEO
        path="/"
        description="WA Billboards — Big Spaces for Big Ideas. Perth & Western Australia's #1 billboard advertising company since 1991. 200+ outdoor billboard sites, 6 regional airport terminals & digital displays. Get a free quote: 08 9248 5070."
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": "https://wabillboards.com.au/#organization",
            name: "WA Billboards",
            url: "https://wabillboards.com.au",
            logo: { "@type": "ImageObject", url: "https://wabillboards.com.au/og-image.jpg" },
            description: "Western Australia's largest privately owned outdoor media company. Billboard advertising, airport ads & digital displays since 1991.",
            foundingDate: "1991",
            founder: { "@type": "Person", name: "Stephen Robinson" },
            areaServed: { "@type": "State", name: "Western Australia" },
            address: { "@type": "PostalAddress", streetAddress: "40B Boulder Road", addressLocality: "Malaga", addressRegion: "WA", postalCode: "6090", addressCountry: "AU" },
            telephone: "+61-8-9248-5070",
            email: "sales@wabillboards.com.au",
            contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: "+61-8-9248-5070", email: "sales@wabillboards.com.au", areaServed: "AU", availableLanguage: "English" },
            sameAs: [],
          },
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://wabillboards.com.au/#localbusiness",
            name: "WA Billboards",
            image: "https://wabillboards.com.au/og-image.jpg",
            url: "https://wabillboards.com.au",
            telephone: "+61-8-9248-5070",
            email: "sales@wabillboards.com.au",
            priceRange: "$$",
            address: { "@type": "PostalAddress", streetAddress: "40B Boulder Road", addressLocality: "Malaga", addressRegion: "WA", postalCode: "6090", addressCountry: "AU" },
            geo: { "@type": "GeoCoordinates", latitude: -31.8587, longitude: 115.8985 },
            openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:30", closes: "17:00" },
            description: "Western Australia's largest privately owned outdoor media company offering billboard advertising, airport advertising and digital displays since 1991.",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://wabillboards.com.au/#website",
            name: "WA Billboards",
            url: "https://wabillboards.com.au",
            publisher: { "@id": "https://wabillboards.com.au/#organization" },
          },
        ]}
      />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].label}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-ink/50" />

        {/* Floating stat stickers */}
        <Floater className="top-32 right-8 lg:right-24 hidden md:block" duration={7}>
          <div className="rounded-2xl bg-white/95 px-5 py-3 shadow-soft-lg -rotate-3">
            <span className="block text-2xl font-semibold text-primary">200+</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">Billboard Sites</span>
          </div>
        </Floater>
        <Floater className="top-64 right-24 lg:right-48 hidden lg:block" delay={1.4} duration={8}>
          <div className="rounded-2xl bg-white/95 px-5 py-3 shadow-soft-lg rotate-2">
            <span className="block text-2xl font-semibold text-accent">6</span>
            <span className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">Airports</span>
          </div>
        </Floater>

        <div className="relative z-10 w-full pt-32 pb-28 px-6 md:px-12">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
            className="max-w-4xl"
          >
            <motion.div variants={popChild} className="mb-7">
              <span className="inline-block rounded-full bg-sun px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-ink shadow-lg -rotate-2">
                Family owned since 1991
              </span>
            </motion.div>
            <motion.h1
              variants={popChild}
              className="text-5xl sm:text-7xl md:text-8xl font-semibold leading-[1.02] text-white mb-7"
            >
              Big Spaces<br />
              <span className="text-sun">for Big Ideas.</span>
            </motion.h1>
            <motion.p
              variants={popChild}
              className="text-lg md:text-xl text-white/90 font-semibold max-w-xl mb-10 leading-relaxed"
            >
              Western Australia's largest privately owned outdoor media company.
              200+ billboard sites from Perth to the Kimberley.
            </motion.p>
            <motion.div variants={popChild} className="flex flex-wrap gap-4">
              <MotionLink
                to="/contact"
                whileHover={{ scale: 1.06, rotate: -1 }}
                whileTap={{ scale: 0.92 }}
                transition={bouncy}
                className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
              >
                Get Started <span className="text-lg">→</span>
              </MotionLink>
              <MotionLink
                to="/services"
                whileHover={{ scale: 1.06, rotate: 1 }}
                whileTap={{ scale: 0.92 }}
                transition={bouncy}
                className="btn-pop bg-white/95 text-ink px-8 py-4 shadow-lg hover:bg-white"
              >
                Our Services
              </MotionLink>
            </motion.div>

            {/* Slide controls */}
            <motion.div variants={popChild} className="mt-12 flex items-center gap-4 md:gap-5">
              <span className="text-xs font-extrabold text-white/70">
                {String(currentSlide + 1).padStart(2, "0")}/{String(heroSlides.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    className="group relative h-5 flex items-center"
                    onClick={() => setCurrentSlide(i)}
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span
                      className={`block h-2 overflow-hidden rounded-full transition-all duration-500 ${
                        currentSlide === i ? "w-10 bg-white/30" : "w-4 bg-white/30 group-hover:bg-white/50"
                      }`}
                    >
                      {currentSlide === i && (
                        <motion.span
                          key={currentSlide}
                          className="block h-full rounded-full bg-sun"
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </span>
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSlide}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-extrabold uppercase tracking-wider text-white/80 hidden sm:block"
                >
                  {heroSlides[currentSlide].label}
                </motion.span>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 text-white/80 hidden md:flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        >
          <HiChevronDown className="w-7 h-7" />
        </motion.div>

        {/* Friendly wave divider into cream */}
        <svg
          className="absolute bottom-0 left-0 w-full text-cream pointer-events-none"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,55 C240,95 480,20 720,45 C960,70 1200,25 1440,55 L1440,90 L0,90 Z" fill="currentColor" />
        </svg>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="relative z-20 -mt-10 px-6 md:px-12">
        <motion.div
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={popChild}
              whileHover={{ rotate: i % 2 === 0 ? -2 : 2, y: -6 }}
              transition={bouncy}
              className="bg-white rounded-3xl border-2 border-ink/5 shadow-soft px-6 py-8 text-center"
            >
              <span className="mx-auto mb-4 w-12 h-12 rounded-full bg-peach text-primary flex items-center justify-center text-2xl">
                {stat.icon}
              </span>
              <span className="block text-4xl md:text-5xl font-semibold text-ink">
                {stat.number}
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-ink-soft mt-2 block">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ═══ MAP ═══ */}
      <LocationsMap />

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <Floater className="top-16 right-6 hidden lg:block" duration={9}>
          <div className="w-24 h-24 rounded-full bg-peach/70" />
        </Floater>
        <div className="max-w-7xl mx-auto relative">
          <SectionHeading
            eyebrow="What We Do"
            title={<>Advertising <span className="text-primary">Solutions</span></>}
            sub="From traditional billboards to cutting-edge digital displays — the perfect outdoor advertising solution for every budget and audience."
          />

          <motion.div
            className="grid md:grid-cols-3 gap-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {services.map((service, i) => (
              <motion.div key={i} variants={popChild} whileHover={{ y: -8 }} transition={bouncy}>
                <MotionLink
                  to={service.link}
                  whileTap={{ scale: 0.96 }}
                  className="block h-full bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft p-8 md:p-10 group hover:bg-primary hover:border-primary-dark transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-8">
                    <span className="w-14 h-14 rounded-2xl bg-peach text-primary flex items-center justify-center text-3xl group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      {service.icon}
                    </span>
                    <span className="rounded-full bg-peach px-3 py-1 text-xs font-extrabold text-primary-deep group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
                      {service.tag}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-ink-soft font-semibold leading-relaxed mb-8 group-hover:text-white/90 transition-colors duration-300">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-extrabold text-primary-deep group-hover:text-white transition-colors duration-300">
                    Learn More
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </span>
                </MotionLink>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ BILLBOARD GALLERY ═══ */}
      <section className="py-20 md:py-28 bg-peach/50 relative overflow-hidden">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <SectionHeading
              eyebrow="Our Network"
              title={<>Featured <span className="text-primary">Locations</span></>}
            />
            <MotionLink
              to="/locations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.93 }}
              transition={bouncy}
              className="btn-pop bg-white text-primary-deep px-6 py-3 text-sm shadow-soft border-2 border-white hover:border-sand shrink-0 mb-12 md:mb-16"
            >
              View All →
            </MotionLink>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {billboardImages.slice(0, 6).map((image, i) => (
              <BillboardCard key={image.id} image={image} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE TICKER ═══ */}
      <section className="py-8 overflow-hidden">
        <div className="flex animate-ticker">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 md:w-96 h-48 md:h-56 mx-2">
              <img
                src={img}
                alt={`WA Billboards showcase ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-3xl border-4 border-white shadow-md grayscale hover:grayscale-0 hover:scale-[1.03] transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden">
        <Floater className="bottom-20 left-4 hidden lg:block" delay={0.8} duration={8}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 5v30M5 20h30" stroke="#FED7AA" strokeWidth="8" strokeLinecap="round" />
          </svg>
        </Floater>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={popChild}>
                <Sticker className="bg-peach text-primary-deep mb-6">Why Us</Sticker>
              </motion.div>
              <motion.h2 variants={popChild} className="text-4xl md:text-5xl font-semibold text-ink mb-8 leading-[1.08]">
                The last privately owned outdoor media company{' '}
                <span className="text-primary squiggle">in WA</span>
              </motion.h2>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed mb-8 max-w-lg">
                Since 1991, WA Billboards has been the trusted name in outdoor advertising.
                Our independence means quick response, competitive rates, and zero corporate red tape.
              </motion.p>

              <motion.ul variants={popChild} className="space-y-4 mb-10">
                {[
                  "Family-owned & operated since 1991",
                  "National representation via oOh! Media & JCDecaux",
                  "Cyclone-rated billboards built in-house",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <HiCheckCircle className="w-6 h-6 text-mint flex-shrink-0" />
                    <span className="text-ink font-bold">{item}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={popChild}>
                <MotionLink
                  to="/about"
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={bouncy}
                  className="btn-pop bg-primary-dark text-white px-8 py-4 shadow-pop hover:bg-primary"
                >
                  Our Story <span className="text-lg">→</span>
                </MotionLink>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, rotate: 3 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
              className="relative"
            >
              <div className="space-y-4">
                <img
                  src={galleryImages[3]}
                  alt="Billboard advertising on busy Western Australia highway"
                  className="w-full h-72 object-cover rounded-[2rem] border-4 border-white shadow-soft-lg rotate-1"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src={galleryImages[4]}
                    alt="WA Billboards regional billboard site"
                    className="w-full h-48 object-cover rounded-3xl border-4 border-white shadow-soft -rotate-2"
                  />
                  <img
                    src={galleryImages[5]}
                    alt="WA Billboards team servicing billboard"
                    className="w-full h-48 object-cover rounded-3xl border-4 border-white shadow-soft rotate-2"
                  />
                </div>
              </div>
              <Floater className="-top-5 -right-3" duration={6}>
                <span className="inline-block rounded-full bg-sun px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-ink shadow-lg rotate-3">
                  100% Family Owned
                </span>
              </Floater>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="px-6 md:px-12 pb-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          <span className="text-xs font-extrabold uppercase tracking-wider text-ink-soft">National Sales Representation</span>
          <div className="flex flex-wrap justify-center gap-4">
            {["oOh! Media", "JCDecaux"].map((partner, i) => (
              <motion.span
                key={i}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
                transition={bouncy}
                className="rounded-full bg-white px-8 py-4 border-2 border-ink/5 shadow-soft text-xl font-semibold text-ink/60 hover:text-primary-deep hover:border-sand transition-colors"
              >
                {partner}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <CtaSection
        subtitle="Let's find the perfect billboard location for your business. Contact us today for a free consultation."
        primary={{ to: "/contact", label: "Contact Us" }}
        secondary={{ to: "/locations", label: "View Locations" }}
      />
    </main>
  );
}
