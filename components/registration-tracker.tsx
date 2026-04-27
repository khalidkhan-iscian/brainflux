'use client'

import { TrendingUp, FileText } from 'lucide-react'

const TOTAL_CAPACITY = 100
const REGISTERED = 3
const SPOTS_LEFT = TOTAL_CAPACITY - REGISTERED
const CAPACITY_PCT = Math.round((REGISTERED / TOTAL_CAPACITY) * 100)

export function RegistrationTracker() {
  return (
    <section className="py-16 px-4 flex items-center justify-center">
      {/* Outer resin card */}
      <div
        data-glass
        className="relative w-full max-w-2xl p-6"
        style={{
          borderRadius: '40px',
          background:
            'linear-gradient(135deg, oklch(0.22 0.04 220 / 0.72) 0%, oklch(0.16 0.03 240 / 0.60) 100%)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid oklch(1 0 0 / 0.12)',
          borderTop: '1px solid oklch(1 0 0 / 0.22)',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex items-center justify-center w-10 h-10 shrink-0"
            style={{
              borderRadius: '14px',
              background:
                'linear-gradient(135deg, oklch(0.50 0.24 255) 0%, oklch(0.42 0.22 265) 100%)',
              border: '1px solid oklch(1 0 0 / 0.15)',
              borderTop: '1px solid oklch(1 0 0 / 0.30)',
            }}
          >
            <TrendingUp size={18} className="text-white" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/90">
              Live Registration
            </p>
            <p className="text-sm leading-tight" style={{ color: 'oklch(0.72 0.04 220)' }}>
              Event Capacity Tracker
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { value: REGISTERED, label: 'Registered', color: 'oklch(0.65 0.22 255)' },
            { value: SPOTS_LEFT, label: 'Spots Left', color: 'oklch(0.78 0.18 55)' },
            { value: `${CAPACITY_PCT}%`, label: 'Capacity', color: 'oklch(0.70 0.18 155)' },
          ].map(({ value, label, color }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-5 gap-1"
              style={{
                borderRadius: '24px',
                background: 'oklch(0.14 0.03 230 / 0.55)',
                border: '1px solid oklch(1 0 0 / 0.08)',
                borderTop: '1px solid oklch(1 0 0 / 0.18)',
              }}
            >
              <span className="font-mono text-3xl font-black" style={{ color }}>
                {value}
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mb-3">
          <div
            className="w-full h-3 overflow-hidden"
            style={{
              borderRadius: '999px',
              background: 'oklch(0.14 0.03 230 / 0.55)',
              border: '1px solid oklch(1 0 0 / 0.08)',
            }}
          >
            <div
              className="h-full transition-all duration-700"
              style={{
                width: `${CAPACITY_PCT}%`,
                borderRadius: '999px',
                background:
                  'linear-gradient(90deg, oklch(0.55 0.25 255) 0%, oklch(0.78 0.20 75) 100%)',
              }}
            />
          </div>
        </div>

        {/* Warning text */}
        <p className="text-center text-xs mb-5" style={{ color: 'oklch(0.72 0.04 220)' }}>
          Limited spots available! Register soon to secure your place.
        </p>

        {/* Gel Register Now button */}
        <a
          href="#fees"
          className="register-gel-btn flex items-center justify-center gap-2.5 w-full py-4 text-sm font-bold text-white"
          style={{
            borderRadius: '999px',
            background:
              'linear-gradient(180deg, oklch(0.60 0.26 255) 0%, oklch(0.48 0.24 258) 60%, oklch(0.38 0.22 262) 100%)',
            border: '1px solid oklch(1 0 0 / 0.20)',
            borderTop: '1px solid oklch(1 0 0 / 0.40)',
            boxShadow:
              '0 2px 8px oklch(0.50 0.24 255 / 0.30), inset 0 1px 0 oklch(1 0 0 / 0.20)',
          }}
        >
          <FileText size={16} />
          Register Now
        </a>
      </div>

      <style>{`
        .register-gel-btn {
          transition: box-shadow 0.3s ease, background 0.3s ease;
          animation: gel-idle 3s ease-in-out infinite;
        }
        .register-gel-btn:hover {
          animation: gel-pulse 1.2s ease-in-out infinite;
          background: linear-gradient(
            180deg,
            oklch(0.70 0.28 255) 0%,
            oklch(0.58 0.26 258) 60%,
            oklch(0.46 0.24 262) 100%
          ) !important;
          box-shadow:
            0 0 24px oklch(0.62 0.26 255 / 0.60),
            0 4px 16px oklch(0.50 0.24 255 / 0.45),
            inset 0 1px 0 oklch(1 0 0 / 0.30) !important;
        }
        @keyframes gel-idle {
          0%, 100% { box-shadow: 0 2px 8px oklch(0.50 0.24 255 / 0.30), inset 0 1px 0 oklch(1 0 0 / 0.20); }
          50%       { box-shadow: 0 4px 14px oklch(0.50 0.24 255 / 0.45), inset 0 1px 0 oklch(1 0 0 / 0.24); }
        }
        @keyframes gel-pulse {
          0%, 100% {
            box-shadow: 0 0 18px oklch(0.62 0.26 255 / 0.50), 0 4px 14px oklch(0.50 0.24 255 / 0.40), inset 0 1px 0 oklch(1 0 0 / 0.28);
            transform: scale(1);
          }
          50% {
            box-shadow: 0 0 32px oklch(0.62 0.26 255 / 0.75), 0 6px 20px oklch(0.50 0.24 255 / 0.55), inset 0 1px 0 oklch(1 0 0 / 0.34);
            transform: scale(1.012);
          }
        }
      `}</style>
    </section>
  )
}
