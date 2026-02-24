import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'WA Billboards',
  siteUrl: 'https://wabillboards.com.au',
  defaultDescription: "WA Billboards — the largest billboards in Australia owned by a single family operator. West Australia billboards for metro & regional outdoor advertising, airport ads & digital displays since 1991.",
  defaultImage: '/og-image.jpg',
}

export default function SEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
  article,
  breadcrumbs,
  jsonLd,
}) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} | Western Australia's Largest Outdoor Media Company`
  const desc = description || defaults.defaultDescription
  const url = `${defaults.siteUrl}${path}`
  const ogImage = image || `${defaults.siteUrl}${defaults.defaultImage}`

  const schemas = []

  // Organization schema (injected on homepage)
  if (jsonLd) {
    schemas.push(jsonLd)
  }

  // BreadcrumbList schema
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: breadcrumbs.map((crumb, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: crumb.name,
        item: `${defaults.siteUrl}${crumb.path}`,
      })),
    })
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />

      {/* Article-specific OG tags */}
      {article && article.publishedTime && (
        <meta property="article:published_time" content={article.publishedTime} />
      )}
      {article && article.author && (
        <meta property="article:author" content={article.author} />
      )}
      {article && article.section && (
        <meta property="article:section" content={article.section} />
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD Structured Data */}
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  )
}
