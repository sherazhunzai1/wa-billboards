import { Helmet } from 'react-helmet-async'

const defaults = {
  siteName: 'WA Billboards',
  siteUrl: 'https://wabillboards.com.au',
  defaultDescription: "WA Billboards — Western Australia's largest privately owned outdoor media company since 1991. 200+ billboard sites, 6 regional airports & digital displays across Perth metro, Karratha, Port Hedland, Kalgoorlie & more.",
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
  noindex = false,
}) {
  const fullTitle = title
    ? `${title} | ${defaults.siteName}`
    : `${defaults.siteName} | Billboard Advertising Perth & Western Australia Since 1991`
  const desc = description || defaults.defaultDescription
  const url = `${defaults.siteUrl}${path}`
  const ogImage = image
    ? (image.startsWith('http') ? image : `${defaults.siteUrl}${image}`)
    : `${defaults.siteUrl}${defaults.defaultImage}`

  const schemas = []

  if (jsonLd) {
    if (Array.isArray(jsonLd)) {
      schemas.push(...jsonLd)
    } else {
      schemas.push(jsonLd)
    }
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

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content="AU-WA" />
      <meta name="geo.placename" content="Malaga, Western Australia" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:locale" content="en_AU" />
      <meta property="og:site_name" content={defaults.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title ? `${title} — WA Billboards` : 'WA Billboards outdoor advertising'} />

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
