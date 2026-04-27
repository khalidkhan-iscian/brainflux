'use client'

import React, { useState } from 'react'
import { Menu, X, ShieldCheck } from 'lucide-react'

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Team', href: '/team' },
  { label: 'Schedule', href: '/#schedule' },
  { label: 'Rules', href: '/#rules' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="/" className="flex flex-col">
          <span className="font-mono text-xl font-black italic text-white tracking-tighter uppercase">BRAINFLUX</span>
          <span className="text-[9px] text-cyan-400 tracking-[0.3em] uppercase font-bold">Olympiad 2026</span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[11px] font-bold uppercase tracking-widest text-white/50 hover:text-white transition-colors">{link.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <a href="/tickets" className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-[10px] font-black uppercase text-white hover:border-cyan-400/50 transition-all">
              <ShieldCheck size={14} className="text-cyan-400" /> Verify
            </a>
            <a href="/#fees" className="rounded-full bg-cyan-500 px-6 py-2 text-[10px] font-black uppercase text-black hover:bg-cyan-400 transition-colors">Register</a>
          </div>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black border-b border-white/10 p-8 flex flex-col gap-6">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-xl font-black italic uppercase text-white/60">{link.label}</a>
          ))}
          <a href="/tickets" className="bg-white/5 p-4 rounded-xl text-center font-bold text-cyan-400">VERIFY TICKET</a>
        </div>
      )}
    </header>
  )
}