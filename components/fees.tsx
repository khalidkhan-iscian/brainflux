'use client'

import { CheckCircle2 } from 'lucide-react'

const addOns = [
  { segment: "Rubik's Cube", format: 'Individual', fee: '+ 50 BDT' },
  { segment: 'Chess', format: 'Duo (2 persons)', fee: '+ 100 BDT' },
  { segment: 'Anime Quiz', format: 'Individual', fee: '+ 50 BDT' },
  { segment: 'Anime Quiz', format: 'Group (4 persons)', fee: '+ 150 BDT' },
]

const baseIncludes = [
  'Main Quiz (Science, Math, ICT, GK)',
  'Case Solving & Essay Submission',
  'Eligibility for Extempore Speech & Speed Quiz',
  'BRAINFLUX ID Ticket & Keychain',
  'Participation Certificate',
]

export function Fees() {
  return (
    <section id="fees" className="py-24 px-4 bg-card/30">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Registration
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            Fee Structure
          </h2>
          <p className="max-w-lg text-muted-foreground leading-relaxed text-balance">
            A base entry fee covers the full Main Segment. Optional add-on fees unlock specialized competition arenas.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* Base fee card */}
          <div className="rounded-2xl border border-primary/50 bg-card p-8 flex flex-col gap-6 relative overflow-hidden">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-2">Universal Registration</p>
              <p className="font-mono text-5xl font-black text-foreground">100 <span className="text-2xl text-muted-foreground">BDT</span></p>
              <p className="text-sm text-muted-foreground mt-1">Mandatory for all participants</p>
            </div>

            <ul className="flex flex-col gap-2.5">
              {baseIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => alert('Registration is available at the ISTARC Campus Stall located at the Ideal School & College gate after school hours (2:30 PM onwards). Bring your ID card and registration fee.')}
              className="mt-2 block w-full rounded-xl bg-primary py-3 text-center text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
            >
              Register at the Campus Stall
            </button>
            <p className="text-xs text-center text-muted-foreground -mt-2">
              Visit the Registration Stall at the campus gate after school hours
            </p>
          </div>

          {/* Add-on fees */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-4">
                Optional Add-on Segments
              </p>
              <div className="flex flex-col gap-3">
                {addOns.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-background border border-border px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-foreground">{item.segment}</p>
                      <p className="text-xs text-muted-foreground">{item.format}</p>
                    </div>
                    <span className="font-mono text-sm font-bold text-accent">{item.fee}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Important notes */}
            <div className="rounded-2xl border border-border bg-card p-6 flex flex-col gap-3">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground">Important Notes</p>
              {[
                'No refunds after registration. Absent participants receive no compensation.',
                'No littering allowed within the EV Building Auditorium.',
                'Decisions by designated judges and ISTARC management are final.',
              ].map((note, i) => (
                <p key={i} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-muted-foreground shrink-0" />
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
