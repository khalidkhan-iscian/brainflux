import { ShieldAlert, BadgeCheck, Calculator, BookMarked, Armchair, PenTool } from 'lucide-react'

const ruleSections = [
  {
    icon: BadgeCheck,
    title: 'Eligibility & Entry',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    rules: [
      'Open strictly to students from Class 4 to Class 10.',
      'All participants must wear their complete school uniform.',
      'Gate opens at 02:30 PM and closes strictly at 03:30 PM. No late entries.',
      'School ID Card (if available) and BRAINFLUX ID Ticket are mandatory.',
      'Participants must bring their own stationery. No sharing allowed.',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Zero-Tolerance Conduct',
    color: 'text-destructive',
    bgColor: 'bg-destructive/10',
    rules: [
      'Mobile phones, smartwatches, and electronics are strictly prohibited.',
      '1st silence violation: Warning. 2nd violation: Point Deduction.',
      'No participant may leave their seat without permission.',
      'Any form of communication results in immediate removal.',
    ],
  },
  {
    icon: PenTool, // New Icon for Essay
    title: 'Essay Topics (Choose One)',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    rules: [
      'Can Artificial Intelligence Ever Be Truly Creative?',
      'Ethical Limits of Brain-Computer Interfaces',
      'Neuroplasticity and the Lifelong Learner',
      'The Paradox of Choice in the Digital Age',
      'Memory vs. Data: The Evolution of Human Knowledge',
      'The Science of Intuition: Logic’s Silent Partner',
      'The Architecture of a "Genius" Mind',
      'Note: No AI/ChatGPT. Submit physically at Registration Desk.',
    ],
  },
  {
    icon: Calculator,
    title: 'Academic Rules',
    color: 'text-chart-3',
    bgColor: 'bg-chart-3/10',
    rules: [
      'Only official BRAINFLUX answer sheets accepted.',
      'Allowed: FX-82MS, 100MS, 570MS, 991MS, 991EX, 991ES, 991CW.',
      'Calculator sharing is strictly forbidden.',
      'Tie-Breaker: 1. Highest Math Score. 2. Sudden Death Question.',
    ],
  },
  {
    icon: Armchair,
    title: 'Seating & Security',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
    rules: [
      'Boys and Girls seated on opposite sides of the auditorium.',
      'Central aisle remains empty for volunteer patrol.',
      'Exactly 1 student per bench (Mixed grade levels).',
      'Bags must be kept in the designated Bag Zone.',
    ],
  },
  {
    icon: BookMarked,
    title: 'Add-on Segment Rules',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
    rules: [
      'Chess: Blitz format (5 min/player), Touch-move rule.',
      "Rubik's Cube: Bring your own cube. Best of 3 attempts.",
      'Anime Quiz: Teams must stay consistent with registration.',
      'Extempore Speech: Random topics. 2 min prep, 3 min speaking.',
    ],
  },
]

export function Rules() {
  return (
    <section id="rules" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-destructive/30 bg-destructive/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-destructive">
            The Radioactive Vault
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            Mandatory Rules &amp; Regulations
          </h2>
          <p className="max-w-xl text-muted-foreground leading-relaxed text-balance">
            BRAINFLUX enforces a Zero-Tolerance Fairness Protocol. All decisions by the judges and ISTARC management are final.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {ruleSections.map(({ icon: Icon, title, color, bgColor, rules }) => (
            <div
              key={title}
              className="rounded-2xl border border-border p-6 flex flex-col gap-4 transition-all hover:border-blue-500/30"
              style={{
                background: 'linear-gradient(135deg, oklch(0.16 0.025 255 / 0.6) 0%, oklch(0.2 0.03 255 / 0.4) 100%)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${bgColor} ${color}`}>
                  <Icon size={18} />
                </div>
                <h3 className={`font-mono text-sm font-bold ${color}`}>{title}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {rules.map((rule, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: 'oklch(0.8 0.02 255)' }}>
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${color.replace('text-', 'bg-')}`} />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}