'use client';

import { useEffect, useRef } from 'react';
import styles from './Programs.module.css';

// ── Standard cards data ──────────────────────────────────────────────────────
const standardPrograms = [
  {
    id: 'foundation',
    badgeIcon: '📘',
    badgeLabel: 'Foundation',
    title: 'Standard Course',
    subtitle: 'Perfect for mastering the school curriculum and scoring top grades.',
    includes: [
      'Science & Math for Classes 6–8',
      'Strict alignment with school syllabus',
      'Weekly chapter-wise assignments',
      '16 classes / month (2 hrs each)',
      'Extra classes before exams',
    ],
    books: ['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma'],
    fees: [{ label: 'Science & Maths', value: '₹4800', suffix: '/ month' }],
    notes: 'Extra classes provided if required. Fees are non-negotiable.',
    color: '#3b82f6',
    featured: false,
  },
];

const boardProgram = {
  id: 'board',
  highlight: 'Board Excellence',
  title: 'Classes 9 & 10',
  subjects: 'Science / Mathematics',
  books: ['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma', 'Sample Papers', 'PYQs'],
  duration: '16 – 18 Days / month',
  classDuration: '2 hours (2.5 hours during exams)',
  fees: [
    { label: 'Class 9 Maths', value: '₹4800', suffix: '/ month' },
    { label: 'Class 9 Science', value: '₹5000', suffix: '/ month' },
    { label: 'Class 10 Maths', value: '₹6000', suffix: '/ month' },
    { label: 'Class 10 Science', value: '₹6500', suffix: '/ month' },
  ],
  notes: 'Students can choose ANY ONE or both subjects. Extra classes provided if required.',
  color: '#8b5cf6',
};

// ── Premium card data ─────────────────────────────────────────────────────────
const premiumProgram = {
  title: 'Premium Course',
  subtitle: 'Standard curriculum PLUS rigorous preparation for competitive Olympiads.',
  everythingPlus: [
    'Olympiad Preparation (NSO, IMO, etc.)',
    'Advanced problem-solving strategies',
    'Focus sessions: 1 day / week',
    'Advanced Calculation & High-level Science',
    'All Foundation Batch features included',
  ],
  books: ['Advanced Calculation', 'High-level Science', 'Olympiad Questions'],
  fee: { label: 'Science & Maths + Olympiad', value: '₹5800', suffix: '/ month' },
  notes: 'Includes Foundation Batch + Olympiad Prep. Extra classes provided. Fees are non-negotiable.',
};

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
          <span className="section-tag reveal">Curriculum &amp; Pricing</span>
          <h2 className="section-title reveal">
            Comprehensive <span className="gradient-text">Learning Programs</span>
          </h2>

        </div>

        {/* ── 3-column grid ── */}
        <div className={styles.grid}>

          {/* ─ Card 1: Foundation / Standard ─ */}
          <div className={`${styles.programCard} ${styles.standardCard} reveal glass-card`}>
            <div className={styles.cardGlow} style={{ background: 'linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)' }} />

            {/* Badge */}
            <div className={styles.stdBadge}>
              <span>📘</span>
              <span>Foundation</span>
            </div>

            <h3 className={styles.stdTitle}>Standard Course</h3>
            <p className={styles.stdSubtitle}>
              Perfect for mastering the school curriculum and scoring top grades.
            </p>

            <div className={styles.includesLabel}>What&apos;s included:</div>
            <ul className={styles.checkList}>
              {[
                'Science & Math for Classes 6–8',
                'Strict alignment with school syllabus',
                'Weekly chapter-wise assignments',
                '16 classes / month (2 hrs each)',
                'Extra classes before exams',
              ].map((item) => (
                <li key={item} className={styles.checkItem}>
                  <span className={styles.checkIcon} style={{ borderColor: '#3b82f6', color: '#3b82f6' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.stdBooks}>
              <span className={styles.booksLabel}>Reference Materials:</span>
              <div className={styles.booksList}>
                {['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma'].map((b) => (
                  <span key={b} className={styles.bookBadge}>{b}</span>
                ))}
              </div>
            </div>

            <div className={styles.feesSection}>
              <div className={styles.feeItem}>
                <span className={styles.feeLabel}>Science &amp; Maths</span>
                <div>
                  <span className={styles.feeValue}>₹4800</span>
                  <span className={styles.feeSuffix}> / month</span>
                </div>
              </div>
            </div>

            <div className={styles.notes}>
              Extra classes provided if required. Fees are non-negotiable.
            </div>
          </div>

          {/* ─ Card 2: Premium / Competitive Edge ─ */}
          <div className={`${styles.programCard} ${styles.premiumCard} reveal`}>
            {/* Corner ribbon */}
            <div className={styles.mostPopularCorner}>Most Popular</div>

            {/* Advanced badge */}
            <div className={styles.advancedPill}>
              <span>🏆</span>
              <span>Advanced</span>
            </div>

            <h3 className={styles.premiumTitle}>Premium Course</h3>
            <p className={styles.premiumSubtitle}>
              Standard curriculum PLUS rigorous preparation for competitive Olympiads.
            </p>

            <div className={styles.everythingLabel}>Everything in Standard, plus:</div>
            <ul className={styles.checkList}>
              {[
                'Olympiad Preparation (NSO, IMO, etc.)',
                'Advanced problem-solving strategies',
                'Focus sessions: 1 day / week',
                'Advanced Calculation & High-level Science',
                'All Foundation Batch features included',
              ].map((item) => (
                <li key={item} className={`${styles.checkItem} ${styles.premiumCheckItem}`}>
                  <span className={styles.premiumCheckIcon}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.premiumBooks}>
              <span className={styles.booksLabel} style={{ color: '#fbbf24' }}>Additional Materials:</span>
              <div className={styles.booksList}>
                {['Advanced Calculation', 'High-level Science', 'Olympiad Questions'].map((b) => (
                  <span key={b} className={`${styles.bookBadge} ${styles.premiumBookBadge}`}>{b}</span>
                ))}
              </div>
            </div>

            <div className={`${styles.feesSection} ${styles.premiumFees}`}>
              <div className={styles.feeItem}>
                <span className={`${styles.feeLabel} ${styles.premiumFeeLabel}`}>Science &amp; Maths + Olympiad</span>
                <div>
                  <span className={`${styles.feeValue} ${styles.premiumFeeValue}`}>₹5800</span>
                  <span className={styles.feeSuffix}> / month</span>
                </div>
              </div>
            </div>

            <div className={`${styles.notes} ${styles.premiumNotes}`}>
              Includes Foundation Batch + Olympiad Prep. Extra classes if required. Fees are non-negotiable.
            </div>
          </div>

          {/* ─ Card 3: Board Excellence ─ */}
          <div className={`${styles.programCard} reveal glass-card`} style={{ color: '#8b5cf6' }}>
            <div className={styles.cardGlow} />

            <span className={styles.highlight} style={{ color: '#8b5cf6' }}>Board Excellence</span>
            <h3 className={styles.title}>Classes 9 &amp; 10</h3>

            <ul className={styles.detailsList}>
              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>📚</span>
                <div><strong>Subjects:</strong> Science / Mathematics</div>
              </li>
              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>⏱️</span>
                <div>
                  <strong>Frequency:</strong> 16 – 18 Days / month<br />
                  <span style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>Class: 2 hours (2.5 hrs during exams)</span>
                </div>
              </li>
              <li className={styles.detailItem}>
                <span className={styles.detailIcon}>📖</span>
                <div>
                  <strong>Reference Materials:</strong>
                  <div className={styles.booksList}>
                    {['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma', 'Sample Papers', 'PYQs'].map((b) => (
                      <span key={b} className={styles.bookBadge}>{b}</span>
                    ))}
                  </div>
                </div>
              </li>
            </ul>

            <div className={styles.feesSection}>
              {[
                { label: 'Class 9 Maths', value: '₹4800' },
                { label: 'Class 9 Science', value: '₹5000' },
                { label: 'Class 10 Maths', value: '₹6000' },
                { label: 'Class 10 Science', value: '₹6500' },
              ].map((fee) => (
                <div key={fee.label} className={styles.feeItem}>
                  <span className={styles.feeLabel}>{fee.label}</span>
                  <div>
                    <span className={styles.feeValue}>{fee.value}</span>
                    <span className={styles.feeSuffix}> / month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.notes}>
              Students can choose ANY ONE or both subjects. Extra classes provided if required.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
