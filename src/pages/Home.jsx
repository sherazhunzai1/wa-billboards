import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import BillboardCard from "../components/BillboardCard";
import { billboardImages, galleryImages, heroImages } from "../assets/billboardImages";
import SEO from "../components/SEO";
import LocationsMap from "../components/LocationsMap";

const stats = [
  { number: "30+", label: "Years" },
  { number: "200+", label: "Sites" },
  { number: "6", label: "Airports" },
  { number: "100%", label: "WA Owned" },
];

const services = [
  { title: "Billboards", description: "Metro & regional billboard inventory spanning from the Kimberley through the Goldfields to the South West.", link: "/services#billboards", tag: "01" },
  { title: "Airports", description: "Exclusive advertising rights across 6 of Western Australia's busiest regional airports.", link: "/services#airports", tag: "02" },
  { title: "Digital", description: "Multi-faced digital screens delivering dynamic, targeted campaigns across regional WA.", link: "/services#digital", tag: "03" },
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
    <main className="bg-charcoal text-chalk min-h-screen">
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
      <section className="relative h-screen flex items-end overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <img
              src={heroSlides[currentSlide].image}
              alt={heroSlides[currentSlide].label}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/20" />

        <div className="relative z-10 w-full pb-20 md:pb-28 px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <div className="stamp mb-8 inline-block">Since 1991</div>
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter mb-8">
              Big Spaces<br />
              <span className="text-lime">for Big Ideas.</span>
            </h1>
            <p className="text-lg md:text-xl text-ash max-w-xl mb-10 leading-relaxed">
              Western Australia's largest privately owned outdoor media company.
              200+ billboard sites from Perth to the Kimberley.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lime text-white font-bold text-sm uppercase tracking-[0.1em] hover:bg-lime-dark transition-colors"
              >
                Get Started <span className="text-lg">→</span>
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold text-sm uppercase tracking-[0.1em] hover:border-lime hover:text-lime transition-colors"
              >
                Our Services
              </Link>
            </div>
          </motion.div>

          <div className="absolute bottom-20 md:bottom-28 right-6 md:right-12 flex items-center gap-4">
            <span className="text-xs text-ash hidden md:block">{heroSlides[currentSlide].label}</span>
            <div className="flex gap-1">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`h-1 transition-all duration-500 ${
                    currentSlide === i ? "w-8 bg-lime" : "w-3 bg-white/20"
                  }`}
                  onClick={() => setCurrentSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs font-mono text-ash">
              {String(currentSlide + 1).padStart(2, "0")}/{String(heroSlides.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="border-y border-white/5">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="py-12 px-6 md:px-8 text-center border-r border-white/5 last:border-r-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <span className="block text-4xl md:text-5xl font-black text-lime tracking-tighter">
                {stat.number}
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-ash mt-2 block">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ MAP ═══ */}
      <LocationsMap />

      {/* ═══ SERVICES ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="stamp mb-4 inline-block">What We Do</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                Advertising<br />Solutions
              </h2>
            </div>
            <p className="text-ash max-w-md text-sm leading-relaxed">
              From traditional billboards to cutting-edge digital displays — the perfect
              outdoor advertising solution for every budget and audience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={service.link}
                  className="block bg-charcoal p-8 md:p-10 h-full group hover:bg-charcoal-light transition-colors duration-300"
                >
                  <span className="text-xs font-mono text-lime mb-6 block">{service.tag}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-lime transition-colors uppercase tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-ash text-sm leading-relaxed mb-8">{service.description}</p>
                  <span className="text-xs tracking-[0.15em] uppercase text-lime font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BILLBOARD GALLERY ═══ */}
      <section className="py-24 md:py-32 bg-charcoal-light">
        <div className="px-6 md:px-12 mb-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="stamp mb-4 inline-block">Our Network</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white">
                Featured<br />Locations
              </h2>
            </div>
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-lime font-bold hover:gap-4 transition-all"
            >
              View All →
            </Link>
          </div>
        </div>

        <div className="px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {billboardImages.slice(0, 6).map((image, i) => (
              <BillboardCard key={image.id} image={image} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMAGE TICKER ═══ */}
      <section className="py-2 overflow-hidden bg-charcoal border-y border-white/5">
        <div className="flex animate-ticker">
          {[...galleryImages, ...galleryImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-72 md:w-96 h-48 md:h-56 mx-1">
              <img
                src={img}
                alt={`WA Billboards showcase ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ═══ WHY US ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="stamp mb-6 inline-block">Why Us</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-white mb-8 leading-[1.1]">
                The Last Privately<br />
                Owned Outdoor<br />
                Media Company<br />
                <span className="text-lime">in WA</span>
              </h2>
              <p className="text-ash leading-relaxed mb-8 max-w-lg">
                Since 1991, WA Billboards has been the trusted name in outdoor advertising.
                Our independence means quick response, competitive rates, and zero corporate red tape.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  "Family-owned & operated since 1991",
                  "National representation via oOh! Media & JCDecaux",
                  "Cyclone-rated billboards built in-house",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <span className="w-6 h-px bg-lime flex-shrink-0" />
                    <span className="text-chalk text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-4 bg-lime text-white font-bold text-sm uppercase tracking-[0.1em] hover:bg-lime-dark transition-colors"
              >
                Our Story <span className="text-lg">→</span>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-1">
                <img
                  src={galleryImages[3]}
                  alt="Billboard advertising on busy Western Australia highway"
                  className="w-full h-72 object-cover"
                />
                <div className="grid grid-cols-2 gap-1">
                  <img
                    src={galleryImages[4]}
                    alt="WA Billboards regional billboard site"
                    className="w-full h-48 object-cover"
                  />
                  <img
                    src={galleryImages[5]}
                    alt="WA Billboards team servicing billboard"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ PARTNERS ═══ */}
      <section className="border-y border-white/5">
        <div className="px-6 md:px-12 py-12">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
            <span className="text-xs tracking-[0.2em] uppercase text-ash">National Sales Representation</span>
            <div className="flex gap-6">
              {["oOh! Media", "JCDecaux"].map((partner, i) => (
                <span
                  key={i}
                  className="px-8 py-4 border border-white/10 text-xl font-bold text-white/60 hover:text-lime hover:border-lime/30 transition-all duration-300"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-lime p-12 md:p-20 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-6 leading-[1.1]">

                Big Spaces<br />for Big Ideas.
              </h2>
              <p className="text-white/70 text-lg max-w-xl mb-10">
                Let's find the perfect billboard location for your business.
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-charcoal font-bold text-sm uppercase tracking-[0.1em] hover:bg-white/90 transition-colors"
                >
                  Contact Us <span className="text-lg">→</span>
                </Link>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-bold text-sm uppercase tracking-[0.1em] hover:bg-white/10 transition-colors"
                >
                  View Locations
                </Link>
              </div>
            </div>
            <div className="absolute top-0 right-0 text-[12rem] font-black text-white/5 leading-none select-none hidden md:block uppercase tracking-tighter">
              Big Ideas
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
