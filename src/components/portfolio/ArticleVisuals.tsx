export function BcflVisual() {
  return (
    <svg viewBox="0 0 320 160" className="w-full">
      <defs>
        <linearGradient id="bcflBg" x1="0" x2="1">
          <stop offset="0" stopColor="#3E5974" stopOpacity="0.15" />
          <stop offset="1" stopColor="#A07D54" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <rect width="320" height="160" fill="url(#bcflBg)" rx="12" />
      {/* central server */}
      <rect x="130" y="20" width="60" height="34" rx="8" fill="#3E5974" />
      <text x="160" y="41" textAnchor="middle" fill="#EEEAE2" fontSize="10" fontFamily="ui-monospace">
        server
      </text>
      <text x="160" y="70" textAnchor="middle" fill="#3E5974" fontSize="10" fontFamily="ui-serif" fontStyle="italic">
        w_t
      </text>
      {/* clients */}
      {[40, 110, 180, 250].map((x, i) => (
        <g key={x}>
          <line x1="160" y1="54" x2={x + 20} y2="110" stroke="#A07D54" strokeWidth="1" strokeDasharray="3 3" />
          <rect x={x} y="108" width="40" height="30" rx="6" fill="#A07D54" opacity="0.85" />
          <text x={x + 20} y="127" textAnchor="middle" fill="#EEEAE2" fontSize="9" fontFamily="ui-monospace">
            c{i + 1}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function DpoVisual() {
  return (
    <div className="flex h-full items-center justify-center bg-[color-mix(in_oklab,var(--slate-ink)_8%,transparent)] p-6">
      <div className="text-center font-display text-lg leading-tight" style={{ color: "var(--slate-ink)" }}>
        π<sub>ref</sub>(y | x) · exp
        <span className="mx-0.5">(</span>
        <span className="italic">f</span>
        (r<sub>φ</sub>, π<sub>ref</sub>, β)
        <span className="mx-0.5">)</span>
        <div className="mt-2 h-px w-32 mx-auto" style={{ backgroundColor: "var(--tan)" }} />
        <div className="mt-2 text-xs text-muted-foreground font-sans not-italic">
          DPO objective — reward folded into policy
        </div>
      </div>
    </div>
  );
}

export function SbertVisual() {
  return (
    <svg viewBox="0 0 320 160" className="w-full">
      <rect width="320" height="160" fill="#5D5646" opacity="0.08" rx="12" />
      {[
        { x: 30, label: "A" },
        { x: 190, label: "B" },
      ].map(({ x, label }) => (
        <g key={label}>
          <rect x={x} y="20" width="100" height="26" rx="6" fill="#EEEAE2" stroke="#3E5974" />
          <text x={x + 50} y="37" textAnchor="middle" fontSize="10" fill="#3E5974" fontFamily="ui-monospace">
            Sentence {label}
          </text>
          <rect x={x} y="58" width="100" height="30" rx="6" fill="#3E5974" />
          <text x={x + 50} y="77" textAnchor="middle" fontSize="10" fill="#EEEAE2" fontFamily="ui-monospace">
            BERT
          </text>
          <line x1={x + 50} y1="88" x2={x + 50} y2="108" stroke="#A07D54" strokeWidth="1.5" />
        </g>
      ))}
      <rect x="80" y="110" width="160" height="30" rx="6" fill="#A07D54" />
      <text x="160" y="129" textAnchor="middle" fontSize="11" fill="#EEEAE2" fontFamily="ui-serif" fontStyle="italic">
        (u, v, |u − v|)
      </text>
    </svg>
  );
}

export function ArticleVisual({ kind }: { kind: "bcfl" | "dpo" | "sbert" }) {
  if (kind === "bcfl") return <BcflVisual />;
  if (kind === "dpo") return <DpoVisual />;
  return <SbertVisual />;
}
