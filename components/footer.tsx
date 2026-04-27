'use client'

import { Facebook, ExternalLink, MapPin, Clock, Globe } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative px-4 pb-12 pt-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.45 0.18 255 / 0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Main glass container */}
        <div
          className="rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 md:p-12"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <div className="grid gap-10 md:grid-cols-3">

            {/* Col 1 — Branding & Institution */}
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Presented by
                </p>
                <span className="font-mono text-2xl font-black text-primary tracking-widest">
                  BRAINFLUX
                </span>
                <span className="block text-xs text-muted-foreground tracking-wider uppercase mt-0.5">
                  Quiz Olympiad 2026
                </span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                Organized by ISTARC — the Ideal Science and Technology Aiming Research Council, Banasree Campus.
              </p>

              {/* istarc.org link */}
              <a
                href="https://www.istarc.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary transition-all duration-300 hover:border-primary/50 hover:bg-primary/10"
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 0 16px oklch(0.55 0.22 255 / 0.35), 0 0 40px oklch(0.55 0.22 255 / 0.12)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <Globe size={12} />
                www.istarc.org
                <ExternalLink size={11} className="text-primary/50 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Col 2 — Event Details */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Event Details
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">May 8, 2026</p>
                    <p className="text-xs text-muted-foreground">3:00 PM – 5:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={14} className="text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">EV Building, 3rd Floor</p>
                    <p className="text-xs text-muted-foreground">Ideal School &amp; College</p>
                    <p className="text-xs text-muted-foreground">Banasree, Motijheel, Dhaka – 1000</p>
                  </div>
                </div>
              </div>

              {/* Motto */}
              <div className="mt-2 rounded-2xl border border-white/8 bg-white/5 px-4 py-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
              >
                <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">
                  ISTARC Motto
                </p>
                <p
                  className="font-mono text-xs font-bold italic leading-relaxed"
                  style={{
                    color: 'oklch(0.78 0.18 85 / 0.6)',
                    textShadow:
                      '0 0 12px oklch(0.78 0.18 85 / 0.25), 0 0 32px oklch(0.78 0.18 85 / 0.1)',
                  }}
                >
                  &ldquo;Science in Creation,<br />not Annihilation.&rdquo;
                </p>
                <p className="text-[10px] text-muted-foreground mt-1.5">Est. 2001</p>
              </div>
            </div>

            {/* Col 3 — Social Glass Card */}
            <div className="flex flex-col gap-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Stay Connected
              </p>

              {/* Facebook glassmorphic social card */}
              <div
                className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5 flex flex-col gap-4"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.18)',
                }}
              >
                {/* Card header */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl shrink-0"
                    style={{
                      background: 'linear-gradient(135deg, #1877F2, #0a5cbf)',
                    }}
                  >
                    <Facebook size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground leading-tight">ISTARC Official</p>
                    <p className="text-xs text-muted-foreground">Facebook Page</p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Follow ISTARC for live updates, results, and announcements on BRAINFLUX 2026.
                </p>

                {/* Gel pod Visit Page button */}
                <a
                  href="https://www.facebook.com/istarc.official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-xs font-bold text-white transition-all duration-300"
                  style={{
                    background: 'linear-gradient(135deg, #1877F2 0%, #0a5cbf 100%)',
                    boxShadow: '0 2px 12px rgba(24, 119, 242, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 4px 24px rgba(24, 119, 242, 0.55), inset 0 1px 0 rgba(255,255,255,0.25)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.03)'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      '0 2px 12px rgba(24, 119, 242, 0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                    ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                  }}
                >
                  {/* Gel sheen */}
                  <span className="absolute inset-x-0 top-0 h-1/2 rounded-t-full bg-white/15 pointer-events-none" />
                  <Facebook size={13} />
                  Visit Page
                  <ExternalLink size={11} className="opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="text-[11px] text-muted-foreground text-center sm:text-left">
              &copy; 2026 ISTARC &mdash; Ideal Science &amp; Technology Aiming Research Council. All rights reserved.
            </p>
            <p className="text-[11px] text-muted-foreground">
              Built with dedication for academic excellence.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
