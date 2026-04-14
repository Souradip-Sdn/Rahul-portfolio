'use client';

import { useEffect, useState, useCallback } from 'react';
import styles from './ScrollButton.module.css';

export default function ScrollButton() {
  const [visible, setVisible] = useState(true);
  const [atBottom, setAtBottom] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── Global smooth-scroll interceptor for all #anchor links ──
  useEffect(() => {
    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const id = anchor.getAttribute('href')?.slice(1);
      if (!id) return;

      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });

      // Update URL without jumping
      history.pushState(null, '', `#${id}`);
    };

    document.addEventListener('click', onAnchorClick);
    return () => document.removeEventListener('click', onAnchorClick);
  }, []);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    setScrolled(scrollY > 80);
    setAtBottom(scrollY >= docHeight - 80);
    // Only hide when near absolute top AND not yet scrolled at all
    setVisible(true); // always visible
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleClick = () => {
    if (atBottom) {
      // Scroll back to top smoothly
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll down by one viewport height
      window.scrollBy({ top: window.innerHeight * 0.85, behavior: 'smooth' });
    }
  };

  return (
    <button
      id="floating-scroll-btn"
      className={`${styles.scrollBtn} ${scrolled ? styles.scrolled : ''} ${atBottom ? styles.atBottom : ''} ${!visible ? styles.hidden : ''}`}
      onClick={handleClick}
      aria-label={atBottom ? 'Scroll to top' : 'Scroll down'}
      title={atBottom ? 'Back to top' : 'Scroll down'}
    >
      <span className={styles.label}>{atBottom ? 'Top' : 'Scroll'}</span>
      <span className={styles.iconWrap}>
        <svg
          className={`${styles.arrow} ${atBottom ? styles.arrowUp : ''}`}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </span>
    </button>
  );
}
