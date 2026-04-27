import { PenLine, BrainCircuit, Swords, FileText, Mic2, Zap } from 'lucide-react'

const groups = [
  { name: 'Primary', classes: 'Class 4–5', color: 'text-chart-3', bg: 'bg-chart-3/10', border: 'border-chart-3/30' },
  { name: 'Junior', classes: 'Class 6–8', color: 'text-primary', bg: 'bg-primary/10', border: 'border-primary/30' },
  { name: 'Senior', classes: 'Class 9–10', color: 'text-accent', bg: 'bg-accent/10', border: 'border-accent/30' },
]

const mainSegments = [
  {
    icon: PenLine,
    name: 'Main Quiz',
    duration: '30 min',
    desc: 'Written examination covering Science, Math, GK, and ICT (ICT for Junior & Senior).',
    groups: ['Primary', 'Junior', 'Senior'],
  },
  {
    icon: BrainCircuit,
    name: 'Case Solving',
    duration: '30 min',
    desc: 'Analytical challenge based on real-world problem-solving and logical deduction.',
    groups: ['Primary', 'Junior', 'Senior'],
  },
  {
    icon: FileText,
    name: 'Essay Submission',
    duration: 'Pre-submitted',
    desc: 'Original, non-AI-generated academic writing submitted physically at registration.',
    groups: ['Primary', 'Junior', 'Senior'],
  },
  {
    icon: Mic2,
    name: 'Extempore Speech',
    duration: '2 min prep / 3 min',
    desc: 'Stage-based segment testing spontaneous logic and public speaking skills.',
    groups: ['Junior', 'Senior'],
  },
  {
    icon: Zap,
    name: 'Speed Quiz',
    duration: '10 questions',
    desc: 'High-pressure written-based round with negative marking. Senior exclusive.',
    groups: ['Senior'],
  },
]

const addons = [
  {
    name: 'Blitz Chess',
    format: 'Duo (5 min/player)',
    desc: 'Time-based matches with Touch-move rule. Bring your own opponent.',
    groups: ['Junior', 'Senior'],
  },
  {
    name: "Rubik's Cube Sprint",
    format: 'Individual (Best of 3)',
    desc: 'Speed-cubing challenge. 15-second inspection allowed. Bring your own cube.',
    groups: ['Primary', 'Junior', 'Senior'],
  },
  {
    name: 'Anime Quiz',
    format: 'Individual or Group',
    desc: 'Niche knowledge competition. No internet or phone usage allowed.',
    groups: ['Junior', 'Senior'],
  },
]

function GroupBadge({ group }: { group: string }) {
  const g = groups.find((g) => g.name === group)!
  return (
    <span className={`inline-block rounded-full border ${g.border} ${g.bg} ${g.color} px-2 py-0.5 text-xs font-semibold`}>
      {group}
    </span>
  )
}

export function EventStructure() {
  return (
    <section id="structure" className="py-24 px-4 bg-card/30">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Competition Structure
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            What You&apos;ll Compete In
          </h2>
          <p className="max-w-xl text-muted-foreground leading-relaxed text-balance">
            BRAINFLUX is structured across three academic groups — every student competes in their own tier.
          </p>
        </div>

        {/* Group labels */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          {groups.map((g) => (
            <div key={g.name} className={`rounded-xl border ${g.border} ${g.bg} px-4 py-4 text-center`}>
              <p className={`font-mono text-lg font-black ${g.color}`}>{g.name}</p>
              <p className="text-xs text-muted-foreground mt-1">{g.classes}</p>
            </div>
          ))}
        </div>

        {/* Main academic segment */}
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-accent mb-5">
          Main Academic Segment
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-14">
          {mainSegments.map(({ icon: Icon, name, duration, desc, groups: g }) => (
            <div
              key={name}
              className="rounded-2xl border border-border p-6 flex flex-col gap-3 hover:border-primary/40 transition-all hover:scale-105 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, oklch(0.16 0.025 255 / 0.6) 0%, oklch(0.2 0.03 255 / 0.4) 100%)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} />
                </div>
                <span className="text-xs text-muted-foreground font-mono bg-muted rounded-md px-2 py-1">{duration}</span>
              </div>
              <h4 className="font-mono text-base font-bold text-foreground">{name}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {g.map((grp) => (
                  <GroupBadge key={grp} group={grp} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Add-on segments */}
        <h3 className="font-mono text-sm font-bold uppercase tracking-widest text-accent mb-5">
          Add-on Strategic Segments
        </h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {addons.map(({ name, format, desc, groups: g }) => (
            <div
              key={name}
              className="rounded-2xl border border-accent/20 p-6 flex flex-col gap-3 hover:border-accent/40 transition-all hover:scale-105 cursor-pointer group"
              style={{
                background: 'linear-gradient(135deg, oklch(0.78 0.18 85 / 0.08) 0%, oklch(0.78 0.18 85 / 0.04) 100%)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-base font-bold text-foreground">{name}</h4>
              </div>
              <span className="text-xs font-semibold text-accent bg-accent/10 rounded-md px-2 py-1 self-start group-hover:bg-accent/20 transition-colors">
                {format}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {g.map((grp) => (
                  <GroupBadge key={grp} group={grp} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
