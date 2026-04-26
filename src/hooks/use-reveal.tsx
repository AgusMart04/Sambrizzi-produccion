import { useEffect, useRef } from "react";

export function useReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export function useCountUp(end: number, duration = 2000, start = false) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!start || !ref.current) return;
    const startTime = performance.now();
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const value = Math.floor(easeOut(progress) * end);
      if (ref.current) ref.current.textContent = value.toString();
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, start]);

  return ref;
}
