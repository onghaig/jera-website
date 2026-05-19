import { useState, useEffect } from 'react'

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// ============ NAV ============
function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">
          JERA<span className="nav-logo-dot">.</span>
        </span>
        <a href="#access" className="nav-cta">Request Access</a>
      </div>
    </nav>
  )
}

// ============ HERO ============
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-radar">
        <div className="radar-ring radar-ring--1" />
        <div className="radar-ring radar-ring--2" />
        <div className="radar-ring radar-ring--3" />
        <div className="radar-sweep" />
      </div>

      <div className="hero-scanline" />

      <span className="coord coord--tl">42.3601° N, 71.0589° W</span>
      <span className="coord coord--tr">51.5074° N, 0.1278° W</span>
      <span className="coord coord--bl">-11.2027° S, 27.4977° E</span>
      <span className="coord coord--br">-4.3217° S, 15.3222° E</span>

      <div className="hero-content">
        <p className="hero-eyebrow">Geospatial Intelligence Platform</p>
        <h1 className="hero-headline">
          We&rsquo;re building the<br />
          system that{' '}
          <span className="hero-headline--accent">sees it coming.</span>
        </h1>
        <p className="hero-sub">
          Satellite imagery and machine learning that predicts critical mineral
          supply disruptions before they reach your portfolio or factory floor.
        </p>
        <div className="hero-cta-row">
          <a href="#access" className="btn-primary">Request Access</a>
          <a href="#problem" className="btn-secondary">See the Evidence</a>
        </div>
        <div className="hero-scroll-hint">Scroll</div>
      </div>
    </section>
  )
}

// ============ PROBLEM ============
function Problem() {
  return (
    <section className="section section--alt problem" id="problem">
      <div className="container">
        <p className="section-eyebrow fade-up">The Problem</p>
        <h2 className="section-title fade-up delay-1">
          When supply chains break,<br />nobody sees it coming.
        </h2>

        <div className="proof-card fade-up delay-2">
          <div className="proof-card__header">
            <span className="proof-card__label">Incident Log — DRC Cobalt Export Halt</span>
            <span className="proof-card__date">Feb 22, 2025 — 00:00 UTC</span>
          </div>

          <div className="proof-stats">
            <div className="stat">
              <span className="stat__value">74%</span>
              <span className="stat__label">Global cobalt supply disrupted overnight</span>
            </div>
            <div className="stat">
              <span className="stat__value">+70%</span>
              <span className="stat__label">Price spike within 30 days</span>
            </div>
            <div className="stat">
              <span className="stat__value">0</span>
              <span className="stat__label">Funds predicted it in advance</span>
            </div>
          </div>

          <div className="proof-callout">
            <span className="proof-callout__tag">Jera Signal</span>
            <p className="proof-callout__text">
              Our system would have flagged the shutdown pattern 17 days before the DRC halted all cobalt
              exports with zero public warning. Truck movement anomalies and stockpile velocity changes
              at five key mine sites in Katanga Province were already signaling an operational wind-down.
              No other data provider saw it.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ HOW IT WORKS ============
function HowItWorks() {
  return (
    <section className="section how" id="how">
      <div className="container">
        <p className="section-eyebrow fade-up">How It Works</p>
        <h2 className="section-title fade-up delay-1">
          Three layers. One signal.
        </h2>

        <div className="steps">
          <div className="step fade-up delay-1">
            <div className="step__num">01</div>
            <h3 className="step__title">Satellite Collection</h3>
            <p className="step__body">
              Continuous multi-source imagery ingestion across 140+ active mining sites globally.
              Sub-meter resolution updated every 24–48 hours.
            </p>
            <ul className="step__tags">
              <li>SAR imagery</li>
              <li>Optical band analysis</li>
              <li>Historical baseline</li>
              <li>Multi-sensor fusion</li>
            </ul>
          </div>

          <div className="step-connector fade-up delay-2">
            <span className="connector-line" />
            <span className="connector-arrow">→</span>
          </div>

          <div className="step fade-up delay-2">
            <div className="step__num">02</div>
            <h3 className="step__title">ML Analysis</h3>
            <p className="step__body">
              Computer vision models trained on 6 years of ground-truth data classify activity,
              detect anomalies, and model supply velocity in real time.
            </p>
            <ul className="step__tags">
              <li>Object detection</li>
              <li>Anomaly scoring</li>
              <li>Temporal modeling</li>
              <li>Change detection</li>
            </ul>
          </div>

          <div className="step-connector fade-up delay-3">
            <span className="connector-line" />
            <span className="connector-arrow">→</span>
          </div>

          <div className="step fade-up delay-3">
            <div className="step__num">03</div>
            <h3 className="step__title">Signal Delivery</h3>
            <p className="step__body">
              Actionable alerts and data feeds via API, dashboard, or analyst brief—calibrated
              to your decision timeline and risk parameters.
            </p>
            <ul className="step__tags">
              <li>REST API</li>
              <li>Alert thresholds</li>
              <li>Weekly briefings</li>
              <li>Custom feeds</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ WHAT YOU GET ============
function WhatYouGet() {
  return (
    <section className="section section--alt products" id="products">
      <div className="container">
        <p className="section-eyebrow fade-up">What You Get</p>
        <h2 className="section-title fade-up delay-1">
          Signals that move before the market does.
        </h2>

        <div className="products-grid">
          <div className="product-card fade-up delay-1">
            <div className="product-card__ticker">JAI</div>
            <h3 className="product-card__name">Jera Activity Index</h3>
            <p className="product-card__desc">
              Composite score (0–100) measuring operational intensity at mine sites
              relative to a rolling 90-day baseline. The headline number that tells
              you whether a site is accelerating, plateauing, or winding down.
            </p>
            <p className="product-card__update">Updated daily · 140+ sites</p>
          </div>

          <div className="product-card fade-up delay-2">
            <div className="product-card__ticker">TRK</div>
            <h3 className="product-card__name">Truck Count</h3>
            <p className="product-card__desc">
              Vehicle detection and classification from satellite passes. Haul truck
              density is the single best proxy for mine throughput—and it&rsquo;s
              visible from orbit before any shipment manifest exists.
            </p>
            <p className="product-card__update">Updated per pass · sub-meter resolution</p>
          </div>

          <div className="product-card fade-up delay-3">
            <div className="product-card__ticker">STV</div>
            <h3 className="product-card__name">Stockpile Volume</h3>
            <p className="product-card__desc">
              3D volume estimation of ore and concentrate stockpiles using shadow
              analysis and elevation modeling. Tracks whether material is accumulating
              or being drawn down faster than normal.
            </p>
            <p className="product-card__update">Updated bi-weekly · ±5% volume accuracy</p>
          </div>

          <div className="product-card fade-up delay-4">
            <div className="product-card__ticker">SSP</div>
            <h3 className="product-card__name">Supply Shock Probability</h3>
            <p className="product-card__desc">
              Probabilistic model output (0–1) combining JAI, TRK, and STV signals
              with geopolitical context to estimate the likelihood of a supply
              disruption in the next 30 days. The DRC signal peaked at 0.84.
            </p>
            <p className="product-card__update">Updated daily · 30-day horizon</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ WHO IT'S FOR ============
function WhoItsFor() {
  return (
    <section className="section tiers" id="tiers">
      <div className="container">
        <p className="section-eyebrow fade-up">Who It&rsquo;s For</p>
        <h2 className="section-title fade-up delay-1">
          Purpose-built for decision makers<br />in critical minerals.
        </h2>

        <div className="tiers-grid">
          <div className="tier-card fade-up delay-1">
            <div className="tier-card__segment">Hedge Funds</div>
            <div className="tier-card__price">
              $100K–200K<span>/yr</span>
            </div>
            <ul className="tier-card__features">
              <li>Daily JAI &amp; SSP feeds for top 20 cobalt/lithium sites</li>
              <li>API access with 24hr data latency</li>
              <li>Supply shock alerts via webhook</li>
              <li>Quarterly analyst briefings</li>
              <li>Historical data from 2019 onward</li>
            </ul>
            <a href="#access" className="btn-secondary">Request Access</a>
          </div>

          <div className="tier-card tier-card--featured fade-up delay-2">
            <div className="tier-card__badge">Most Common</div>
            <div className="tier-card__segment">EV Manufacturers</div>
            <div className="tier-card__price">
              $200K–500K<span>/yr</span>
            </div>
            <ul className="tier-card__features">
              <li>Full signal suite across all 4 products</li>
              <li>Coverage for 40+ supplier-relevant sites</li>
              <li>6hr data latency with priority ingestion</li>
              <li>Procurement timing recommendations</li>
              <li>Custom site additions</li>
              <li>Monthly executive briefings</li>
            </ul>
            <a href="#access" className="btn-primary">Request Access</a>
          </div>

          <div className="tier-card fade-up delay-3">
            <div className="tier-card__segment">Defense / Government</div>
            <div className="tier-card__price">
              $500K–2M+<span>/yr</span>
            </div>
            <ul className="tier-card__features">
              <li>Global coverage across all critical mineral types</li>
              <li>Near-real-time data with 2hr latency SLA</li>
              <li>Classified deployment options available</li>
              <li>Custom ML model training on priority regions</li>
              <li>Dedicated analyst team</li>
              <li>Scenario modeling &amp; wargaming support</li>
            </ul>
            <a href="#access" className="btn-secondary">Request Access</a>
          </div>
        </div>
      </div>
    </section>
  )
}

// ============ REQUEST ACCESS ============
const FORMSPREE_ID = 'maqkqbgz'

function RequestAccess() {
  const [email, setEmail]       = useState('')
  const [org, setOrg]           = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid work email.')
      return
    }
    if (org.trim().length < 2) {
      setError('Please enter your organization name.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email, organization: org }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section section--alt access" id="access">
      <div className="container container--narrow">
        <p className="section-eyebrow fade-up">Request Access</p>
        <h2 className="section-title fade-up delay-1">
          See your supply chain<br />the way satellites do.
        </h2>

        {submitted ? (
          <div className="form-success fade-up">
            <span className="form-success__check">✓</span>
            <p className="form-success__text">
              Request received. A member of our team will be in touch within 48 hours
              to discuss your data requirements and pricing.
            </p>
          </div>
        ) : (
          <form className="access-form fade-up delay-2" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label" htmlFor="email">Work Email</label>
                <input
                  id="email"
                  className="form-input"
                  type="email"
                  placeholder="you@fund.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-field">
                <label className="form-label" htmlFor="org">Organization</label>
                <input
                  id="org"
                  className="form-input"
                  type="text"
                  placeholder="Firm or company name"
                  value={org}
                  onChange={(e) => setOrg(e.target.value)}
                />
              </div>
            </div>
            {error && <p className="form-error">{error}</p>}
            <button type="submit" className="btn-primary btn-primary--full" disabled={loading}>
              {loading ? 'Sending…' : 'Request Access'}
            </button>
            <p className="form-note">
              No commitment required. We&rsquo;ll reach out within 48 hours.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">
          JERA<span>.</span>TECHNOLOGIES
        </span>
        <span className="footer-copy">
          © 2025 Jera Technologies. All rights reserved.
        </span>
      </div>
    </footer>
  )
}

// ============ APP ============
export default function App() {
  useScrollAnimation()

  return (
    <div className="app">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhatYouGet />
      <WhoItsFor />
      <RequestAccess />
      <Footer />
    </div>
  )
}
