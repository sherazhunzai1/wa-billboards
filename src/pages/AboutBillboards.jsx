import { motion } from 'framer-motion'
import CtaSection from '../components/CtaSection'
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
  },
  {
    name: 'Super 8',
    width: '8.3M',
    height: '2.2M',
    image: imgSuper8,
    description:
      "Super 8's have become popular in recent years as they offer an alternative option to the full size Supersites. This format is very similar at a 4:1 ratio, however it boasts a lower price point. A true Super 8 is placed on a major highway, and will include flood lighting.",
  },
  {
    name: 'Supersite',
    width: '12.6M',
    height: '3.3M',
    image: imgSupersite,
    description:
      'Supersites are the standard fare for large format advertising and always include flood lighting for night time viewing. This format is often situated in urban, metropolitan and high traffic locations.',
  },
  {
    name: 'Spectacular',
    width: '15M',
    height: '5M',
    image: imgSpectacular,
    description:
      "'Spectacular' is a broad name that covers any panel larger than a Supersite. WA Billboards has one Spectacular billboard which measures a whopping 15m x 5m. The most common Spectacular format is 18m x 4m.",
  },
  {
    name: 'Digital',
    width: 'Various',
    height: 'Sizes',
    image: imgDigital,
    description:
      'Digital billboards offer a strong and diverse advertising option for clients. This format is versatile and can display still images as well as video. Advertisers have the ability to be selective, reactive and creative.',
  },
]

export default function AboutBillboards() {
  return (
    <main className="bg-charcoal min-h-screen">
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

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[1]} alt="Billboard formats and sizes offered by WA Billboards across Western Australia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="stamp mb-6 inline-block">Billboard Knowledge</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white mb-4">About<br />Billboards</h1>
            <p className="text-lg text-ash max-w-xl">
              Big Spaces for Big Ideas — from classic 24 Sheets to spectacular digital displays, understand the billboard formats that make outdoor advertising so powerful.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-lime" />
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">The Evolution</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-6">
              What Is a Billboard?
            </h2>
            <p className="text-lg text-ash leading-relaxed">
              Traditionally billboards were seen as fixed advertising panels located in various areas to exhibit an advertiser's message, and were displayed in standardised sizes and formats. In more recent years the definition of 'billboard' has evolved to include a wide variety of layouts, designs and styles including bus shelters, electronic and digital signage. This transformation has revolutionised the industry, resulting in businesses re-branding themselves to become overall Out of Home media providers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formats */}
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-px bg-lime" />
            <span className="text-xs font-bold uppercase tracking-[0.15em] text-lime">Billboard Formats</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            Our Formats
          </h2>
          <p className="text-lg text-ash max-w-2xl">
            WA Billboards offers a range of billboard sizes to suit every campaign and budget.
          </p>
        </div>

        <div>
          {formats.map((format, i) => (
            <motion.div
              key={format.name}
              className={`${i % 2 === 0 ? 'bg-charcoal' : 'bg-charcoal-light'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={`max-w-7xl mx-auto flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                <div className="w-full lg:w-1/2">
                  <img src={format.image} alt={`${format.name} billboard format — ${format.width} wide x ${format.height} high`} className="w-full h-auto object-cover" />
                </div>
                <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 py-12 space-y-6">
                  <span className="stamp inline-block">{format.name}</span>
                  <div className="flex items-center gap-8">
                    <div>
                      <span className="block text-xs uppercase tracking-[0.15em] text-ash mb-1">Width</span>
                      <span className="block text-4xl md:text-5xl font-mono font-bold text-lime">{format.width}</span>
                    </div>
                    <div className="w-px h-16 bg-white/10" />
                    <div>
                      <span className="block text-xs uppercase tracking-[0.15em] text-ash mb-1">Height</span>
                      <span className="block text-4xl md:text-5xl font-mono font-bold text-lime">{format.height}</span>
                    </div>
                  </div>
                  <p className="text-ash leading-relaxed text-lg">{format.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaSection
        subtitle="Our team can help you pick the perfect format for your campaign goals and budget."
        primary={{ to: '/contact', label: 'Get in Touch' }}
        secondary={{ to: '/services', label: 'View Our Services' }}
      />
    </main>
  )
}
