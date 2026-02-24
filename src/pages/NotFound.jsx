import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HiArrowRight, HiHome } from 'react-icons/hi'
import SEO from '../components/SEO'
import './NotFound.css'

export default function NotFound() {
  return (
    <main className="not-found">
      <SEO
        title="Page Not Found"
        path="/404"
        description="The page you're looking for doesn't exist. Browse WA Billboards for outdoor advertising, billboard locations, airport ads and digital displays across Western Australia."
      />

      <section className="not-found__section">
        <div className="container">
          <motion.div
            className="not-found__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="not-found__code">404</span>
            <h1 className="not-found__title">Page Not Found</h1>
            <p className="not-found__text">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </p>
            <div className="not-found__actions">
              <Link to="/" className="btn btn-primary btn-lg">
                <HiHome /> Back to Home
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg">
                Contact Us <HiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
