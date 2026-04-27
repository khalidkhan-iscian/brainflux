export function AntiCheatingStrategy() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-destructive">
            Zero-Tolerance Fairness Protocol
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            The 1-1-1 Node<br />Anti-Cheating Strategy
          </h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed text-balance">
            A revolutionary bench composition system ensuring impartial competition through mandatory diversity.
          </p>
        </div>

        {/* Main visual: Three bubbles equation */}
        <div className="flex flex-col items-center gap-8 mb-16">
          {/* Bubble Equation */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            {/* Primary Bubble */}
            <div
              className="flex flex-col items-center gap-3 p-6 rounded-full border-2 border-chart-3/60"
              style={{
                width: '120px',
                height: '120px',
                background: 'radial-gradient(135% 135% at 50% 50%, oklch(0.35 0.12 160 / 0.15) 0%, transparent 100%)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px oklch(0.35 0.12 160 / 0.2)',
              }}
            >
              <span className="text-2xl font-black text-chart-3">P</span>
              <p className="text-xs font-semibold text-muted-foreground text-center">Primary</p>
            </div>

            {/* Plus symbol */}
            <div className="text-3xl font-bold text-primary">+</div>

            {/* Junior Bubble */}
            <div
              className="flex flex-col items-center gap-3 p-6 rounded-full border-2 border-primary/60"
              style={{
                width: '120px',
                height: '120px',
                background: 'radial-gradient(135% 135% at 50% 50%, oklch(0.62 0.22 255 / 0.15) 0%, transparent 100%)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px oklch(0.62 0.22 255 / 0.2)',
              }}
            >
              <span className="text-2xl font-black text-primary">J</span>
              <p className="text-xs font-semibold text-muted-foreground text-center">Junior</p>
            </div>

            {/* Plus symbol */}
            <div className="text-3xl font-bold text-primary">+</div>

            {/* Senior Bubble */}
            <div
              className="flex flex-col items-center gap-3 p-6 rounded-full border-2 border-accent/60"
              style={{
                width: '120px',
                height: '120px',
                background: 'radial-gradient(135% 135% at 50% 50%, oklch(0.78 0.18 85 / 0.15) 0%, transparent 100%)',
                backdropFilter: 'blur(12px)',
                boxShadow: '0 8px 32px oklch(0.78 0.18 85 / 0.2)',
              }}
            >
              <span className="text-2xl font-black text-accent">S</span>
              <p className="text-xs font-semibold text-muted-foreground text-center">Senior</p>
            </div>

            {/* Equals symbol */}
            <div className="text-3xl font-bold text-primary">=</div>

            {/* Result: 1 Bench */}
            <div
              className="flex flex-col items-center gap-3 p-6 rounded-2xl border-2 border-primary/40"
              style={{
                background: 'linear-gradient(135deg, oklch(0.62 0.22 255 / 0.1) 0%, oklch(0.78 0.18 85 / 0.08) 100%)',
                backdropFilter: 'blur(12px)',
                minWidth: '120px',
              }}
            >
              <span className="text-2xl font-black text-primary">1</span>
              <p className="text-xs font-semibold text-muted-foreground text-center">Bench</p>
            </div>
          </div>

          {/* Explanation text */}
          <p className="max-w-3xl text-center text-sm leading-relaxed text-muted-foreground">
            Every bench must contain exactly one student from each category—<span className="text-chart-3 font-semibold">Primary</span>, <span className="text-primary font-semibold">Junior</span>, and <span className="text-accent font-semibold">Senior</span>. This revolutionary structure eliminates collusion, ensures equal participation, and guarantees that no single age group dominates the scoring. It&apos;s fairness engineered.
          </p>
        </div>

        {/* Key principles grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: 'Mandatory Diversity',
              desc: 'No same-category bench grouping allowed. Every team spans all three academic tiers.',
              icon: '🔀',
            },
            {
              title: 'Balanced Accountability',
              desc: 'Each group contributes equally to bench success. No single category can carry the entire bench.',
              icon: '⚖️',
            },
            {
              title: 'Transparent Scoring',
              desc: 'Individual performance is tracked and pooled. Results are tamper-proof and verifiable in real-time.',
              icon: '✓',
            },
          ].map((principle, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-border/50 p-6 text-center"
              style={{
                background: 'linear-gradient(135deg, oklch(0.16 0.025 255 / 0.6) 0%, oklch(0.2 0.03 255 / 0.4) 100%)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="text-3xl mb-3">{principle.icon}</div>
              <h4 className="font-mono text-sm font-bold text-foreground mb-2">{principle.title}</h4>
              <p className="text-xs leading-relaxed text-muted-foreground">{principle.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
