import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowRight, HiPlay, HiLocationMarker, HiStar, HiGlobe, HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { FaRoad, FaPlane, FaDesktop } from "react-icons/fa";
import BillboardCard from "../components/BillboardCard";
import { billboardImages, galleryImages, heroImages } from "../assets/billboardImages";
import SEO from "../components/SEO";
import LocationsMap from "../components/LocationsMap";

const stats = [
  { number: "30+", label: "Years Experience", icon: <HiStar /> },
  { number: "200+", label: "Billboard Sites", icon: <HiLocationMarker /> },
  { number: "6", label: "Regional Airports", icon: <FaPlane /> },
  { number: "100%", label: "WA Owned", icon: <HiGlobe /> },
];

const services = [
  { icon: <FaRoad size={32} />, title: "Billboards", description: "Extensive inventory across WA - from Kimberley through Goldfields to South West.", color: "#FF6B35", link: "/services#billboards" },
  { icon: <FaPlane size={32} />, title: "Airports", description: "Advertising rights to most of WA's regional airports for maximum exposure.", color: "#FF4858", link: "/services#airports" },
  { icon: <FaDesktop size={32} />, title: "Digital", description: "Moving to digital with multi-faced screens across regional WA locations.", color: "#E040FB", link: "/services#digital" },
];

const partners = ["oOh! Media", "JCDecaux"];

const heroSlides = [
  { image: heroImages[0], label: "Perth Metro Billboard" },
  { image: heroImages[1], label: "Karratha Regional Billboard" },
  { image: heroImages[2], label: "Northbridge City Billboard" },
  { image: heroImages[3], label: "Airport Advertising" },
  { image: heroImages[4], label: "Regional Highway Billboard" },
  { image: heroImages[5], label: "Metro Digital Display" },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <main className="bg-[#0a0a0f] text-white min-h-screen">
      <SEO
        path="/"
        description="WA Billboards — Perth & Western Australia's #1 billboard advertising company since 1991. 200+ outdoor billboard sites, 6 regional airport terminals & digital displays. Get a free quote: 08 9248 5070."
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

      {/* Hero Section - Full Screen Slideshow */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Background Slideshow */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.05 }}
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a0a0f]/80 to-transparent" />

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <HiChevronLeft size={28} />
        </button>
        <button
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full glass flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <HiChevronRight size={28} />
        </button>

        {/* Hero Content */}
        <div className="relative z-10 w-full pb-24 md:pb-32 pt-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-white/90 mb-6">
                WA's Largest Outdoor Media Company
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Make Your Brand
                <span className="gradient-text"> Impossible </span>
                to Ignore
              </h1>
              <p className="text-lg md:text-xl text-white/70 mb-8 max-w-2xl leading-relaxed">
                Captivating billboard advertising across Western Australia. From
                Perth metro to the Kimberley — we put your brand in front of the
                right audience, every day.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF4858] rounded-xl text-white font-semibold text-lg hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get Started <HiArrowRight />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl glass text-white font-semibold text-lg hover:bg-white/15 transition-all duration-300"
                >
                  <HiPlay /> Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <span className="text-sm text-white/60 hidden md:block">
            {heroSlides[currentSlide].label}
          </span>
          <div className="flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === i
                    ? "w-8 bg-gradient-to-r from-[#FF6B35] to-[#FF4858]"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="text-sm text-white/40 font-mono">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 -mt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="glass-dark rounded-2xl p-6 text-center hover-lift"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-2xl text-[#FF6B35] mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text">
                  {stat.number}
                </div>
                <div className="text-sm text-white/50 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <LocationsMap />

      {/* Services Preview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#FF6B35] mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Outdoor Advertising{" "}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              From traditional billboards to cutting-edge digital displays, we
              have the perfect advertising solution for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link
                  to={service.link}
                  className="block glass-dark rounded-2xl p-8 hover-lift transition-all duration-300 group h-full"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span
                    className="inline-flex items-center gap-2 font-semibold text-sm group-hover:gap-3 transition-all duration-300"
                    style={{ color: service.color }}
                  >
                    Learn More <HiArrowRight />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Billboard Gallery */}
      <section className="py-24 bg-[#0d0d14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#FF6B35] mb-4">
              Our Billboard Network
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Locations</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Explore our extensive network of billboard locations across
              Western Australia.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {billboardImages.slice(0, 6).map((image, i) => (
              <BillboardCard key={image.id} image={image} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/locations"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF4858] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              View All Locations <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Marquee */}
      <section className="py-16 overflow-hidden">
        <div className="relative">
          <div className="flex animate-marquee">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 md:w-96 h-48 md:h-64 mx-2 rounded-xl overflow-hidden"
              >
                <img
                  src={img}
                  alt={`WA Billboards outdoor advertising showcase ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-[#FF6B35] mb-4">
                Why WA Billboards
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                One of the Last{" "}
                <span className="gradient-text">Privately Owned</span> Outdoor
                Media Companies in WA
              </h2>
              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Since 1991, WA Billboards has been the trusted name in outdoor
                advertising. Our independence means we can react quickly to
                client needs and offer competitive rates without corporate red
                tape.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4858]" />
                  <span className="text-white/80">
                    Family-owned & operated since 1991
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4858]" />
                  <span className="text-white/80">
                    Australia-wide representation via oOh! Media & JCDecaux
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4858]" />
                  <span className="text-white/80">
                    Cyclone-rated billboards built in-house
                  </span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF6B35] to-[#FF4858] rounded-xl text-white font-semibold hover:shadow-lg hover:shadow-[#FF6B35]/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                Our Story <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={galleryImages[3]}
                  alt="Billboard advertising on busy Western Australia highway"
                  className="rounded-2xl object-cover w-full h-64 col-span-2"
                />
                <img
                  src={galleryImages[4]}
                  alt="WA Billboards regional billboard site at sunset"
                  className="rounded-2xl object-cover w-full h-48"
                />
                <img
                  src={galleryImages[5]}
                  alt="WA Billboards team servicing remote billboard location"
                  className="rounded-2xl object-cover w-full h-48"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-gradient-to-r from-[#FF6B35]/20 to-[#FF4858]/20 blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="py-16 border-t border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-white/40 uppercase tracking-widest mb-8">
            National Sales Representation
          </p>
          <div className="flex justify-center items-center gap-12">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="glass-dark rounded-xl px-10 py-5 text-xl font-bold text-white/60 hover:text-white transition-colors duration-300"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35] to-[#FF4858] opacity-90" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L3N2Zz4=')] opacity-30" />
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Ready to Make an Impact?
              </h2>
              <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
                Let's find the perfect billboard location for your business.
                Contact us today for a free consultation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0a0f] rounded-xl font-semibold text-lg hover:bg-white/90 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Contact Us <HiArrowRight />
                </Link>
                <Link
                  to="/locations"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                >
                  View Locations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
