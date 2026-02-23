import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiCalendar, HiUser, HiClock } from 'react-icons/hi'
import { galleryImages } from '../assets/billboardImages'
import posts from '../data/posts'
import SEO from '../components/SEO'
import './News.css'

const categories = ['All', ...new Set(posts.map((p) => p.category))]

export default function News() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category === activeCategory)

  return (
    <main className="news">
      <SEO
        title="News"
        path="/news"
        description="Latest news and updates from WA Billboards — billboards Australia industry insights, new west Australia billboards installations, airport advertising and digital display projects."
      />

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header__bg">
          <img
            src={galleryImages[2]}
            alt="WA Billboards latest news and blog updates"
          />
          <div className="page-header__overlay" />
        </div>
        <div className="page-header__content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">Latest Updates</span>
            <h1 className="page-header__title">News & Insights</h1>
            <p className="page-header__subtitle">
              Stay up to date with the latest projects, installations, and
              industry news from WA Billboards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="news-filters">
        <div className="container">
          <div className="news-filters__bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`news-filters__btn ${activeCategory === cat ? 'news-filters__btn--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="news-grid-section">
        <div className="container">
          {filtered.length === 0 ? (
            <div className="news-empty">
              <p>No posts found in this category.</p>
            </div>
          ) : (
            <div className="news-grid">
              {filtered.map((post, i) => (
                <motion.article
                  key={post.id}
                  className="news-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link to={`/news/${post.slug}`} className="news-card__image-wrap">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="news-card__image"
                      loading="lazy"
                    />
                    <div className="news-card__image-overlay">
                      <div className="news-card__category">{post.category}</div>
                      <h2 className="news-card__image-title">{post.title}</h2>
                    </div>
                  </Link>

                  <div className="news-card__body">
                    <div className="news-card__meta">
                      <span className="news-card__meta-item">
                        <HiCalendar /> {post.date}
                      </span>
                      <span className="news-card__meta-item">
                        <HiUser /> {post.author}
                      </span>
                      <span className="news-card__meta-item">
                        <HiClock /> {post.readTime}
                      </span>
                    </div>

                    <Link to={`/news/${post.slug}`}>
                      <h2 className="news-card__title">{post.title}</h2>
                    </Link>

                    <p className="news-card__excerpt">{post.excerpt}</p>
                    <Link to={`/news/${post.slug}`} className="news-card__toggle">
                      Read More <HiArrowRight />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="news-cta">
        <div className="container">
          <div className="news-cta__card">
            <div className="news-cta__bg" />
            <div className="news-cta__content">
              <h2>Want to Advertise with WA Billboards?</h2>
              <p>
                Get in touch to discuss billboard, airport, and digital
                advertising options across Western Australia.
              </p>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
