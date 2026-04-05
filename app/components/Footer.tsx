'use client';

import styles from './Footer.module.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Subjects', href: '#subjects' },
  { label: 'Why Us', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Enroll', href: '#contact' },
];

const subjects = [
  { label: 'Mathematics', href: '#subject-maths' },
  { label: 'Physics', href: '#subject-physics' },
  { label: 'Chemistry', href: '#subject-chemistry' },
  { label: 'Biology', href: '#subject-biology' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.topLine} />
      <div className="container">
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>R</div>
              <div>
                <div className={styles.logoMain}>Rahul Classes</div>
                <div className={styles.logoSub}>by Er. Rahul Das</div>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Expert coaching in Maths, Physics, Chemistry & Biology for students in Grades 6–10.
              Guided by an NIT Agartala graduate with a passion for teaching.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://wa.me/918787692565" target="_blank" rel="noreferrer" className={styles.socialBtn} aria-label="WhatsApp" id="footer-whatsapp">
                💬
              </a>
              <a href="tel:+918787692565" className={styles.socialBtn} aria-label="Call" id="footer-call">
                📞
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={styles.link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subjects */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Subjects</h4>
            <ul className={styles.linkList}>
              {subjects.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={styles.link}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactList}>
              <div className={styles.contactRow}>
                <span>📱</span>
                <a href="tel:+918787692565" className={styles.link}>+91 8787692565</a>
              </div>
              <div className={styles.contactRow}>
                <span>💬</span>
                <a href="https://wa.me/918787692565" target="_blank" rel="noreferrer" className={styles.link}>WhatsApp</a>
              </div>
              <div className={styles.contactRow}>
                <span>📍</span>
                <span className={styles.muted}>Available Anywhere</span>
              </div>
              <div className={styles.contactRow}>
                <span>🎓</span>
                <span className={styles.muted}>NIT Agartala</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {year} <strong>Rahul Classes</strong>. All rights reserved. Made with ❤️ by Souradip Debnath.
          </p>
          <div className={styles.gradesBadge}>
            Grades 6–10 | Maths · Physics · Chemistry · Biology
          </div>
        </div>
      </div>
    </footer>
  );
}
