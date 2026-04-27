import { Calendar, Clock, MapPin, Users } from 'lucide-react'
import { TiltLogo } from './tilt-logo'

const stats = [
  { icon: Calendar, label: 'Date', value: 'May 8, 2026' },
  { icon: Clock, label: 'Reporting', value: '3:00 PM (Gate Closes 3:30)' },
  { icon: MapPin, label: 'Venue', value: 'EV Auditorium, 3rd Floor' },
  { icon: Users, label: 'Open to', value: 'Class 4 – 10' },
]

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 text-center overflow-hidden bg-[#020617]"
    >
      {/* Liquid Background Refraction */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

      {/* High-Depth Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8">

        {/* BRAINFLUX Logo SVG - 3D Tilt Effect */}
        <TiltLogo className="w-full flex justify-center px-12 md:px-24">
          <div
            data-glass
            className="drop-shadow-[0_0_35px_rgba(59,130,246,0.3)]"
          >
            <img
              src="/brainflux-logo.svg"
              alt="BRAINFLUX Quiz Olympiad 2026"
              className="w-full max-w-sm h-auto"
            />
          </div>
        </TiltLogo>

        {/* Org badge - Liquid Glass style */}
        <span className="inline-block rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
          Organized by ISTARC &mdash; Ideal School & College
        </span>

        {/* FIXED: Added opening <p> tag and Liquid Glass styling */}
        <p className="max-w-2xl text-white/70 leading-relaxed text-balance text-sm md:text-base">
          A multi-dimensional academic and strategic competition designed to challenge the intellect,
          creativity, and analytical skills of students. Featuring Quiz, Case Solving, Chess, Rubik&apos;s Cube,
          Extempore Speech, and Anime Quiz.
        </p>

        {/* CTA buttons - Gel Pod Style */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href="#fees"
            className="rounded-full bg-blue-600 px-8 py-4 text-sm font-black text-white hover:bg-blue-500 transition-all shadow-[0_15px_30px_rgba(37,99,235,0.4)] border-t border-white/30 active:scale-95"
          >
            Register Now — 100 BDT
          </a>
          <a
            href="#structure"
            className="rounded-full border border-white/10 bg-white/5 backdrop-blur-lg px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-all active:scale-95"
          >
            View Event Details
          </a>
        </div>

        {/* Stats row - Liquid Glass Pods */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 w-full max-w-4xl px-2">
          {stats.map(({ icon: Icon, label, value }) => (
            <div
              key={label}
              data-glass
              className="flex flex-col items-center gap-3 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-6 shadow-2xl transition-transform hover:scale-105"
            >
              <div className="p-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                <Icon size={18} className="text-blue-400" />
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">{label}</p>
                <p className="text-xs font-bold text-white leading-tight">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint - Refined */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 animate-pulse">
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase font-bold">Discover</span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-blue-500/50 to-transparent" />
      </div>
    </section>
  )
}
