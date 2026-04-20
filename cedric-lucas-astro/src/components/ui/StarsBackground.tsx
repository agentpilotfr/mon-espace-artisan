import { useEffect, useRef } from 'react';

interface Props {
  className?: string;
  starColor?: string;
  speed?: number;
}

export function StarsBackground({ className = '', starColor = '#F8F6FF', speed = 60 }: Props) {
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);
  const ref3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layers = [
      { ref: ref1, count: 150, size: 1 },
      { ref: ref2, count: 80,  size: 2 },
      { ref: ref3, count: 40,  size: 3 },
    ];
    layers.forEach(({ ref, count, size }) => {
      if (!ref.current) return;
      const shadows: string[] = [];
      for (let i = 0; i < count; i++) {
        const x = Math.floor(Math.random() * 2000);
        const y = Math.floor(Math.random() * 2000);
        shadows.push(`${x}px ${y}px 0 ${size}px ${starColor}`);
      }
      ref.current.style.boxShadow = shadows.join(',');
    });
  }, [starColor]);

  const base: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '2000px',
    pointerEvents: 'none',
    zIndex: 1,
  };

  return (
    <div
      className={className}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}
    >
      <style>{`
        @keyframes starsMove1 { from { transform: translateY(0); } to { transform: translateY(-2000px); } }
        @keyframes starsMove2 { from { transform: translateY(0); } to { transform: translateY(-2000px); } }
        @keyframes starsMove3 { from { transform: translateY(0); } to { transform: translateY(-2000px); } }
        .stars-l1 { animation: starsMove1 ${speed}s linear infinite; opacity: 0.8; }
        .stars-l2 { animation: starsMove2 ${speed * 1.5}s linear infinite; opacity: 0.6; }
        .stars-l3 { animation: starsMove3 ${speed * 2.5}s linear infinite; opacity: 0.4; }
        @media (prefers-reduced-motion: reduce) {
          .stars-l1, .stars-l2, .stars-l3 { animation: none; }
        }
      `}</style>
      <div ref={ref1} className="stars-l1" style={base} />
      <div ref={ref2} className="stars-l2" style={base} />
      <div ref={ref3} className="stars-l3" style={base} />
    </div>
  );
}
