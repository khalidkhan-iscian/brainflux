import { Trophy, Medal, Award } from 'lucide-react'

const mainWinners = [
  { rank: '1st Place', icon: Trophy, award: 'Crest + Certificate', color: 'text-accent', border: 'border-accent/30', bg: 'bg-accent/10', qty: '× 3 (one per group)' },
  { rank: '2nd Place', icon: Medal, award: 'Crest + Certificate', color: 'text-muted-foreground', border: 'border-border', bg: 'bg-muted/30', qty: '× 3 (one per group)' },
  { rank: '3rd Place', icon: Award, award: 'Crest + Certificate', color: 'text-chart-4', border: 'border-chart-4/30', bg: 'bg-chart-4/10', qty: '× 3 (one per group)' },
]

const addOnWinners = [
  {
    segment: 'Chess',
    first: 'Crest + Chess Board',
    second: 'Notebook',
    third: 'Executive Pen',
  },
  {
    segment: "Rubik's Cube",
    first: 'Crest + Speed Cube',
    second: 'Pen Holder',
    third: 'Executive Pen',
  },
  {
    segment: 'Anime Quiz',
    first: 'Crest + Anime Book',
    second: 'Drawing Pad',
    third: 'Executive Pen',
  },
]

export function Awards() {
  return (
    <section id="awards" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
            Recognition & Rewards
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            Awards Structure
          </h2>
          <p className="max-w-xl text-muted-foreground leading-relaxed text-balance">
            18 ranked students earn crests and prizes. Every participant receives a certificate, keychain, and fact-leaflet.
          </p>
        </div>

        {/* Main Category */}
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-primary mb-5 text-center">
          Main Academic Segment
        </h3>
        <div className="grid gap-4 sm:grid-cols-3 mb-16">
          {mainWinners.map(({ rank, icon: Icon, award, color, border, bg, qty }) => (
            <div
              key={rank}
              className={`rounded-2xl border ${border} ${bg} p-6 flex flex-col items-center gap-3 text-center`}
            >
              <Icon size={28} className={color} />
              <p className={`font-mono text-lg font-black ${color}`}>{rank}</p>
              <p className="text-sm font-semibold text-foreground">{award}</p>
              <p className="text-xs text-muted-foreground">{qty}</p>
            </div>
          ))}
        </div>

        {/* Groups note */}
        <p className="text-center text-sm text-muted-foreground mb-12 -mt-8">
          3 groups (Primary, Junior, Senior) × 3 winners = <strong className="text-foreground">9 Main Segment Winners</strong>
        </p>

        {/* Add-on Category */}
        <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">
          Add-on Strategic Segments
        </h3>
        <div className="rounded-2xl border border-border bg-card overflow-hidden mb-16">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">Segment</th>
                <th className="text-left px-6 py-4 font-mono text-xs uppercase tracking-wider text-accent">1st Place</th>
                <th className="text-left px-4 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">2nd Place</th>
                <th className="text-left px-4 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">3rd Place</th>
              </tr>
            </thead>
            <tbody>
              {addOnWinners.map((row, i) => (
                <tr key={row.segment} className={i < addOnWinners.length - 1 ? 'border-b border-border' : ''}>
                  <td className="px-6 py-4 font-mono font-bold text-foreground">{row.segment}</td>
                  <td className="px-6 py-4 text-accent font-semibold">{row.first}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.second}</td>
                  <td className="px-4 py-4 text-muted-foreground">{row.third}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Participation */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
          <p className="font-mono text-sm font-bold uppercase tracking-widest text-primary mb-2">Every Participant</p>
          <p className="text-2xl font-black text-foreground">Participation Certificate + Keychain + Fact-Leaflet</p>
          <p className="mt-2 text-sm text-muted-foreground">No matter the result — every student who registers receives recognition.</p>
        </div>

        {/* Prize claim note */}
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Winners must be physically present at 05:00 PM for the Prize Giving Ceremony. Absence = forfeiture of Crest/Gift (Certificate only).
        </p>
      </div>
    </section>
  )
}
