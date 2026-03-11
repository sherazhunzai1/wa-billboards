import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight, HiPhone, HiMail, HiDownload } from "react-icons/hi";
import { galleryImages } from "../assets/billboardImages";
import landOwnersPdf from "../assets/pdf/Land-Owners.pdf";
import SEO from "../components/SEO";

const benefits = [
  {
    num: "01",
    title: "Steady Income",
    desc: "A strong and steady stream of income for the duration of your contract period.",
  },
  {
    num: "02",
    title: "Flexible Contracts",
    desc: "Contracts starting at 3 years with the option to extend further.",
  },
  {
    num: "03",
    title: "Long-Term Relationships",
    desc: "We maintain strong relationships with our land owners, some for over 20 years.",
  },
];

export default function LandOwners() {
  return (
    <main className="bg-charcoal min-h-screen">
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
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={galleryImages[4]}
            alt="Billboard site on commercial property in Western Australia"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="stamp mb-6 inline-block">Partner With Us</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">Land<br />Owners</h1>
            <p className="text-lg text-ash max-w-xl">
              Big Spaces for Big Ideas — turn your commercial property into a steady source of income with a WA Billboards partnership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
            <motion.div
              className="w-full lg:w-3/5 space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-6 h-px bg-lime" />
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Opportunity</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-chalk">
                Your Property, Our Billboards
              </h2>
              <p className="text-ash leading-relaxed">
                WA Billboards prides itself on providing clients with a vast
                range of billboards across metro and regional Western Australia.
                By offering diverse sizes, directions, areas and options WA
                Billboards has been successful in an otherwise competitive Out
                of Home media industry. As a result we are constantly seeking
                new sites and locations to add to our impressive inventory.
              </p>
              <p className="text-ash leading-relaxed">
                If you are a commercial land owner on a busy road and have a
                blank wall or roof angled towards passing cars, or if you have a
                vacant block of land which does not currently have plans for
                redevelopment, then you may be the perfect candidate for a
                billboard.
              </p>
              <p className="text-ash leading-relaxed">
                WA Billboards offers land owners a strong and steady stream of
                income for a contract period, which can start at 3 years and
                extend on from there. We maintain strong relationships with our
                land owners, some of which have been around for over 20 years
                with us.
              </p>
            </motion.div>

            <motion.div
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="overflow-hidden">
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
      <section className="py-20 md:py-28 bg-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-lime" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Why Partner With Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-chalk">
              Benefits for Land Owners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="bg-charcoal p-8 border-r border-black/5 last:border-r-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-xs font-mono text-lime mb-4">{b.num}</div>
                <h3 className="text-xl font-bold uppercase tracking-tight text-chalk mb-3">{b.title}</h3>
                <p className="text-ash leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime p-12 md:p-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-white mb-4">Big Spaces for Big Ideas</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl">
            Download our PDF for more information or contact Steve directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="tel:0892485070"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold"
            >
              <HiPhone /> 08 9248 5070
            </a>
            <a
              href="mailto:sales@wabillboards.com.au"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors font-bold"
            >
              <HiMail /> sales@wabillboards.com.au
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={landOwnersPdf}
              download="Land-Owners.pdf"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-charcoal font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/90"
            >
              <HiDownload /> Download PDF
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 border border-white/30 text-white font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-white/10">
              Contact Us <HiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
