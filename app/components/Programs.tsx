'use client';

import { useEffect, useRef } from 'react';
import styles from './Programs.module.css';

const programs = [
  {
    title: 'Classes 6, 7 & 8',
    highlight: 'Foundation Batch',
    subjects: 'Science + Mathematics',
    books: ['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma'],
    duration: '16 Days / month',
    classDuration: '2 hours (2.5 hours during exams)',
    fees: [
      { label: 'Science & Maths', value: '₹4800', suffix: '/ month' }
    ],
    notes: 'Extra classes will be provided if required. Fees are non-negotiable.',
    color: '#3b82f6'
  },
  {
    title: 'Olympiad Prep',
    highlight: 'Competitive Edge (6-8)',
    subjects: 'Science & Maths',
    books: ['Advanced Calculation', 'High-level Science', 'Olympiad Questions'],
    duration: '1 Day / week',
    classDuration: 'Focus Sessions',
    fees: [
      { label: 'Monthly Fee', value: '₹1000', suffix: '/ month' }
    ],
    notes: '*Must be taken alongside regular courses. Focus on shortcuts and advanced concepts.',
    color: '#f59e0b'
  },
  {
    title: 'Classes 9 & 10',
    highlight: 'Board Excellence',
    subjects: 'Science / Mathematics',
    books: ['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma', 'Sample Papers', 'PYQs'],
    duration: '16 - 18 Days / month',
    classDuration: '2 hours (2.5 hours during exams)',
    fees: [
      { label: 'Class 9 Maths', value: '₹4800', suffix: '/ month' },
      { label: 'Class 9 Science', value: '₹5000', suffix: '/ month' },
      { label: 'Class 10 Maths', value: '₹6000', suffix: '/ month' },
      { label: 'Class 10 Science', value: '₹6500', suffix: '/ month' }
    ],
    notes: 'Students can choose ANY ONE or both subjects. Extra classes provided if required.',
    color: '#8b5cf6'
  }
];

export default function Programs() {
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
    <section className={`section ${styles.programsSection}`} id="programs" ref={sectionRef}>
      <div className={styles.bgGlow} />
      
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag reveal">Curriculum & Pricing</span>
          <h2 className="section-title reveal">
            Comprehensive <span className="gradient-text">Learning Programs</span>
          </h2>
          <p className="section-subtitle reveal">
            Structured batches designed for deep conceptual clarity, competitive readiness, and board exam excellence.
          </p>
        </div>

        <div className={styles.grid}>
          {programs.map((prog, i) => (
            <div 
              key={prog.title} 
              className={`${styles.programCard} reveal glass-card`}
              style={{ color: prog.color }}
            >
              <div className={styles.cardGlow} />
              
              <span className={styles.highlight} style={{ color: prog.color }}>
                {prog.highlight}
              </span>
              <h3 className={styles.title}>{prog.title}</h3>

              <ul className={styles.detailsList}>
                <li className={styles.detailItem}>
                  <span className={styles.detailIcon}>📚</span>
                  <div>
                    <strong>Subjects:</strong> {prog.subjects}
                  </div>
                </li>
                <li className={styles.detailItem}>
                  <span className={styles.detailIcon}>⏱️</span>
                  <div>
                    <strong>Frequency:</strong> {prog.duration} <br/>
                    <span style={{ fontSize: '0.85em', color: '#94a3b8' }}>Class: {prog.classDuration}</span>
                  </div>
                </li>
                <li className={styles.detailItem}>
                  <span className={styles.detailIcon}>📖</span>
                  <div>
                    <strong>Reference Materials:</strong>
                    <div className={styles.booksList}>
                      {prog.books.map(book => (
                        <span key={book} className={styles.bookBadge}>{book}</span>
                      ))}
                    </div>
                  </div>
                </li>
              </ul>

              <div className={styles.feesSection}>
                {prog.fees.map((fee, idx) => (
                  <div key={idx} className={styles.feeItem}>
                    <span className={styles.feeLabel}>{fee.label}</span>
                    <div>
                      <span className={styles.feeValue}>{fee.value}</span>
                      <span className={styles.feeSuffix}>{fee.suffix}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.notes}>
                {prog.notes}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
