'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

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
        <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')}>
          <div className={styles.logoIcon}>
            <span>R</span>
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>Rahul Classes</span>
            <span className={styles.logoSub}>by Er. Rahul Das</span>
          </div>
        </a>

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

        <a href="#contact" className={styles.ctaBtn} onClick={() => handleNavClick('#contact')}>
          Enroll Now
        </a>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}
