import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'
import { galleryImages } from '../assets/billboardImages'
import img24Sheet from '../assets/images/billboards/24-Sheet.png'
import imgSuper8 from '../assets/images/billboards/super 8.png'
import imgSupersite from '../assets/images/billboards/Supersite.png'
import imgSpectacular from '../assets/images/billboards/Spectacular.png'
import imgDigital from '../assets/images/billboards/Digital.png'
import SEO from '../components/SEO'

const formats = [
  {
    name: '24 Sheet',
    width: '6M',
    height: '3M',
    image: img24Sheet,
    description:
      "The vast majority of WA Billboards' inventory is made up of 6m x 3m 24 Sheet billboards. The term '24 Sheet' relates back to when it took 24 sheets of paper to bill-post a board. This format is commonly featured in metro and regional areas and across several of WA's main highways. This format is a cost-effective solution for both local and national advertisers to display their message.",
    color: '#FF6B35',
  },
  {
    name: 'Super 8',
    width: '8.3M',
    height: '2.2M',
    image: imgSuper8,
    description:
      "Super 8's have become popular in recent years as they offer an alternative option to the full size Supersites. This format is very similar at a 4:1 ratio, however it boasts a lower price point. A true Super 8 is placed on a major highway, and will include flood lighting.",
    color: '#FF4858',
  },
  {
    name: 'Supersite',
    width: '12.6M',
    height: '3.3M',
    image: imgSupersite,
    description:
      'Supersites are the standard fare for large format advertising and always include flood lighting for night time viewing. This format is often situated in urban, metropolitan and high traffic locations.',
    color: '#E040FB',
  },
  {
    name: 'Spectacular',
    width: '15M',
    height: '5M',
    image: imgSpectacular,
    description:
      "'Spectacular' is a broad name that covers any panel larger than a Supersite. WA Billboards has one Spectacular billboard which measures a whopping 15m x 5m. The most common Spectacular format is 18m x 4m.",
    color: '#FFC857',
  },
  {
    name: 'Digital',
    width: 'Various',
    height: 'Sizes',
    image: imgDigital,
    description:
      'Digital billboards offer a strong and diverse advertising option for clients. This format is versatile and can display still images as well as video. Advertisers have the ability to be selective, reactive and creative.',
    color: '#00E5FF',
  },
]

export default function AboutBillboards() {
  return (
    <main className="bg-[#0a0a0f] min-h-screen">
      <SEO
        title="Billboard Sizes & Formats — 24 Sheet, Super 8, Supersite, Spectacular & Digital"
        path="/about-billboards"
        description="Compare billboard sizes and formats: 24 Sheet (6m x 3m), Super 8 (8.3m x 2.2m), Supersite (12.6m x 3.3m), Spectacular (15m x 5m) & Digital. Perth & WA billboard advertising guide from WA Billboards."
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About Billboards', path: '/about-billboards' },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a 24 Sheet billboard?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A 24 Sheet billboard measures 6m wide x 3m high and is the most common billboard format in Western Australia. The term "24 Sheet" dates back to when it took 24 sheets of paper to bill-post a board. This format is cost-effective for both local and national advertisers.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is a Super 8 billboard?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Super 8 billboard measures 8.3m wide x 2.2m high with a 4:1 ratio. It offers an alternative to full-size Supersites at a lower price point. A true Super 8 is placed on a major highway and includes flood lighting.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is a Supersite billboard?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A Supersite billboard measures 12.6m wide x 3.3m high and is the standard for large format advertising. Supersites always include flood lighting for night-time viewing and are situated in urban, metropolitan and high-traffic locations.',
              },
            },
            {
              '@type': 'Question',
              name: 'What are digital billboards?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Digital billboards offer versatile advertising with the ability to display still images and video. Advertisers can be selective, reactive and creative with their messaging. WA Billboards operates digital screens at Karratha Airport, Newman and Kalgoorlie.',
              },
            },
            {
              '@type': 'Question',
              name: 'What billboard sizes does WA Billboards offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'WA Billboards offers five main billboard formats: 24 Sheet (6m x 3m), Super 8 (8.3m x 2.2m), Supersite (12.6m x 3.3m), Spectacular (15m x 5m), and various Digital display sizes across Perth metro and regional Western Australia.',
              },
            },
          ],
        }}
      />

      {/* Page Header */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[1]} alt="Billboard formats and sizes offered by WA Billboards across Western Australia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-[#0a0a0f]/60 to-[#0a0a0f]" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/90 backdrop-blur-sm border border-white/10 mb-6">Billboard Knowledge</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">About Billboards</h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              From classic 24 Sheets to spectacular digital displays — understand the billboard formats that make outdoor advertising so powerful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">The Evolution</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              What Is a <span className="gradient-text">Billboard?</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Traditionally billboards were seen as fixed advertising panels located in various areas to exhibit an advertiser's message, and were displayed in standardised sizes and formats. In more recent years the definition of 'billboard' has evolved to include a wide variety of layouts, designs and styles including bus shelters, electronic and digital signage. This transformation has revolutionised the industry, resulting in businesses re-branding themselves to become overall Out of Home media providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formats */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 text-orange-400 border border-orange-400/20 mb-4">Billboard Formats</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Formats</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              WA Billboards offers a range of billboard sizes to suit every campaign and budget.
            </p>
          </div>

          <div className="space-y-20">
            {formats.map((format, i) => (
              <motion.div
                key={format.name}
                className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-full lg:w-1/2">
                  <div className="glass rounded-2xl overflow-hidden hover-lift">
                    <img src={format.image} alt={`${format.name} billboard format — ${format.width} wide x ${format.height} high`} className="w-full h-auto object-cover" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <div
                    className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold"
                    style={{ background: `${format.color}18`, color: format.color, border: `1px solid ${format.color}30` }}
                  >
                    {format.name}
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <span className="block text-xs uppercase tracking-wider text-white/40 mb-1">Width</span>
                      <span className="block text-2xl font-bold" style={{ color: format.color }}>{format.width}</span>
                    </div>
                    <div className="w-px h-12 bg-white/10" />
                    <div className="text-center">
                      <span className="block text-xs uppercase tracking-wider text-white/40 mb-1">Height</span>
                      <span className="block text-2xl font-bold" style={{ color: format.color }}>{format.height}</span>
                    </div>
                  </div>
                  <p className="text-white/60 leading-relaxed text-lg">{format.description}</p>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Choose the Right Billboard?</h2>
              <p className="text-lg text-white/60 mb-8 max-w-xl mx-auto">Our team can help you pick the perfect format for your campaign goals and budget.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300">
                  Get in Touch <HiArrowRight />
                </Link>
                <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all duration-300">
                  View Our Services <HiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
