'use client'

import { Ticket } from 'lucide-react'

interface Participant {
  id: string
  name: string
  class?: string
  sec?: string
  roll?: string
  version: 'EV' | 'BV'
  segments: string[]
}

export const TicketVisual = ({ data }: { data: Participant }) => {
  return (
    <div className="relative w-full max-w-[620px] bg-[#050505] border-[3px] border-white rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row text-white font-mono shadow-2xl transition-all duration-500 hover:shadow-primary/20 group">

      {/* Left Main Body */}
      <div className="flex-[2.8] p-7 flex flex-col justify-between border-b-[3px] md:border-b-0 md:border-r-[3px] border-dashed border-white/20 min-h-[260px]">
        <div className="flex justify-between items-start">
          <div className="space-y-1">
            <h2 className="text-4xl font-black italic tracking-tighter leading-none uppercase">BRAINFLUX</h2>
            <p className="text-[9px] font-bold tracking-widest opacity-50 uppercase">ISTARC | Ideal School & College</p>
          </div>
          <div className="text-[10px] text-right font-black leading-tight">
            MAY 08, 2026<br />
            <span className="opacity-60 font-medium">3:00PM - 5:00PM</span>
          </div>
        </div>

        {/* User Details Section */}
        <div className="my-6 space-y-4">
          <div className="text-lg font-bold">
            NAME: <span className="border-b-2 border-white/30 px-3 uppercase text-primary tracking-tight">{data.name}</span>
          </div>
          <div className="flex gap-6 text-[11px] font-bold opacity-80 uppercase tracking-tighter">
            <span>CLASS: <span className="text-white">{data.class || 'N/A'}</span></span>
            <span>SEC: <span className="text-white">{data.sec || 'N/A'}</span></span>
            <span>ROLL: <span className="text-white">{data.roll || 'N/A'}</span></span>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="flex justify-between items-center pt-4 border-t border-white/10">
          <div className="flex gap-2 text-[11px] font-black italic">
            <span className={data.version === 'BV' ? 'text-white' : 'opacity-20'}>BV</span>
            <span className="opacity-10">|</span>
            <span className={data.version === 'EV' ? 'text-white' : 'opacity-20'}>EV</span>
          </div>
          <div className="flex gap-3 text-[9px] uppercase font-bold tracking-tight">
            {['Quiz', 'Rubiks', 'Chess', 'Anime'].map(s => (
              <span key={s} className={data.segments.includes(s) ? "text-primary underline" : "opacity-20"}>
                {s}
              </span>
            ))}
          </div>
          <div className="text-xl font-black text-white/90">ID: {data.id}</div>
        </div>
      </div>

      {/* Right Stub Section */}
      <div className="flex-1 bg-white/[0.03] p-7 flex flex-col items-center justify-between text-center relative overflow-hidden">
        <div className="absolute -top-4 -right-4 opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700">
          <Ticket size={140} />
        </div>

        <h3 className="text-2xl font-black italic tracking-tighter leading-none z-10 uppercase">BRAINFLUX</h3>

        <div className="space-y-1 z-10">
          <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-40">Entry ID</p>
          <p className="text-4xl font-black tracking-tighter text-white">{data.id.split('-')[1] || data.id}</p>
        </div>

        <p className="text-[7.5px] italic opacity-30 leading-tight z-10 font-medium">
          "Science in creation,<br />Not in annihilation"
        </p>
      </div>
    </div>
  )
}