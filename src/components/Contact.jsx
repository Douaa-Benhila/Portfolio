import { useRef, useState } from 'react'
import { gsap, useGSAP, goTo } from '../lib/motion'
import Wave from './Wave'
import { profile, contactSticker } from '../data'

export default function Contact() {
  const root = useRef(null)
  const [copied, setCopied] = useState(false)
  useGSAP(() => {
    const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: 'top 70%' } })
    tl.from('.ct-card', { y: 80, scale: 0.94, opacity: 0, duration: 1.1 })
      .from('.ct-sticker', { yPercent: 40, rotate: 10, opacity: 0, duration: 1.1, ease: 'back.out(1.5)' }, 0.25)
      .from('.ct-bubble', { scale: 0, duration: 0.7, ease: 'back.out(3)' }, 0.9)
      .from('.ct-copy > *', { y: 30, opacity: 0, stagger: 0.08, duration: 0.9 }, 0.3)
    gsap.to('.ct-sticker', { rotate: 2, duration: 2.4, yoyo: true, repeat: -1, ease: 'sine.inOut', transformOrigin: '50% 100%' })
  }, { scope: root })
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* ignore */ }
  }
  return (
    <section className="contact section tint" id="contact" ref={root}>
      <Wave flip />
      <div className="wrap">
        <div className="ct-card">
          <div className="ct-copy">
            <span className="pill pill-light">Contact</span>
            <h2 className="h2">Travaillons<br />ensemble !</h2>
            <p>Une offre de stage, un projet ou simplement envie d'échanger ? N'hésitez pas à m'écrire, je réponds généralement sous 24 heures.</p>
            <div className="ct-mail">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button onClick={copy}>{copied ? 'Copié ✓' : 'Copier'}</button>
            </div>
            <div className="ct-links">
              <a className="btn btn-white" href={`mailto:${profile.email}?subject=Prise%20de%20contact`}>M'envoyer un e-mail ✉</a>
              <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
          </div>
          <div className="ct-media">
            <span className="ct-bubble hand">dis bonjour ! 👋</span>
            <img className="ct-sticker" src={contactSticker} alt={profile.full} loading="lazy" />
          </div>
        </div>
        <footer className="foot">
          <span>© {new Date().getFullYear()} {profile.full}</span>
          <button onClick={() => goTo('#top')}>Retour en haut ↑</button>
        </footer>
      </div>
    </section>
  )
}