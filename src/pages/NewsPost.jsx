import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowLeft, HiArrowRight, HiCalendar, HiUser, HiClock, HiTag } from 'react-icons/hi'

import posts from '../data/posts'
import SEO from '../components/SEO'
import './NewsPost.css'

export default function NewsPost() {
  const { slug } = useParams()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return <Navigate to="/news" replace />
  }

  const currentIndex = posts.findIndex((p) => p.id === post.id)
  const prevPost = currentIndex > 0 ? posts[currentIndex - 1] : null
  const nextPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null

  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <main className="news-post">
      <SEO
        title={post.title}
        path={`/news/${post.slug}`}
        description={post.excerpt}
        type="article"
        article={{
          publishedTime: new Date(post.date).toISOString(),
          author: post.author,
          section: post.category,
        }}
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'News', path: '/news' },
          { name: post.title, path: `/news/${post.slug}` },
        ]}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: post.title,
          description: post.excerpt,
          image: `https://wabillboards.com.au${post.image}`,
          datePublished: new Date(post.date).toISOString(),
          author: {
            '@type': 'Person',
            name: post.author,
          },
          publisher: {
            '@type': 'Organization',
            name: 'WA Billboards',
            logo: {
              '@type': 'ImageObject',
              url: 'https://wabillboards.com.au/og-image.jpg',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://wabillboards.com.au/news/${post.slug}`,
          },
        }}
      />

      {/* Hero Image */}
      <section className="news-post__hero">
        <div className="news-post__hero-bg">
          <img src={post.image} alt={post.title} />
          <div className="news-post__hero-overlay" />
        </div>
        <div className="news-post__hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/news" className="news-post__back">
              <HiArrowLeft /> Back to News
            </Link>
            <span className="news-post__category">{post.category}</span>
            <h1 className="news-post__title">{post.title}</h1>
            <div className="news-post__meta">
              <span className="news-post__meta-item">
                <HiCalendar /> {post.date}
              </span>
              <span className="news-post__meta-item">
                <HiUser /> {post.author}
              </span>
              <span className="news-post__meta-item">
                <HiClock /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="news-post__body">
        <div className="container">
          <motion.article
            className="news-post__article"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="news-post__content">
              {post.content.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Tags & Share */}
            <div className="news-post__footer">
              <div className="news-post__tags">
                <HiTag />
                <span className="news-post__tag">{post.category}</span>
              </div>
            </div>
          </motion.article>

          {/* Post Navigation */}
          <nav className="news-post__nav">
            {prevPost ? (
              <Link to={`/news/${prevPost.slug}`} className="news-post__nav-link news-post__nav-link--prev">
                <HiArrowLeft className="news-post__nav-arrow" />
                <div>
                  <span className="news-post__nav-label">Previous</span>
                  <span className="news-post__nav-title">{prevPost.title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextPost ? (
              <Link to={`/news/${nextPost.slug}`} className="news-post__nav-link news-post__nav-link--next">
                <div>
                  <span className="news-post__nav-label">Next</span>
                  <span className="news-post__nav-title">{nextPost.title}</span>
                </div>
                <HiArrowRight className="news-post__nav-arrow" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="news-post__related">
          <div className="container">
            <h2 className="news-post__related-heading">
              More <span className="gradient-text">News</span>
            </h2>
            <div className="news-post__related-grid">
              {relatedPosts.map((rp, i) => (
                <motion.div
                  key={rp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/news/${rp.slug}`} className="news-post__related-card">
                    <div className="news-post__related-img-wrap">
                      <img src={rp.image} alt={rp.title} loading="lazy" />
                    </div>
                    <div className="news-post__related-body">
                      <span className="news-post__related-date">{rp.date}</span>
                      <h3 className="news-post__related-title">{rp.title}</h3>
                      <span className="news-post__related-link">
                        Read News <HiArrowRight />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="news-post__cta">
        <div className="container">
          <div className="news-post__cta-card">
            <div className="news-post__cta-bg" />
            <div className="news-post__cta-content">
              <h2>Interested in Advertising?</h2>
              <p>Contact us to discuss billboard, airport, and digital advertising options.</p>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get in Touch <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
