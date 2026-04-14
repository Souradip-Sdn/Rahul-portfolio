'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { useTheme } from './ThemeProvider';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Why Us', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* ── Logo ── */}
        <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
          <div className={styles.logoIcon}>
            <svg
              viewBox="0 0 200 200"
              width="100%"
              height="100%"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.logoSvg}
            >
              <circle
                className={styles.spinningRing}
                cx="100"
                cy="100"
                r="85"
                stroke="currentColor"
                strokeWidth="6"
                strokeDasharray="12 12"
              />
              <circle
                cx="100"
                cy="100"
                r="92"
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.3"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="70"
                ry="25"
                transform="rotate(45 100 100)"
                stroke="currentColor"
                strokeWidth="6"
              />
              <ellipse
                cx="100"
                cy="100"
                rx="70"
                ry="25"
                transform="rotate(-45 100 100)"
                stroke="currentColor"
                strokeWidth="6"
              />
              <path
                d="M100 50 C100 85 85 100 50 100 C85 100 100 115 100 150 C100 115 115 100 150 100 C115 100 100 85 100 50 Z"
                fill="url(#navGoldGradient)"
              />
              <circle cx="100" cy="100" r="8" fill="white" />
              <defs>
                <linearGradient
                  id="navGoldGradient"
                  x1="50"
                  y1="50"
                  x2="150"
                  y2="150"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FBBF24" />
                  <stop offset="1" stopColor="#D97706" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className={styles.logoText}>
            <span className={styles.logoMain}>Rahul Classes</span>
            <span className={styles.logoSub}>by Er. Rahul Das</span>
          </div>
        </a>

        {/* ── Nav links ── */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Theme toggle ── */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>

        {/* ── CTA ── */}
        <a
          href="#contact"
          className={styles.ctaBtn}
          onClick={() => handleNavClick('#contact')}
        >
          Enroll Now
        </a>

        {/* ── Hamburger ── */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </nav>
  );
}