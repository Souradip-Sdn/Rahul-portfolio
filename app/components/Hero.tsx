'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

const SUBJECTS = ['Maths', 'Physics', 'Chemistry', 'Biology'];
const COLORS = ['#3b82f6', '#8b5cf6', '#f97316', '#10b981'];

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animFrameId: number;
    const particles: Particle[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = '#3b82f6';
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }

      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={styles.hero} id="home">
      <canvas ref={canvasRef} className={styles.canvas} />

      {/* Gradient orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      <div className={styles.content}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>Expert Coaching since 2020</span>
        </div>

        <h1 className={styles.headline}>
          Learn Smarter,<br />
          <span className={styles.gradientText}>Score Higher</span>
        </h1>

        <p className={styles.subheadline}>
          Master{' '}
          {SUBJECTS.map((s, i) => (
            <span key={s} className={styles.subject} style={{ color: COLORS[i] }}>
              {s}{i < SUBJECTS.length - 1 ? ', ' : ''}
            </span>
          ))}
          {' '}with personalized guidance by{' '}
          <strong style={{ color: '#f9fafb' }}>Er. Rahul Das</strong>{' '}
          (B.Tech, NIT Agartala) — for students in Grades 6 to 10.
        </p>

        <div className={styles.ctas}>
          <a href="#contact" className="btn btn-primary" id="hero-enroll-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            Enroll Now
          </a>
          <a href="#subjects" className="btn btn-outline" id="hero-learn-btn">
            Explore Subjects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          {[
            { value: '20+', label: 'Students Taught' },
            { value: '4', label: 'Subjects' },
            { value: 'Grades 6–10', label: 'All Classes' },
            { value: '95%', label: 'Success Rate' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statValue}>{s.value}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating cards */}
      <div className={styles.floatingCards}>
        {[
          { icon: '📐', label: 'Maths', color: '#3b82f6' },
          { icon: '⚡', label: 'Physics', color: '#8b5cf6' },
          { icon: '🧪', label: 'Chemistry', color: '#f97316' },
          { icon: '🧬', label: 'Biology', color: '#10b981' },
        ].map((card, i) => (
          <div
            key={card.label}
            className={styles.floatingCard}
            style={{
              animationDelay: `${i * 0.8}s`,
              borderColor: card.color + '40',
            }}
          >
            <span style={{ fontSize: '1.5rem' }}>{card.icon}</span>
            <span style={{ color: card.color, fontWeight: 600, fontSize: '0.85rem' }}>{card.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <a href="#about" className={styles.scrollIndicator}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </a>
    </section>
  );
}
