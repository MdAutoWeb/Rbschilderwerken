"use client";

import { useRef, useEffect } from "react";

interface BeforeAfterProps {
  beforeContent: React.ReactNode;
  afterContent: React.ReactNode;
  initialValue?: number;
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function BeforeAfter({
  beforeContent,
  afterContent,
  initialValue = 50,
  ariaLabel = "Sleep om voor en na te vergelijken",
  className = "",
  style,
}: BeforeAfterProps) {
  const afterWrapRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const rangeRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const range = rangeRef.current;
    const afterWrap = afterWrapRef.current;
    const handle = handleRef.current;
    if (!range || !afterWrap || !handle) return;

    const setPct = (v: number) => {
      const p = Math.max(0, Math.min(100, v));
      afterWrap.style.clipPath = `inset(0 0 0 ${p}%)`;
      handle.style.left = p + "%";
      range.value = String(p);
    };

    const onInput = () => setPct(+range.value);
    range.addEventListener("input", onInput);
    setPct(initialValue);

    return () => range.removeEventListener("input", onInput);
  }, [initialValue]);

  return (
    <div className={`ba ${className}`} style={style}>
      {beforeContent}
      <div className="ba-after-wrap" ref={afterWrapRef}>
        {afterContent}
      </div>
      <span className="ba-tag left">Voor</span>
      <span className="ba-tag right">Na</span>
      <div className="ba-handle" ref={handleRef}>
        <div className="ba-thumb" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
            <polyline points="9 18 3 12 9 6" />
          </svg>
        </div>
      </div>
      <input
        className="ba-range"
        type="range"
        min="0"
        max="100"
        defaultValue={initialValue}
        aria-label={ariaLabel}
        ref={rangeRef}
      />
    </div>
  );
}
