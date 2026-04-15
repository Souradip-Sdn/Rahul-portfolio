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
  subtitle: 'Standard curriculum + rigorous preparation for competitive Olympiads.',
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
          <StandardEnrollCard />


          {/* ─ Card 2: Premium / Competitive Edge ─ */}
          <div className={`${styles.programCard} ${styles.premiumCard} reveal`}>
            {/* Top badge */}
            <div className={styles.mostEnrolledBadge}>Most Enrolled</div>

            {/* Icon + Popular Choice row */}
            <div className={styles.premiumTopRow}>
              <div className={styles.premiumIconBox}>
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M12 2C12 2 5 10 5 15C5 18.87 8.13 22 12 22C15.87 22 19 18.87 19 15C19 10 12 2 12 2Z" />
                </svg>
              </div>
              <span className={styles.popularChoice}>Popular Choice</span>
            </div>

            <h3 className={styles.premiumTitle}>Premium Course</h3>
            <p className={styles.premiumSubtitle}>
              Standard curriculum + rigorous preparation for competitive Olympiads.
            </p>

            <ul className={styles.starList}>
              {[
                'Olympiad Preparation (NSO, IMO, etc.)',
                'Advanced problem-solving strategies',
                'Focus sessions: 1 day / week',
                'Advanced Calculation &amp; High-level Science',
                'All Foundation Batch features included',
              ].map((item) => (
                <li key={item} className={styles.starItem}>
                  <span className={styles.starIcon}>★</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Fee display */}
            <div className={styles.premiumFeeRow}>
              <span className={styles.premiumFeeRowLabel}>Science &amp; Maths + Olympiad</span>
              <div>
                <span className={styles.premiumFeeRowValue}>₹5800</span>
                <span className={styles.premiumFeeRowSuffix}> / month</span>
              </div>
            </div>

            <a href="#contact" className={styles.enrollButton}>Enroll Today</a>
          </div>

          {/* ─ Card 3: Board Excellence ─ */}
          <BoardExcellenceEnrollCard />


        </div>
      </div>
    </section>
  );
}

/* ─── Standard Card ───────────────────────────────────────────────────────── */
function StandardEnrollCard() {
  return (
    <div className={`${styles.programCard} ${styles.standardCard} reveal glass-card`}>
      {/* Colored top stripe */}
      <div className={styles.topStripe} style={{ background: 'linear-gradient(90deg, #3b82f6, #60a5fa)' }} />
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

      <a href="#contact" className={`${styles.enrollButton} ${styles.enrollButtonBlue}`}>Enroll Now</a>
    </div>
  );
}

/* ─── Board Excellence Card ──────────────────────────────────────────────── */
function BoardExcellenceEnrollCard() {
  return (
    <div className={`${styles.programCard} ${styles.standardCard} reveal glass-card`}>
      {/* Colored top stripe */}
      <div className={styles.topStripe} style={{ background: 'linear-gradient(90deg, #8b5cf6, #a78bfa)' }} />
      <div className={styles.cardGlow} style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />

      {/* Badge */}
      <div className={styles.stdBadge} style={{ background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', color: '#8b5cf6' }}>
        <span>Board Excellence</span>
      </div>

      <h3 className={styles.stdTitle}>Classes 9 &amp; 10</h3>
      <p className={styles.stdSubtitle}>Science / Mathematics</p>

      <div className={styles.includesLabel}>What&apos;s included:</div>
      <ul className={styles.checkList}>
        {[
          '16 – 18 Days / month',
          '2 hours / class (2.5 hrs during exams)',
        ].map((item) => (
          <li key={item} className={styles.checkItem}>
            <span className={styles.checkIcon} style={{ borderColor: '#8b5cf6', color: '#8b5cf6' }}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className={styles.stdBooks}>
        <span className={styles.booksLabel}>Reference Materials:</span>
        <div className={styles.booksList}>
          {['S. Chand', 'R.S. Aggarwal', 'R.D. Sharma', 'Sample Papers', 'PYQs'].map((b) => (
            <span key={b} className={styles.bookBadge}>{b}</span>
          ))}
        </div>
      </div>

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

      <a href="#contact" className={`${styles.enrollButton} ${styles.enrollButtonPurple}`}>Enroll Now</a>
    </div>
  );
}
