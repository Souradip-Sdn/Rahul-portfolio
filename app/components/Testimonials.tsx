'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    grade: 'Grade 10 Student',
    text: 'Rahul Sir explains Physics in a way that just clicks! I went from failing to scoring 92% in my board exams. His methods are unlike anything I\'ve seen before.',
    rating: 5,
    subject: 'Physics',
    color: '#8b5cf6',
    initials: 'PS',
  },
  {
    name: 'Arjun Dey',
    grade: 'Grade 8 Student',
    text: 'Maths used to be my biggest fear. After just 3 months with Rahul Sir, I actually enjoy solving problems. His patience and step-by-step approach made all the difference.',
    rating: 5,
    subject: 'Maths',
    color: '#3b82f6',
    initials: 'AD',
  },
  {
    name: 'Mrs. Rekha Das',
    grade: 'Parent of Grade 9 Student',
    text: 'We\'ve noticed a remarkable transformation in our daughter\'s confidence and grades. Rahul Sir is not just a tutor — he\'s a true mentor who genuinely cares.',
    rating: 5,
    subject: 'Chemistry',
    color: '#f97316',
    initials: 'RD',
  },
  {
    name: 'Sanjib Roy',
    grade: 'Grade 7 Student',
    text: 'Biology felt like memorizing random facts until Sir showed us how everything connects. Now I understand the whole picture and love the subject!',
    rating: 5,
    subject: 'Biology',
    color: '#10b981',
    initials: 'SR',
  },
  {
    name: 'Mr. Ajay Paul',
    grade: 'Parent of Grade 10 Student',
    text: 'My son secured admission in a top college. His success is largely thanks to Rahul Sir\'s consistent guidance and support. Highly recommended for any parent!',
    rating: 5,
    subject: 'Maths & Physics',
    color: '#f59e0b',
    initials: 'AP',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    if (isAutoPlaying) startAutoPlay();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [isAutoPlaying]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    setIsAutoPlaying(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prev = () => goTo((current - 1 + testimonials.length) % testimonials.length);
  const next = () => goTo((current + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className={styles.bgGlow} />
      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Real stories from real students and parents who've experienced the Rahul Classes difference.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          {/* Main card */}
          <div className={styles.card} key={current} id={`testimonial-${current}`}>
            <div className={styles.quoteIcon}>"</div>

            <p className={styles.text}>{t.text}</p>

            <div className={styles.rating}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={styles.star} style={{ color: i < t.rating ? '#f59e0b' : '#374151' }}>★</span>
              ))}
            </div>

            <div className={styles.author}>
              <div className={styles.avatar} style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}>
                {t.initials}
              </div>
              <div>
                <div className={styles.authorName}>{t.name}</div>
                <div className={styles.authorGrade}>{t.grade}</div>
              </div>
              <div className={styles.subjectBadge} style={{ color: t.color, borderColor: t.color + '40', background: t.color + '15' }}>
                {t.subject}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className={styles.controls}>
            <button className={styles.arrowBtn} onClick={prev} aria-label="Previous testimonial" id="testimonial-prev">
              ←
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === current ? styles.activeDot : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  id={`testimonial-dot-${i}`}
                />
              ))}
            </div>

            <button className={styles.arrowBtn} onClick={next} aria-label="Next testimonial" id="testimonial-next">
              →
            </button>
          </div>
        </div>

        {/* Mini cards */}
        <div className={styles.miniCards}>
          {testimonials.map((test, i) => (
            <div
              key={test.name}
              className={`${styles.miniCard} ${i === current ? styles.activeMini : ''}`}
              onClick={() => goTo(i)}
              id={`mini-testimonial-${i}`}
              style={{ borderColor: i === current ? test.color + '60' : undefined }}
            >
              <div className={styles.miniAvatar} style={{ background: `linear-gradient(135deg, ${test.color}, ${test.color}88)` }}>
                {test.initials}
              </div>
              <div className={styles.miniName}>{test.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
