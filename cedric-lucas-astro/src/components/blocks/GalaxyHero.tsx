"use client";
import React, { useEffect, useRef } from 'react';

export function GalaxyHero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const opacity = 1 - Math.min(window.pageYOffset / 400, 1);
      contentRef.current.style.opacity = opacity.toString();
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const c = particlesRef.current;
    if (!c) return;
    for (let i = 0; i < 60; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 2 + 0.5;
      p.style.cssText = [
        'position:absolute',
        'border-radius:50%',
        'pointer-events:none',
        `left:${Math.random() * 100}%`,
        `top:${Math.random() * 100}%`,
        `width:${size}px`,
        `height:${size}px`,
        `background:rgba(167,139,250,${(Math.random() * 0.5 + 0.2).toFixed(2)})`,
        `box-shadow:0 0 ${size * 3}px rgba(139,92,246,0.6)`,
      ].join(';');
      c.appendChild(p);
    }
  }, []);

  return (
    <section style={{
      position: 'relative',
      minHeight: '100svh',
      height: '100svh',
      width: '100%',
      overflow: 'hidden',
      background: '#0a4f6e',
      isolation: 'isolate',
    }}>
      {/* Vidéo mer background */}
      <video
        autoPlay muted loop playsInline
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
      >
        <source media="(max-width: 768px)" src="/video-mobile.mp4" type="video/mp4" />
        <source src="/video.mp4" type="video/mp4" />
      </video>

      {/* Overlay lumineux marin */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10,
        pointerEvents: 'none',
        background: `
          linear-gradient(
            to bottom,
            rgba(10,79,110,0.3) 0%,
            rgba(10,79,110,0.1) 40%,
            rgba(240,248,251,0.6) 100%
          )`
      }} />

      {/* Touche de magie violette — particules statiques */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 15,
        pointerEvents: 'none',
        background: `
          radial-gradient(ellipse at 30% 40%, rgba(139,92,246,0.12) 0%, transparent 50%),
          radial-gradient(ellipse at 70% 60%, rgba(167,139,250,0.08) 0%, transparent 40%)`
      }} />

      {/* Conteneur particules violettes */}
      <div ref={particlesRef} style={{ position: 'absolute', inset: 0, zIndex: 16, pointerEvents: 'none' }} />

      {/* Contenu — texte aligné à gauche */}
      <div
        ref={contentRef}
        style={{
          position: 'relative', zIndex: 30,
          display: 'flex', flexDirection: 'column',
          alignItems: 'flex-start', justifyContent: 'center',
          textAlign: 'left',
          minHeight: '100svh',
          padding: '90px 8% 60px 10%',
          width: '100%', maxWidth: '800px',
        }}
      >
        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          padding: '8px 16px', borderRadius: '999px',
          border: '1px solid rgba(255,255,255,0.5)',
          background: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(8px)',
          marginBottom: '2rem',
          whiteSpace: 'nowrap',
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: '#ffffff', animation: 'pulse 2s infinite',
            display: 'inline-block',
          }} />
          <span style={{ color: '#ffffff', fontSize: '0.7rem', letterSpacing: '0.3em', textTransform: 'uppercase', fontFamily: 'sans-serif' }}>
            Hypnothérapeute · Saint-André-des-Eaux (44)
          </span>
        </div>

        {/* H1 */}
        <h1 style={{
          fontFamily: 'Cormorant Garamond, Georgia, serif',
          fontSize: 'clamp(2.8rem, 5vw, 5.5rem)',
          color: '#ffffff',
          fontWeight: 300,
          lineHeight: 1.1,
          marginBottom: '2rem',
          textAlign: 'left',
        }}>
          Libérez-vous<br />
          <em style={{
            fontStyle: 'normal',
            background: 'linear-gradient(135deg, #f0c060 30%, #ffffff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            de ce qui
          </em><br />
          vous retient
        </h1>

        {/* Ligne décorative */}
        <div style={{
          width: '60px', height: '1px',
          background: 'linear-gradient(to right, #f0c060, transparent)',
          marginBottom: '1.5rem',
        }} />

        {/* Sous-titre */}
        <p style={{
          color: 'rgba(255,255,255,0.85)',
          fontSize: '1.15rem',
          maxWidth: '480px',
          marginBottom: '1rem',
          fontFamily: 'sans-serif',
          fontWeight: 300,
          lineHeight: 1.7,
          textAlign: 'left',
        }}>
          Particuliers ou professionnels,<br />
          je peux vous aider
        </p>

        {/* Mots-clés */}
        <p style={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.78rem',
          maxWidth: '420px',
          marginBottom: '3rem',
          fontFamily: 'sans-serif',
          letterSpacing: '0.08em',
          lineHeight: 1.8,
          textAlign: 'left',
        }}>
          Arrêt du tabac · Stress · Angoisses · Phobies ·<br />
          Sommeil · Confiance · Deuil · Perte de poids
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:0678825558" style={{
            background: 'linear-gradient(135deg, #f0c060, #1a7fa0)',
            color: '#ffffff',
            fontWeight: 600,
            padding: '12px 28px',
            borderRadius: '999px',
            textDecoration: 'none',
            fontSize: '0.75rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Prendre rendez-vous
          </a>
          <a
            href="#therapies"
            style={{
              border: '1px solid rgba(255,255,255,0.4)',
              color: 'rgba(255,255,255,0.85)',
              padding: '14px 36px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '0.78rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              backdropFilter: 'blur(8px)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.7)';
              (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.4)';
              (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)';
            }}
          >
            Découvrir les thérapies
          </a>
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: '3rem', animation: 'bounce 1s infinite', opacity: 0.3 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Vague de transition vers PourQui */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 30 }}>
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block', width: '100%' }}>
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#e8f4f8" />
        </svg>
      </div>
    </section>
  );
}
