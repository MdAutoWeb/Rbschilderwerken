interface PhotoSlotProps {
  label?: string;
  style?: React.CSSProperties;
}

export default function PhotoSlot({ label = "Foto", style }: PhotoSlotProps) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: "var(--cream-2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width="36"
        height="36"
        stroke="var(--gold)"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: 0.7 }}
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
      <span
        style={{
          fontSize: 10,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "var(--ink-soft)",
          opacity: 0.5,
        }}
      >
        {label}
      </span>
    </div>
  );
}
