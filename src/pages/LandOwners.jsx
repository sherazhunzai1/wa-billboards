import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiPhone, HiMail, HiDownload, HiOutlineCash, HiOutlineDocumentText, HiOutlineUsers } from "react-icons/hi";
import { galleryImages } from "../assets/billboardImages";
import landOwnersPdf from "../assets/pdf/Land-Owners.pdf";
import { SectionHeading, Sticker, Floater, bouncy, springy, staggerParent, popChild } from "../components/Playful";
import SEO from "../components/SEO";

const benefits = [
  {
    icon: <HiOutlineCash />,
    title: "Steady Income",
    desc: "A strong and steady stream of income for the duration of your contract period.",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "Flexible Contracts",
    desc: "Contracts starting at 3 years with the option to extend further.",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Long-Term Relationships",
    desc: "We maintain strong relationships with our land owners, some for over 20 years.",
  },
];

export default function LandOwners() {
  return (
    <main className="bg-cream min-h-screen text-ink">
      <SEO
        title="Land Owners — Earn Income Hosting a Billboard on Your Property"
        path="/land-owners"
        description="Earn steady income from your commercial property with a WA Billboards partnership. Billboard hosting contracts from 3+ years. Call 08 9248 5070 for Perth metro & regional WA opportunities."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Land Owners", path: "/land-owners" },
        ]}
      />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryImages[4]}
            alt="Billboard site on commercial property in Western Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ink/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pb-20 w-full">
          <motion.div
            variants={staggerParent}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={popChild} className="mb-6">
              <span className="inline-block rounded-full bg-sun px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-ink shadow-lg -rotate-2">
                Partner With Us
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-4">Land<br />Owners</motion.h1>
            <motion.p variants={popChild} className="text-lg text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — turn your commercial property into a steady source of income with a WA Billboards partnership.
            </motion.p>
          </motion.div>
        </div>
        <svg
          className="absolute bottom-0 left-0 w-full text-cream pointer-events-none"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
          aria-hidden
        >
          <path d="M0,55 C240,95 480,20 720,45 C960,70 1200,25 1440,55 L1440,90 L0,90 Z" fill="currentColor" />
        </svg>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <Floater className="top-24 right-8 hidden lg:block" duration={8}>
          <div className="w-20 h-20 rounded-full bg-peach/80" />
        </Floater>
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              className="w-full lg:w-3/5 space-y-6"
              variants={staggerParent}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
            >
              <motion.div variants={popChild}>
                <Sticker className="bg-peach text-primary-deep">Opportunity</Sticker>
              </motion.div>
              <motion.h2 variants={popChild} className="text-4xl md:text-5xl font-semibold text-ink">
                Your property, <span className="text-primary">our billboards</span>
              </motion.h2>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                WA Billboards prides itself on providing clients with a vast
                range of billboards across metro and regional Western Australia.
                By offering diverse sizes, directions, areas and options WA
                Billboards has been successful in an otherwise competitive Out
                of Home media industry. As a result we are constantly seeking
                new sites and locations to add to our impressive inventory.
              </motion.p>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                If you are a commercial land owner on a busy road and have a
                blank wall or roof angled towards passing cars, or if you have a
                vacant block of land which does not currently have plans for
                redevelopment, then you may be the perfect candidate for a
                billboard.
              </motion.p>
              <motion.p variants={popChild} className="text-ink-soft font-semibold leading-relaxed">
                WA Billboards offers land owners a strong and steady stream of
                income for a contract period, which can start at 3 years and
                extend on from there. We maintain strong relationships with our
                land owners, some of which have been around for over 20 years
                with us.
              </motion.p>
            </motion.div>

            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 40, rotate: 4 }}
              whileInView={{ opacity: 1, x: 0, rotate: 2 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={springy}
            >
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-soft-lg">
                <img
                  src={galleryImages[2]}
                  alt="WA Billboards rooftop billboard installed on commercial property"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-peach/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Why Partner With Us"
            title={<>Benefits for <span className="text-primary">land owners</span></>}
          />

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                variants={popChild}
                whileHover={{ y: -8, rotate: i % 2 === 0 ? -1 : 1 }}
                transition={bouncy}
                className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft p-8 md:p-10"
              >
                <span className="inline-flex w-14 h-14 rounded-2xl bg-peach text-primary items-center justify-center text-3xl mb-6">
                  {b.icon}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold text-ink mb-3">{b.title}</h3>
                <p className="text-ink-soft font-semibold leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={springy}
            className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-primary-dark to-primary-deep p-10 md:p-16 lg:p-20 shadow-soft-lg"
          >
            <Floater className="top-10 right-10 hidden md:block" duration={6}>
              <div className="w-16 h-16 rounded-full bg-white/15" />
            </Floater>
            <div className="relative z-10">
              <motion.span
                initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={bouncy}
                className="inline-block rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-white mb-6"
              >
                WA Billboards — Since 1991
              </motion.span>
              <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-[1.05]">
                Big Spaces<br />for Big Ideas.
              </h2>
              <p className="text-white/85 text-lg font-semibold mb-8 max-w-xl">
                Download our PDF for more information or contact Steve directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a
                  href="tel:0892485070"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white/90 hover:text-white hover:bg-white/25 transition-colors font-bold"
                >
                  <HiPhone /> 08 9248 5070
                </a>
                <a
                  href="mailto:sales@wabillboards.com.au"
                  className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white/90 hover:text-white hover:bg-white/25 transition-colors font-bold"
                >
                  <HiMail /> sales@wabillboards.com.au
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={landOwnersPdf}
                  download="Land-Owners.pdf"
                  whileHover={{ scale: 1.06, rotate: -1 }}
                  whileTap={{ scale: 0.92 }}
                  transition={bouncy}
                  className="btn-pop bg-white text-primary-deep px-8 py-4 text-sm shadow-lg"
                >
                  <HiDownload /> Download PDF
                </motion.a>
                <motion.div whileHover={{ scale: 1.06, rotate: 1 }} whileTap={{ scale: 0.92 }} transition={bouncy}>
                  <Link to="/contact" className="btn-pop border-2 border-white/50 text-white px-8 py-4 text-sm hover:bg-white/10">
                    Contact Us <HiArrowRight />
                  </Link>
                </motion.div>
              </div>
            </div>
            <div
              aria-hidden
              className="absolute -bottom-8 right-0 text-[10rem] font-semibold text-white/10 leading-none select-none hidden md:block tracking-tight pointer-events-none"
            >
              Owners
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
