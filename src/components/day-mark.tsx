const TICKS = 21;

export function DayMark() {
  const ticks = Array.from({ length: TICKS }, (_, i) => {
    const angle = (i / TICKS) * Math.PI * 2 - Math.PI / 2;
    const inner = 78;
    const outer = i === 0 ? 96 : 88;
    return {
      i,
      x1: 100 + Math.cos(angle) * inner,
      y1: 100 + Math.sin(angle) * inner,
      x2: 100 + Math.cos(angle) * outer,
      y2: 100 + Math.sin(angle) * outer,
    };
  });

  return (
    <figure className="day-mark" aria-label="Dia 1 de 21">
      <svg viewBox="0 0 200 200" className="day-mark-svg" aria-hidden="true">
        <circle className="day-track" cx="100" cy="100" r="70" />
        <circle className="day-progress" cx="100" cy="100" r="70" />
        {ticks.map((t) => (
          <line
            key={t.i}
            className={t.i === 0 ? "day-tick day-tick-on" : "day-tick"}
            x1={t.x1}
            y1={t.y1}
            x2={t.x2}
            y2={t.y2}
          />
        ))}
      </svg>
      <figcaption className="day-mark-copy">
        <p className="day-kicker">Dia</p>
        <p className="day-num">
          01<span>/21</span>
        </p>
      </figcaption>
    </figure>
  );
}
