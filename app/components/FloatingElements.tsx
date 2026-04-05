'use client';

import React, { useEffect, useState } from 'react';
import styles from './FloatingElements.module.css';

// Randomize positions slightly on mount so it's fresh every time
interface FloatingItem {
  id: number;
  content: string | React.ReactNode;
  initialTop: number; // percentage
  initialLeft: number; // percentage
  fontSize: string;
  duration: number; // seconds
  isEmoji?: boolean;
}

const initialElements: FloatingItem[] = [
  { id: 1, content: 'π', initialTop: 15, initialLeft: 10, fontSize: '4rem', duration: 25 },
  { id: 2, content: 'E=mc²', initialTop: 25, initialLeft: 85, fontSize: '2.5rem', duration: 34 },
  { id: 3, content: 'H₂O', initialTop: 70, initialLeft: 15, fontSize: '3.5rem', duration: 28 },
  { id: 4, content: '∫', initialTop: 85, initialLeft: 80, fontSize: '6rem', duration: 35 },
  { id: 5, content: '∑', initialTop: 45, initialLeft: 90, fontSize: '4.5rem', duration: 32 },
  { id: 6, content: '🧪', initialTop: 20, initialLeft: 40, fontSize: '3rem', duration: 29, isEmoji: true },
  { id: 7, content: '📚', initialTop: 75, initialLeft: 45, fontSize: '3.5rem', duration: 33, isEmoji: true },
  { id: 8, content: 'CO₂', initialTop: 10, initialLeft: 60, fontSize: '2.8rem', duration: 27 },
  { id: 9, content: '∞', initialTop: 50, initialLeft: 5, fontSize: '5rem', duration: 31 },
  { id: 10, content: '√', initialTop: 85, initialLeft: 25, fontSize: '4rem', duration: 30 },
  { id: 11, content: '🖊️', initialTop: 40, initialLeft: 30, fontSize: '3rem', duration: 26, isEmoji: true },
  { id: 12, content: 'F=ma', initialTop: 55, initialLeft: 70, fontSize: '2.5rem', duration: 36 },
  { id: 13, content: 'x² + y² = r²', initialTop: 35, initialLeft: 15, fontSize: '2rem', duration: 38 },
  { id: 14, content: 'H₂SO₄', initialTop: 80, initialLeft: 60, fontSize: '2.5rem', duration: 31 },
  { id: 15, content: '📖', initialTop: 15, initialLeft: 75, fontSize: '3rem', duration: 29, isEmoji: true },
];

export default function FloatingElements() {
  const [elements, setElements] = useState<FloatingItem[]>([]);

  useEffect(() => {
    // Only randomize client-side to avoid hydration mismatch
    const randomized = initialElements.map((el) => {
      const randomTopOffset = Math.random() * 10 - 5; // -5 to +5
      const randomLeftOffset = Math.random() * 10 - 5; 
      
      return {
        ...el,
        initialTop: Math.max(0, Math.min(100, el.initialTop + randomTopOffset)),
        initialLeft: Math.max(0, Math.min(100, el.initialLeft + randomLeftOffset))
      };
    });
    setElements(randomized);
  }, []);

  if (elements.length === 0) return null; // Don't render until mounted/randomized

  return (
    <div className={styles.container} aria-hidden="true">
      {elements.map((el) => (
        <div
          key={el.id}
          className={`${styles.item} ${el.isEmoji ? styles.emoji : ''}`}
          style={{
            top: `${el.initialTop}%`,
            left: `${el.initialLeft}%`,
            fontSize: el.fontSize,
            animationDuration: `${el.duration}s`,
            animationDelay: `-${Math.random() * 20}s` // Start animation at different points
          }}
        >
          {el.content}
        </div>
      ))}
    </div>
  );
}
