import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'WA Billboards',
  siteUrl: 'https://wabillboards.com.au',
  defaultDescription: "WA Billboards — the largest billboards in Australia owned by a single family operator. West Australia billboards for metro & regional outdoor advertising, airport ads & digital displays since 1991.",
  defaultImage: '/og-image.jpg',
}

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} | Western Australia's Largest Outdoor Media Company`
  const desc = description || defaults.defaultDescription
  const url = `${defaults.siteUrl}${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${defaults.siteUrl}${defaults.defaultImage}`} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={`${defaults.siteUrl}${defaults.defaultImage}`} />
    </Helmet>
  )
}
