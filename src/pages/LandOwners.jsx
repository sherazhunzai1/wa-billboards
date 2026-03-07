import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiPhone, HiMail, HiDownload } from "react-icons/hi";
import { FaHandshake, FaMoneyBillWave, FaCalendarAlt } from "react-icons/fa";
import { galleryImages } from "../assets/billboardImages";
import landOwnersPdf from "../assets/pdf/Land-Owners.pdf";
import SEO from "../components/SEO";

const benefits = [
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Steady Income",
    desc: "A strong and steady stream of income for the duration of your contract period.",
    color: "#FF6B35",
  },
  {
    icon: <FaCalendarAlt size={28} />,
    title: "Flexible Contracts",
    desc: "Contracts starting at 3 years with the option to extend further.",
    color: "#E040FB",
  },
  {
    icon: <FaHandshake size={28} />,
    title: "Long-Term Relationships",
    desc: "We maintain strong relationships with our land owners, some for over 20 years.",
    color: "#00E5FF",
  },
];

export default function LandOwners() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <SEO
        title="Land Owners — Earn Income Hosting a Billboard on Your Property"
        path="/land-owners"
        description="Earn steady income from your commercial property with a WA Billboards partnership. Billboard hosting contracts from 3+ years. Call 08 9248 5070 for Perth metro & regional WA opportunities."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Land Owners", path: "/land-owners" },
        ]}
      />

      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryImages[4]}
            alt="Billboard site on commercial property in Western Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 mb-6">Partner With Us</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Land Owners</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Turn your commercial property into a steady source of income with
              a WA Billboards partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            <motion.div
              className="w-full lg:w-1/2 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20">Opportunity</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Your Property, Our{" "}
                <span className="gradient-text">Billboards</span>
              </h2>
              <p className="text-white/60 leading-relaxed">
                WA Billboards prides itself on providing clients with a vast
                range of billboards across metro and regional Western Australia.
                By offering diverse sizes, directions, areas and options WA
                Billboards has been successful in an otherwise competitive Out
                of Home media industry. As a result we are constantly seeking
                new sites and locations to add to our impressive inventory.
              </p>
              <p className="text-white/60 leading-relaxed">
                If you are a commercial land owner on a busy road and have a
                blank wall or roof angled towards passing cars, or if you have a
                vacant block of land which does not currently have plans for
                redevelopment, then you may be the perfect candidate for a
                billboard.
              </p>
              <p className="text-white/60 leading-relaxed">
                WA Billboards offers land owners a strong and steady stream of
                income for a contract period, which can start at 3 years and
                extend on from there. We maintain strong relationships with our
                land owners, some of which have been around for over 20 years
                with us.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl overflow-hidden hover-lift">
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
      <section className="py-20 md:py-28 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">Why Partner With Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Benefits for <span className="gradient-text">Land Owners</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="glass rounded-2xl p-8 text-center hover-lift"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{ background: `${b.color}15`, color: b.color }}
                >
                  {b.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{b.title}</h3>
                <p className="text-white/50 leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20" />
            <div className="absolute inset-0 glass-dark" />
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Interested in Becoming a Valued Land Owner?</h2>
              <p className="text-lg text-white/60 mb-6 max-w-xl mx-auto">
                Download our PDF for more information or contact Steve directly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:0892485070"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <HiPhone className="text-orange-400" /> 08 9248 5070
                </a>
                <a
                  href="mailto:sales@wabillboards.com.au"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
                >
                  <HiMail className="text-orange-400" /> sales@wabillboards.com.au
                </a>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={landOwnersPdf}
                  download="Land-Owners.pdf"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
                >
                  <HiDownload /> Download PDF
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300">
                  Contact Us <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
