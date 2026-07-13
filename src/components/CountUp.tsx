import { useEffect, useRef, useState } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
};

export function CountUp({ value, prefix = "", suffix = "" }: CountUpProps) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [current, setCurrent] = useState(reduceMotion ? value : 0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (reduceMotion) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        let frame = 0;
        const totalFrames = 44;
        const tick = () => {
          frame += 1;
          setCurrent(Math.round((value * frame) / totalFrames));
          if (frame < totalFrames) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [reduceMotion, value]);

  return (
    <span ref={ref}>
      {suffix === "+" ? `+${current}` : `${prefix}${current}${suffix}`}
    </span>
  );
}
