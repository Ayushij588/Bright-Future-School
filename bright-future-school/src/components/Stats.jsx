import { useEffect, useRef, useState } from "react";
import "./Stats.css";

const STATS = [
  { icon: "🏫", value: 15, suffix: "+", label: "Years of Excellence" },
  { icon: "👩‍🎓", value: 4200, suffix: "+", label: "Students Enrolled" },
  { icon: "👩‍🏫", value: 180, suffix: "+", label: "Expert Faculty" },
  { icon: "🏆", value: 320, suffix: "+", label: "Awards & Honours" },
  { icon: "📊", value: 98,  suffix: "%",  label: "Board Pass Rate" },
  { icon: "🌍", value: 40,  suffix: "+",  label: "Countries Represented" },
];

function Counter({ end, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, end);
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [active, end]);
  return <>{count}{suffix}</>;
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="stats-section" ref={ref} aria-label="School statistics">
      <div className="stats-inner">
        <div className="container stats-grid">
          {STATS.map((s, i) => (
            <div className="stat-card" key={i} style={{ animationDelay: `${i * 80}ms` }}>
              <div className="stat-icon" aria-hidden="true">{s.icon}</div>
              <div className="stat-value">
                <Counter end={s.value} suffix={s.suffix} active={active} />
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}