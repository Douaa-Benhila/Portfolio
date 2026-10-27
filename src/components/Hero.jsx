import { useRef } from 'react'
import { gsap, useGSAP, goTo } from '../lib/motion'
import { profile, profile as douaa, heroCounts } from '../data'
import { Squiggle, Spark } from './Bits'

export default function Hero({ ready }) {
  const root = useRef(null)

  useGSAP(() => {
    if (!ready) return
    const tl = gsap.timeline()
    tl.from('.hr-hello', { y: 20, opacity: 0, duration: 0.8 })
      .from('.hr-name .ch', { yPercent: 110, rotate: 8, stagger: 0.05, duration: 1.1 }, 0.1)
      .to('.hr-name .squiggle path', { strokeDashoffset: 0, duration: 1.2, ease: 'power2.inOut' }, 0.6)
      .from('.hr-sub, .hr-counts, .hr-ctas', { y: 30, opacity: 0, stagger: 0.1, duration: 1 }, 0.4)
      .from('.hr-blob', { scale: 0.6, opacity: 0, duration: 1.4, ease: 'elastic.out(1, 0.7)' }, 0.1)
    if (profile.photo) tl.from('.hr-person', { yPercent: 30, opacity: 0, duration: 1.2, ease: 'back.out(1.4)' }, 0.3)
  }, { scope: root, dependencies: [ready] })

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hr-grid">
        <div className="hr-copy">
          <p className="hr-hello hand">Bonjour, c'est <span aria-hidden="true">👋</span></p>
          <h1 className="hr-name">
            <span className="hr-name-text">{profile.name.split('').map((c, i) => <span className="ch-mask" key={i}><span className="ch">{c}</span></span>)}</span>
            <Squiggle />
          </h1>
          <p className="hr-sub">
            <b>{profile.role}</b> <Spark /> {profile.intro}
          </p>
          <ul className="hr-counts" aria-label="Chiffres clés">
            {heroCounts.map((c) => <li key={c.label}><b>{c.value}</b><span>{c.label}</span></li>)}
          </ul>
          <div className="hr-ctas">
            <button className="btn btn-coral" onClick={() => goTo('#work')}>Voir mes projets <span>→</span></button>
            <button className="btn btn-line" onClick={() => goTo('#contact')}>Contactez-moi</button>
          </div>
        </div>

        {/* partie droite : l'image (chemin dans data.js → profile.photo) */}
        <div className="hr-visual">
          <div className="hr-blob" />
          {profile.photo && <img className="hr-person hr-photo" src={douaa.photo} alt={douaa.full} />}
        </div>
      </div>
    </section>
  )
}