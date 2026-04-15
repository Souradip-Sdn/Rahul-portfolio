'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './Enroll.module.css';

// ✅ Paste your NEW Google Apps Script Web App URL here (after redeploying)
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzS9PQEEEPHtichuayDS8IYN47mSLOzs-yyoem5MxJpGoFWRRboAhTKZUrz-5ckX94G/exec';

interface FormData {
  name: string;
  phone: string;
  batch: string;
  message: string;
}

const batches = [
  'Standard Course - Class 6 (Science & Maths)',
  'Standard Course - Class 7 (Science & Maths)',
  'Standard Course - Class 8 (Science & Maths)',
  'Premium Course - Science & Maths + Olympiad',
  'Board Excellence - Class 9 Maths',
  'Board Excellence - Class 9 Science',
  'Board Excellence - Class 9 Maths & Science',
  'Board Excellence - Class 10 Maths',
  'Board Excellence - Class 10 Science',
  'Board Excellence - Class 10 Maths & Science'
];

export default function Enroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState<FormData>({ name: '', phone: '', batch: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        // FIX: Change to text/plain to bypass CORS preflight requests
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(form),
      });
    } catch (err) {
      console.error('Sheet submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  const contactItems = [
    // { icon: '📱', label: 'Phone / WhatsApp', value: '+91 8787692565', link: 'https://wa.me/918787692565' },
    { icon: '📍', label: 'Location', value: 'Available Anywhere — Online & Offline', link: null },
    { icon: '🎓', label: 'Qualification', value: 'B.Tech, NIT Agartala', link: null },
    { icon: '📚', label: 'Classes', value: 'Grades 6 to 10 — Maths, Physics, Chemistry, Biology', link: null },
  ];

  return (
    <section className={`section ${styles.section}`} id="contact" ref={sectionRef}>
      <div className={styles.bgGlow1} />
      <div className={styles.bgGlow2} />

      <div className="container">
        <div className={styles.header}>
          <span className="section-tag">Get Started</span>
          <h2 className="section-title">
            Ready to <span className="gradient-text">Transform Your Grades?</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Take the first step toward academic excellence. Fill in your details and
            Er. Rahul Das will get back to you within 24 hours.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Form */}
          <div className={`${styles.formCard} reveal-left`}>
            {submitted ? (
              <div className={styles.success}>
                <div className={styles.successIcon}>✅</div>
                <h3 className={styles.successTitle}>Enrollment Request Sent!</h3>
                <p className={styles.successText}>
                  Thank you! Er. Rahul Das will contact you at&nbsp;
                  <strong style={{ color: '#3b82f6' }}>{form.phone}</strong> within 24 hours.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', batch: '', message: '' }); }}
                  id="submit-another-btn"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} id="enrollment-form">
                <h3 className={styles.formTitle}>Enroll Now — It&apos;s Free to Inquire</h3>
                <p className={styles.formSubtitle}>Fill in your details and we&apos;ll get back to you soon.</p>

                <div className={styles.formRow}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Student&apos;s Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="Enter full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="phone">Phone / WhatsApp *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className={styles.input}
                      placeholder="+91 XXXXXXXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.field} style={{ gridColumn: '1 / -1' }}>
                    <label className={styles.label} htmlFor="batch">Select Batch *</label>
                    <select id="batch" name="batch" className={styles.input} value={form.batch} onChange={handleChange} required>
                      <option value="">Select a batch...</option>
                      {batches.map((b) => <option key={b} value={b}>{b}</option>)}
                    </select>
                  </div>
                </div>

                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    className={`${styles.input} ${styles.textarea}`}
                    placeholder="Any specific topics or concerns..."
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                  disabled={loading}
                  id="submit-enrollment-btn"
                >
                  {loading ? (
                    <span className={styles.spinner} />
                  ) : (
                    <>
                      <span>🚀</span> Send Enrollment Request
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className={`${styles.contactPanel} reveal-right`}>
            <div className={styles.contactHeader}>
              <div className={styles.contactAvatar}>RD</div>
              <div>
                <div className={styles.contactName}>Er. Rahul Das</div>
                <div className={styles.contactQual}>B.Tech, NIT Agartala</div>
              </div>
            </div>

            <p className={styles.contactDesc}>
              Have questions? Reach out directly on WhatsApp for immediate assistance.
              Rahul Sir personally responds to every inquiry.
            </p>

            {contactItems.map((item) => (
              <div key={item.label} className={styles.contactItem}>
                <div className={styles.contactItemIcon}>{item.icon}</div>
                <div>
                  <div className={styles.contactItemLabel}>{item.label}</div>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" className={styles.contactItemValue} style={{ color: '#3b82f6', textDecoration: 'none' }}>
                      {item.value}
                    </a>
                  ) : (
                    <div className={styles.contactItemValue}>{item.value}</div>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/918787692565?text=Hi%20Rahul%20Sir%2C%20I%20am%20interested%20in%20enrolling%20for%20tuition%20classes."
              target="_blank"
              rel="noreferrer"
              className={`btn ${styles.whatsappBtn}`}
              id="whatsapp-contact-btn"
            >
              <span style={{ fontSize: '1.2rem' }}>💬</span>
              Chat on WhatsApp
            </a>

            {/* Trust badges */}
            <div className={styles.trustBadges}>
              {['NIT Alumni', 'B.Tech Engineer', 'Expert Educator', 'Grade 6–10'].map((badge) => (
                <div key={badge} className={styles.badge}>{badge}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}