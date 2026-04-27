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

  // This is the absolute safety gate for Next.js hydration
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div style={{ background: 'black', minHeight: '100vh' }} />
  }

  const filtered = participants.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.id.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '100px 20px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>

        <h1 style={{ fontSize: '3rem', fontWeight: '900', fontStyle: 'italic', marginBottom: '40px', letterSpacing: '-2px' }}>
          REGISTRY <span style={{ opacity: 0.2 }}>VAULT</span>
        </h1>

        <input
          type="text"
          placeholder="SEARCH NAME OR ID..."
          style={{
            width: '100%',
            maxWidth: '400px',
            padding: '15px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
            color: 'white',
            textAlign: 'center',
            marginBottom: '50px'
          }}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: '1fr' }}>
          {filtered.map((p) => (
            <div
              key={p.id}
              style={{
                border: '2px solid white',
                borderRadius: '24px',
                padding: '25px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: '#0a0a0a'
              }}
            >
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: '#00e5ff', fontSize: '10px', fontWeight: 'bold', margin: '0 0 5px 0' }}>PARTICIPANT</p>
                <h3 style={{ fontSize: '1.5rem', margin: '0', textTransform: 'uppercase' }}>{p.name}</h3>
                <p style={{ opacity: 0.4, fontSize: '12px', margin: '5px 0 0 0' }}>{p.id} • CLASS {p.class}</p>
              </div>
              <div style={{ background: 'white', padding: '5px', borderRadius: '8px' }}>
                <QRCodeSVG value={p.id} size={60} />
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p style={{ opacity: 0.2, marginTop: '40px' }}>NO DATA FOUND</p>
        )}
      </div>
    </div>
  )
}