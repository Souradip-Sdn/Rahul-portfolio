'use client';

import Image from 'next/image';
import { useEffect, useRef, useState, useCallback } from 'react';
import styles from './About.module.css';

const achievements = [
  { icon: '🎓', title: 'B.Tech Graduate', detail: 'NIT Agartala — Premier Engineering Institute' },
  { icon: '📚', title: '4+ Years', detail: 'Teaching Experience across multiple subjects' },
  { icon: '🏆', title: '20+ Students', detail: 'Guided to academic excellence' },
  { icon: '⭐', title: '95% Success Rate', detail: 'Students achieving target scores' },
];

// Add your 3 photo paths here
const photos = ['/1.jpeg', '/2.jpeg', '/3.jpeg'];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  // Restart timer when user manually clicks a dot
  const handleDotClick = (index: number) => {
    goTo(index);
    startTimer();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="about" ref={sectionRef}
      style={{ background: 'linear-gradient(180deg, #0a0e1a 0%, #0f172a 100%)' }}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: Profile card */}
          <div className="reveal-left">
            <div className={styles.profileCard}>
              <div className={styles.profileImageWrapper}>
                <div className={styles.profileImage}>

                  {/* Carousel */}
                  <div className={styles.carousel}>
                    <div
                      className={styles.carouselTrack}
                      style={{ transform: `translateX(-${(current * 100) / photos.length}%)` }}
                    >
                      {photos.map((src, i) => (
                        <div key={i} className={styles.carouselSlide}>
                          <Image
                            src={src}
                            alt={`Er. Rahul Das photo ${i + 1}`}
                            fill
                            style={{ objectFit: 'cover' }}
                            priority={i === 0}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dots */}
                  <div className={styles.carouselDots}>
                    {photos.map((_, i) => (
                      <button
                        key={i}
                        className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                        onClick={() => handleDotClick(i)}
                        aria-label={`Go to photo ${i + 1}`}
                      />
                    ))}
                  </div>

                  <div className={styles.ringOuter} />
                  <div className={styles.ringInner} />
                </div>

                {/* Floating badge */}
                <div className={styles.nitBadge}>
                  <span>🏛️</span>
                  <div>
                    <div className={styles.nitTitle}>NIT Agartala</div>
                    <div className={styles.nitDeg}>B.Tech Graduate</div>
                  </div>
                </div>
              </div>

              <div className={styles.profileInfo}>
                <h3 className={styles.profileName}>Er. Rahul Das</h3>
                <p className={styles.profileTitle}>Expert Tutor & Educator</p>
                <p className={styles.profileDesc}>
                  Passionate educator committed to making complex concepts simple and accessible for every student.
                </p>

                <div className={styles.contactChips}>
                  <a href="https://wa.me/918787692565" target="_blank" rel="noreferrer" className={styles.whatsapp}>
                    <span>📱</span> +91 8787692565
                  </a>
                  <div className={styles.locationChip}>
                    <span>📍</span> Available Anywhere
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="reveal-right">
            <p className="section-tag">About the Educator</p>
            <h2 className="section-title">
              Transforming Education,{' '}
              <span className="gradient-text">One Student at a Time</span>
            </h2>
            <p className={styles.bodyText}>
              Er. Rahul Das is an accomplished educator and engineer from the prestigious
              <strong style={{ color: '#93c5fd' }}> National Institute of Technology, Agartala</strong>.
              With a deep passion for teaching, he has been guiding students from Grades 6 to 10
              in mastering core science and math subjects.
            </p>
            <blockquote style={{ borderLeft: '4px solid #3b82f6', paddingLeft: '16px', margin: '24px 0', fontStyle: 'italic', color: '#e2e8f0', fontSize: '1.1rem' }}>
              "Every child can learn — when guided with patience and belief."
            </blockquote>
            <p className={styles.bodyText}>
              His teaching method is built on three core pillars: <strong style={{ color: '#a78bfa' }}>Personal Attention</strong>, <strong style={{ color: '#60a5fa' }}>Concept Clarity</strong>, and <strong style={{ color: '#34d399' }}>Result-Focused Teaching</strong> — ensuring every student progresses at their own pace and achieves their academic goals.
            </p>

            <div className={styles.achievements}>
              {achievements.map((a, i) => (
                <div
                  key={a.title}
                  className={`${styles.achievementCard} reveal`}
                  style={{ transitionDelay: `${i * 0.1 + 0.3}s` }}
                >
                  <div className={styles.achieveIcon}>{a.icon}</div>
                  <div>
                    <div className={styles.achieveTitle}>{a.title}</div>
                    <div className={styles.achieveDetail}>{a.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn btn-primary" id="about-enroll-btn" style={{ marginTop: '32px' }}>
              Start Learning Today →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}