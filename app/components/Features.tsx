'use client';

import { useEffect, useRef } from 'react';
import styles from './Features.module.css';

const features = [
  {
    icon: '📝',
    title: 'Regular Chapter-wise Tests',
    desc: 'Frequent assessments after every chapter to ensure strong foundational understanding.',
    color: '#3b82f6',
  },
  {
    icon: '🎯',
    title: 'Mega Test Series',
    desc: 'Rigorous exam-pattern test series to build confidence and time-management skills.',
    color: '#8b5cf6',
  },
  {
    icon: '📊',
    title: 'Parent Progress Updates',
    desc: 'Weekly comprehensive feedback sessions so parents can actively track student improvement.',
    color: '#f97316',
  },
  {
    icon: '💡',
    title: 'Homework & Doubt Clearing',
    desc: 'Dedicated guidance outside of regular teaching hours to ensure concepts are crystal clear.',
    color: '#10b981',
  },
  {
    icon: '📚',
    title: 'Projects & Assignments Support',
    desc: 'Assistance with school assignments to ensure students maintain a balanced workload.',
    color: '#f59e0b',
  },
  {
    icon: '🤝',
    title: 'Special Attention',
    desc: 'Personalized focus and extra care for weak students to bring them up to speed quickly.',
    color: '#ec4899',
  },
];

const highlights = [
  { value: '4', label: 'Core Subjects' },
  { value: '7', label: 'Grades Covered' },
  { value: '20+', label: 'Happy Students' },
  { value: '4+', label: 'Years Teaching' },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`section ${styles.featuresSection}`} id="features" ref={sectionRef}>
      {/* Decorative BG */}
      <div className={styles.bgOrb} />

      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Excel</span>
          </h2>
          <p className="section-subtitle">
            We go beyond textbooks — our teaching method is built to develop critical thinking,
            exam readiness, and genuine love for learning.
          </p>
        </div>

        {/* Highlight bar */}
        <div className={styles.highlightBar}>
          {highlights.map((h) => (
            <div key={h.label} className={styles.highlightItem}>
              <div className={styles.highlightValue}>{h.value}</div>
              <div className={styles.highlightLabel}>{h.label}</div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div
              key={f.title}
              id={`feature-${i}`}
              className={`${styles.featureCard} reveal glass-card`}
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div
                className={styles.featureIcon}
                style={{
                  background: f.color + '18',
                  borderColor: f.color + '35',
                }}
              >
                <span>{f.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
              <div className={styles.featureBar} style={{ background: f.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
