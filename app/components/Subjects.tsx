'use client';

import { useEffect, useRef } from 'react';
import styles from './Subjects.module.css';

const subjects = [
  {
    id: 'maths',
    icon: '📐',
    title: 'Mathematics',
    color: '#3b82f6',
    gradient: 'linear-gradient(135deg, #1e40af, #3b82f6)',
    grades: 'Grade 6–10',
    topics: ['Algebra & Equations', 'Geometry & Mensuration', 'Trigonometry', 'Statistics & Probability', 'Number Systems', 'Coordinate Geometry'],
    desc: 'Build a rock-solid foundation in mathematics. From basic arithmetic to advanced algebra — conquer every concept with confidence.',
  },
  {
    id: 'physics',
    icon: '⚡',
    title: 'Physics',
    color: '#8b5cf6',
    gradient: 'linear-gradient(135deg, #6d28d9, #8b5cf6)',
    grades: 'Grade 6–10',
    topics: ['Motion & Forces', 'Electricity & Magnetism', 'Light & Optics', 'Sound & Waves', 'Heat & Thermodynamics', 'Modern Physics'],
    desc: 'Decode the laws of the universe. Learn Physics through real-world experiments and clear, intuitive explanations.',
  },
  {
    id: 'chemistry',
    icon: '🧪',
    title: 'Chemistry',
    color: '#f97316',
    gradient: 'linear-gradient(135deg, #c2410c, #f97316)',
    grades: 'Grade 6–10',
    topics: ['Periodic Table', 'Chemical Reactions', 'Acids, Bases & Salts', 'Metals & Non-Metals', 'Carbon Compounds', 'Atomic Structure'],
    desc: 'Make sense of matter and reactions. Chemistry becomes exciting when you understand the "why" behind every equation.',
  },
  {
    id: 'biology',
    icon: '🧬',
    title: 'Biology',
    color: '#10b981',
    gradient: 'linear-gradient(135deg, #065f46, #10b981)',
    grades: 'Grade 6–10',
    topics: ['Cell Biology', 'Human Body Systems', 'Plant Life', 'Genetics & Heredity', 'Ecosystems', 'Life Processes'],
    desc: 'Explore the science of life. From cells to ecosystems — discover how living things work and interact.',
  },
];

export default function Subjects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 150);
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
    <section className={`section ${styles.subjectsSection}`} id="subjects" ref={sectionRef}>
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">What We Teach</span>
          <h2 className="section-title">
            Subjects We <span className="gradient-text">Specialize In</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive coaching across four core subjects — designed to build mastery from the ground up.
          </p>
        </div>

        <div className={styles.grid}>
          {subjects.map((subject, i) => (
            <div
              key={subject.id}
              id={`subject-${subject.id}`}
              className={`${styles.card} reveal`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Glow */}
              <div className={styles.cardGlow} style={{ background: subject.gradient }} />

              {/* Header */}
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} style={{ background: subject.gradient, boxShadow: `0 8px 24px ${subject.color}40` }}>
                  <span className={styles.subjectIcon}>{subject.icon}</span>
                </div>
                <div>
                  <div className={styles.gradeBadge} style={{ color: subject.color, borderColor: subject.color + '40', background: subject.color + '15' }}>
                    {subject.grades}
                  </div>
                </div>
              </div>

              <h3 className={styles.subjectTitle} style={{ color: subject.color }}>
                {subject.title}
              </h3>
              <p className={styles.subjectDesc}>{subject.desc}</p>

              {/* Topics */}
              <div className={styles.topics}>
                {subject.topics.map((topic) => (
                  <span key={topic} className={styles.topic} style={{ borderColor: subject.color + '30', color: subject.color }}>
                    {topic}
                  </span>
                ))}
              </div>

              <a href="#contact" className={styles.learnMore} style={{ color: subject.color }} id={`enroll-${subject.id}`}>
                Enroll for {subject.title}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
