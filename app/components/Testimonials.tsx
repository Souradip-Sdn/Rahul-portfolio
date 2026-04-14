'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    name: 'Bijoyeeta Bhowmik',
    grade: 'Bsc. 3rd Year Student, BBMC',
    text: 'Rahul Sir explains complex scientific concepts in a way that just clicks! I went from struggling in my university physics modules to scoring top marks in my finals. His methods are unlike anything I\'ve seen before.',
    rating: 5,
    subject: 'Science',
    color: '#8b5cf6',
    initials: 'BB',
  },
  {
    name: 'Samrat Debnath',
    grade: 'Grade 8 Student, SKM',
    text: 'Maths used to be my biggest fear. After just 3 months with Rahul Sir, I actually enjoy solving complex equations and geometry problems. His patience and step-by-step approach made all the difference.',
    rating: 5,
    subject: 'Maths',
    color: '#3b82f6',
    initials: 'SD',
  },
  {
    name: 'Mrs. Trapa Saha',
    grade: 'Parent of Grade 7 Student, SVVM',
    text: 'We\'ve noticed a remarkable transformation in our daughter\'s confidence, especially in Science and Maths. Rahul Sir doesn\'t just teach formulas; he builds analytical skills and is a true mentor who genuinely cares.',
    rating: 5,
    subject: 'Science & Maths',
    color: '#f97316',
    initials: 'TS',
  },
  {
    name: 'Prithviraj Shil',
    grade: 'Grade 8 Student, BTVM',
    text: 'Science used to feel like memorizing random facts, and Maths was just confusing numbers. Rahul Sir showed me how everything connects logically. Now I understand the "why" behind the concepts and genuinely love both subjects!',
    rating: 5,
    subject: 'Science & Maths',
    color: '#10b981',
    initials: 'PS',
  },
  {
    name: 'Mohua Sarkar',
    grade: 'Parent of Grade 6 Student, SKM',
    text: 'My son used to dread his Maths and Science homework, but now he tackles it with enthusiasm. His outstanding grades this term are largely thanks to Rahul Sir\'s consistent guidance and engaging teaching style. Highly recommended!',
    rating: 5,
    subject: 'Maths & Science',
    color: '#f59e0b',
    initials: 'MS',
  },
  {
    name: 'Amitangshu Nath',
    grade: 'Grade 9 Student, SDDKBMS',
    text: 'Rahul Sir has completely changed my approach to Science. The way he explains Physics numericals and Chemistry reactions makes them easy to understand and remember. His Biology notes are crisp and cover everything needed for exams. I feel much more confident now!',
    rating: 5,
    subject: 'Physics, Chemistry & Biology',
    color: '#10b981',
    initials: 'AN',
  }
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
