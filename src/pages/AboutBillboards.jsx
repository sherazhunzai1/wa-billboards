import { motion } from 'framer-motion'
import CtaSection from '../components/CtaSection'
import { SectionHeading, Sticker, bouncy, staggerParent, popChild } from '../components/Playful'
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
    <main className="bg-cream min-h-screen text-ink">
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
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={galleryImages[1]} alt="Billboard formats and sizes offered by WA Billboards across Western Australia" className="w-full h-full object-cover" />
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
                Billboard Knowledge
              </span>
            </motion.div>
            <motion.h1 variants={popChild} className="text-5xl md:text-7xl font-semibold text-white leading-[1.02] mb-4">About<br />Billboards</motion.h1>
            <motion.p variants={popChild} className="text-lg text-white/90 font-semibold max-w-xl">
              Big Spaces for Big Ideas — from classic 24 Sheets to spectacular digital displays, understand the billboard formats that make outdoor advertising so powerful.
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

      {/* Intro */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="The Evolution"
            title={<>What is a <span className="text-primary">billboard?</span></>}
            sub="Traditionally billboards were seen as fixed advertising panels located in various areas to exhibit an advertiser's message, and were displayed in standardised sizes and formats. In more recent years the definition of 'billboard' has evolved to include a wide variety of layouts, designs and styles including bus shelters, electronic and digital signage. This transformation has revolutionised the industry, resulting in businesses re-branding themselves to become overall Out of Home media providers."
          />
        </div>
      </section>

      {/* Formats */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <SectionHeading
            eyebrow="Billboard Formats"
            title={<>Our <span className="text-primary">Formats</span></>}
            sub="WA Billboards offers a range of billboard sizes to suit every campaign and budget."
          />

          <motion.div
            className="space-y-8"
            variants={staggerParent}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
          >
            {formats.map((format, i) => (
              <motion.div
                key={format.name}
                variants={popChild}
                whileHover={{ y: -6 }}
                transition={bouncy}
                className="bg-white rounded-[2rem] border-2 border-ink/5 shadow-soft overflow-hidden"
              >
                <div className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch`}>
                  <div className="w-full lg:w-1/2 bg-peach/40 flex items-center justify-center p-6">
                    <motion.img
                      src={format.image}
                      alt={`${format.name} billboard format — ${format.width} wide x ${format.height} high`}
                      className={`w-full h-auto object-contain rounded-2xl ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'}`}
                      whileHover={{ rotate: 0, scale: 1.02 }}
                      transition={bouncy}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 p-8 md:p-12 space-y-6">
                    <Sticker className="bg-peach text-primary-deep">{format.name}</Sticker>
                    <div className="flex items-center gap-6">
                      <div className="rounded-2xl bg-cream px-5 py-4 text-center">
                        <span className="block text-xs font-extrabold uppercase tracking-wider text-ink-soft mb-1">Width</span>
                        <span className="block text-3xl md:text-4xl font-semibold text-primary">{format.width}</span>
                      </div>
                      <div className="rounded-2xl bg-cream px-5 py-4 text-center">
                        <span className="block text-xs font-extrabold uppercase tracking-wider text-ink-soft mb-1">Height</span>
                        <span className="block text-3xl md:text-4xl font-semibold text-accent">{format.height}</span>
                      </div>
                    </div>
                    <p className="text-ink-soft font-semibold leading-relaxed text-lg">{format.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
