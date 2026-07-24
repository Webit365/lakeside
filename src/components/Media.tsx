/**
 * Branded gradient "photo slots" used where Dave's real photos will go.
 * They render instantly (pure CSS/SVG, no network request → no CLS, perfect
 * for Lighthouse). To swap in a real photo, replace <PhotoSlot .../> with:
 *   <Image src="/photos/xyz.jpg" alt="..." fill className="object-cover" />
 * inside a relatively-positioned wrapper of the same aspect ratio.
 */

type Theme = "summer" | "winter" | "commercial" | "neutral";

const themes: Record<Theme, { from: string; to: string; accent: string }> = {
  summer: { from: "#1e4e35", to: "#3a7d54", accent: "#8fbd9d" },
  winter: { from: "#172a54", to: "#1d59d8", accent: "#93cdfd" },
  commercial: { from: "#153426", to: "#1e408a", accent: "#f9bd24" },
  neutral: { from: "#193f2c", to: "#276241", accent: "#bbd9c3" },
};

export function PhotoSlot({
  theme = "neutral",
  label,
  className = "",
  rounded = "rounded-2xl",
  icon,
}: {
  theme?: Theme;
  label?: string;
  className?: string;
  rounded?: string;
  icon?: React.ReactNode;
}) {
  const t = themes[theme];
  return (
    <div
      className={`relative overflow-hidden ${rounded} ${className}`}
      style={{
        background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
      }}
      aria-hidden="true"
    >
      {/* Topographic-style line pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        preserveAspectRatio="none"
        viewBox="0 0 400 300"
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M0 ${40 + i * 34} Q 100 ${10 + i * 34}, 200 ${40 + i * 34} T 400 ${40 + i * 34}`}
            fill="none"
            stroke={t.accent}
            strokeWidth="1.5"
          />
        ))}
      </svg>
      {/* Corner glow */}
      <div
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl"
        style={{ background: t.accent, opacity: 0.25 }}
      />
      {(icon || label) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          {icon && (
            <span className="text-white/90 [&>svg]:h-12 [&>svg]:w-12">
              {icon}
            </span>
          )}
          {label && (
            <span className="max-w-[80%] text-sm font-semibold uppercase tracking-wider text-white/80">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
