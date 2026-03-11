import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiArrowRight,
  HiPlay,
  HiLocationMarker,
  HiStar,
  HiGlobe,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";
import { FaRoad, FaPlane, FaDesktop } from "react-icons/fa";
import BillboardCard from "../components/BillboardCard";
import {
  billboardImages,
  galleryImages,
  heroImages,
} from "../assets/billboardImages";
import SEO from "../components/SEO";
import LocationsMap from "../components/LocationsMap";
import "./Home.css";

const stats = [
  { number: "30+", label: "Years Experience", icon: <HiStar /> },
  { number: "200+", label: "Billboard Sites", icon: <HiLocationMarker /> },
  { number: "6", label: "Regional Airports", icon: <FaPlane /> },
  { number: "100%", label: "WA Owned", icon: <HiGlobe /> },
];

const services = [
  {
    icon: <FaRoad size={32} />,
    title: "Billboards",
    description:
      "Extensive inventory across WA - from Kimberley through Goldfields to South West.",
    color: "#FF6B35",
    link: "/services#billboards",
  },
  {
    icon: <FaPlane size={32} />,
    title: "Airports",
    description:
      "Advertising rights to most of WA's regional airports for maximum exposure.",
    color: "#3B82F6",
    link: "/services#airports",
  },
  {
    icon: <FaDesktop size={32} />,
    title: "Digital",
    description:
      "Moving to digital with multi-faced screens across regional WA locations.",
    color: "#6366F1",
    link: "/services#digital",
  },
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
    <main className="home">
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
            logo: {
              "@type": "ImageObject",
              url: "https://wabillboards.com.au/og-image.jpg",
            },
            description:
              "Western Australia's largest privately owned outdoor media company. Billboard advertising, airport ads & digital displays since 1991.",
            foundingDate: "1991",
            founder: {
              "@type": "Person",
              name: "Stephen Robinson",
            },
            areaServed: {
              "@type": "State",
              name: "Western Australia",
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "40B Boulder Road",
              addressLocality: "Malaga",
              addressRegion: "WA",
              postalCode: "6090",
              addressCountry: "AU",
            },
            telephone: "+61-8-9248-5070",
            email: "sales@wabillboards.com.au",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              telephone: "+61-8-9248-5070",
              email: "sales@wabillboards.com.au",
              areaServed: "AU",
              availableLanguage: "English",
            },
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
            address: {
              "@type": "PostalAddress",
              streetAddress: "40B Boulder Road",
              addressLocality: "Malaga",
              addressRegion: "WA",
              postalCode: "6090",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -31.8587,
              longitude: 115.8985,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
              ],
              opens: "08:30",
              closes: "17:00",
            },
            description:
              "Western Australia's largest privately owned outdoor media company offering billboard advertising, airport advertising and digital displays since 1991.",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://wabillboards.com.au/#website",
            name: "WA Billboards",
            url: "https://wabillboards.com.au",
            publisher: {
              "@id": "https://wabillboards.com.au/#organization",
            },
          },
        ]}
      />
      {/* Hero Section - Full Width Billboard Slideshow */}
      <section className="hero">
        {/* Slider area with images */}
        <div className="hero__slideshow">
          {heroSlides.map((slide, i) => (
            <div
              key={i}
              className={`hero__slide ${currentSlide === i ? "hero__slide--active" : ""}`}
            >
              <img
                src={slide.image}
                alt={slide.label}
                className="hero__slide-img"
              />
            </div>
          ))}

          {/* Slide navigation arrows - inside slideshow for mobile positioning */}
          <button
            className="hero__arrow hero__arrow--prev"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <HiChevronLeft size={32} />
          </button>
          <button
            className="hero__arrow hero__arrow--next"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <HiChevronRight size={32} />
          </button>

          {/* Slide label on image (mobile) */}
          <div className="hero__slide-badge-mobile">
            {heroSlides[currentSlide].label}
          </div>
        </div>

        {/* Bottom gradient for text readability (desktop only) */}
        <div className="hero__gradient-bottom" />

        {/* Content overlay at the bottom (desktop) / Content card below slider (mobile) */}
        <div className="hero__overlay-content">
          <div className="container">
            <motion.div
              className="hero__text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero__badge">
                WA's Largest Outdoor Media Company
              </span>
              <h1 className="hero__title">
                Make Your Brand
                <span className="hero__title-highlight"> Impossible </span>
                to Ignore
              </h1>
              <p className="hero__subtitle">
                Captivating billboard advertising across Western Australia. From
                Perth metro to the Kimberley — we put your brand in front of the
                right audience, every day.
              </p>
              <div className="hero__actions">
                <Link to="/contact" className="btn btn-primary btn-lg">
                  Get Started <HiArrowRight />
                </Link>
                <Link to="/services" className="btn btn-outline btn-lg">
                  <HiPlay /> Our Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slide dots + current label */}
        <div className="hero__slide-nav">
          <span className="hero__slide-label">
            {heroSlides[currentSlide].label}
          </span>
          <div className="hero__dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`hero__dot ${currentSlide === i ? "hero__dot--active" : ""}`}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <span className="hero__slide-counter">
            {String(currentSlide + 1).padStart(2, "0")} /{" "}
            {String(heroSlides.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-bar__grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="stats-bar__item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="stats-bar__icon">{stat.icon}</div>
                <div className="stats-bar__number">{stat.number}</div>
                <div className="stats-bar__label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Map */}
      <LocationsMap />

      {/* Services Preview */}
      <section className="home-services">
        <div className="container">
          <div className="home-services__header">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">
              Outdoor Advertising{" "}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="section-subtitle">
              From traditional billboards to cutting-edge digital displays, we
              have the perfect advertising solution for your business.
            </p>
          </div>

          <div className="home-services__grid">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Link to={service.link} className="service-card">
                  <div
                    className="service-card__icon"
                    style={{
                      background: `${service.color}15`,
                      color: service.color,
                    }}
                  >
                    {service.icon}
                  </div>
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__desc">{service.description}</p>
                  <span className="service-card__link">
                    Learn More <HiArrowRight />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Billboard Gallery */}
      <section className="home-gallery">
        <div className="container">
          <div className="home-gallery__header">
            <span className="section-tag">Our Billboard Network</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Locations</span>
            </h2>
            <p className="section-subtitle">
              Explore our extensive network of billboard locations across
              Western Australia.
            </p>
          </div>

          <div className="home-gallery__grid">
            {billboardImages.slice(0, 6).map((image, i) => (
              <BillboardCard key={image.id} image={image} index={i} />
            ))}
          </div>

          <div className="home-gallery__cta">
            <Link to="/locations" className="btn btn-primary">
              View All Locations <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Marquee */}
      <section className="marquee-section">
        <div className="marquee">
          <div className="marquee__track">
            {[...galleryImages, ...galleryImages].map((img, i) => (
              <div key={i} className="marquee__item">
                <img
                  src={img}
                  alt={`WA Billboards outdoor advertising showcase ${i + 1}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <div className="why-us__layout">
            <motion.div
              className="why-us__content"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-tag">Why WA Billboards</span>
              <h2 className="section-title">
                One of the Last{" "}
                <span className="gradient-text">Privately Owned</span> Outdoor
                Media Companies in WA
              </h2>
              <p className="why-us__text">
                Since 1991, WA Billboards has been the trusted name in outdoor
                advertising. Our independence means we can react quickly to
                client needs and offer competitive rates without corporate red
                tape.
              </p>

              <div className="why-us__features">
                <div className="why-us__feature">
                  <div
                    className="why-us__feature-dot"
                    style={{ background: "var(--gray-900)" }}
                  />
                  <span>Family-owned & operated since 1991</span>
                </div>
                <div className="why-us__feature">
                  <div
                    className="why-us__feature-dot"
                    style={{ background: "var(--gray-900)" }}
                  />
                  <span>
                    Australia-wide representation via oOh! Media & JCDecaux
                  </span>
                </div>
                <div className="why-us__feature">
                  <div
                    className="why-us__feature-dot"
                    style={{ background: "var(--gray-900)" }}
                  />
                  <span>Cyclone-rated billboards built in-house</span>
                </div>
              </div>

              <Link to="/about" className="btn btn-primary">
                Our Story <HiArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="why-us__images"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="why-us__image-grid">
                <img
                  src={galleryImages[3]}
                  alt="Billboard advertising on busy Western Australia highway"
                  className="why-us__img why-us__img--1"
                />
                <img
                  src={galleryImages[4]}
                  alt="WA Billboards regional billboard site at sunset"
                  className="why-us__img why-us__img--2"
                />
                <img
                  src={galleryImages[5]}
                  alt="WA Billboards team servicing remote billboard location"
                  className="why-us__img why-us__img--3"
                />
                <div className="why-us__img-accent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Strip */}
      <section className="partners">
        <div className="container">
          <p className="partners__label">National Sales Representation</p>
          <div className="partners__logos">
            {partners.map((partner, i) => (
              <div key={i} className="partners__logo">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="home-cta">
        <div className="container">
          <div className="home-cta__card">
            <div className="home-cta__bg" />
            <div className="home-cta__content">
              <h2 className="home-cta__title">Ready to Make an Impact?</h2>
              <p className="home-cta__text">
                Let's find the perfect billboard location for your business.
                Contact us today for a free consultation.
              </p>
              <div className="home-cta__actions">
                <Link to="/contact" className="btn btn-secondary btn-lg">
                  Contact Us <HiArrowRight />
                </Link>
                <Link to="/locations" className="btn btn-outline btn-lg">
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
