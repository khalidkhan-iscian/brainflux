'use client'

import React, { useState, useEffect } from 'react'
import { participants } from "@/data/participants"
// If the line above causes an error, comment it out and use the local 'const' below
import { QRCodeSVG } from 'qrcode.react'

/* If your "@/data/participants" import fails, 
  uncomment this local constant to keep the page alive:
*/
/*
const participants = [
  { id: "BFX-101", name: "Ibn Khalid Khan", class: "10", sec: "A", version: "EV" }
];
*/

export default function TicketsPage() {
  const [mounted, setMounted] = useState(false)
  const [query, setQuery] = useState('')

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="bg-background min-h-screen" />
  }

  const filtered = participants.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.id.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="bg-background text-foreground min-h-screen p-[100px_20px] font-sans">
      <div className="max-w-[800px] mx-auto text-center">

        <h1 className="text-5xl font-black italic mb-10 tracking-tight">
          REGISTRY <span className="opacity-20">VAULT</span>
        </h1>

        <input
          type="text"
          placeholder="SEARCH NAME OR ID..."
          className="w-full max-w-[400px] px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-foreground text-center mb-12"
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="grid gap-5 grid-cols-1">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="border-2 border-white rounded-3xl p-6 flex justify-between items-center bg-card"
            >
              <div className="text-left">
                <p className="text-cyan-400 text-xs font-bold mb-1">PARTICIPANT</p>
                <h3 className="text-2xl m-0 uppercase">{p.name}</h3>
                <p className="opacity-40 text-xs mt-1">{p.id} • CLASS {p.class}</p>
              </div>
              <div className="bg-white p-1 rounded-lg">
                <QRCodeSVG value={p.id} size={60} />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="opacity-20 mt-10">NO DATA FOUND</p>
        )}
      </div>
    </div>
  )
}