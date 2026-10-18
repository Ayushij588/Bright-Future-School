import React, { useState, useEffect, useRef } from "react";
import "./Stats.css";

function Counter({ end, suffix }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const boxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    const steps = 50;
    const increment = end / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 25);

    return () => clearInterval(timer);
  }, [started, end]);

  return (
    <span ref={boxRef} className="stat-number">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: "👥",
      number: 1500,
      suffix: "+",
      label: "Happy Students",
      detail: "Thriving in a supportive, engaging atmosphere",
    },
    {
      icon: "👩‍🏫",
      number: 80,
      suffix: "+",
      label: "Expert Teachers",
      detail: "Passionate mentors dedicated to student growth",
    },
    {
      icon: "🏛️",
      number: 25,
      suffix: "+",
      label: "Years of Excellence",
      detail: "Building tomorrow's leaders since 2001",
    },
    {
      icon: "📈",
      number: 98,
      suffix: "%",
      label: "Board Results",
      detail: "Consistent high achievement in CBSE exams",
    },
  ];

  return (
    <section className="stats-section" aria-label="School Statistics and Milestones">
      <div className="container">
        <div className="stats-grid">
          {stats.map((item) => (
            <div className="stat-card" key={item.label}>
              <div className="stat-icon-wrapper" aria-hidden="true">
                {item.icon}
              </div>
              <div className="stat-data">
                <Counter end={item.number} suffix={item.suffix} />
                <h3 className="stat-label">{item.label}</h3>
                <p className="stat-detail">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}