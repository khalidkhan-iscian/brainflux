const timeline = [
  {
    time: '03:00 PM',
    title: 'Registration & Gate Control',
    items: [
      'Verification of registration tickets & on-spot registrations',
      'Collection of physical Essay Submissions at front desk',
      'Confiscation/Storage of electronic devices in the Bag Zone',
      'Separate seating: Boys and Girls directed to opposite sides',
    ],
    color: 'border-primary/60 bg-primary/5',
    dot: 'bg-primary',
  },
  {
    time: '03:00 – 03:15 PM',
    title: 'Inaugural Session',
    items: [
      'Welcome address by the organizing committee',
      'Final rules briefing — Ironclad rules on silence, calculators, and disqualification triggers',
    ],
    color: 'border-chart-3/60 bg-chart-3/5',
    dot: 'bg-chart-3',
  },
  {
    time: '03:15 – 03:45 PM',
    title: 'Main Quiz — All Groups',
    items: [
      '30-minute written examination',
      'Subjects: Science, Math, ICT, and General Knowledge',
      'Strictly monitored by the Anti-Cheating Team',
    ],
    color: 'border-primary/60 bg-primary/5',
    dot: 'bg-primary',
  },
  {
    time: '03:50 – 04:20 PM',
    title: 'Case Solving Challenge',
    items: [
      '30-minute analytical challenge',
      'Focus: logical deduction and real-world problem solving',
      'Immediate script collection by volunteers at the 30-minute mark',
    ],
    color: 'border-primary/60 bg-primary/5',
    dot: 'bg-primary',
  },
  {
    time: '04:20 – 04:50 PM',
    title: 'Parallel Competition Block',
    items: [
      'Stage (Room 3003): Extempore Speech — Junior then Senior, 2 min prep / 3 min speaking',
      'Zone A: Blitz Chess (5 min/player, Touch-move rule)',
      'Zone B: Rubik\'s Cube Sprints (Best of 3, 15-sec inspection)',
      'Zone C: Anime Quiz (Individual & Group)',
    ],
    color: 'border-accent/60 bg-accent/5',
    dot: 'bg-accent',
  },
  {
    time: '04:50 – 05:00 PM',
    title: 'Speed Quiz — Senior Exclusive',
    items: [
      'Written-based round on the main stage (10 questions)',
      'Negative marking for incorrect answers',
    ],
    color: 'border-accent/60 bg-accent/5',
    dot: 'bg-accent',
  },
  {
    time: '05:00 PM',
    title: 'Prize Giving Ceremony',
    items: [
      'Crests awarded to Top 3 in each group (Main Segment)',
      'Special Category Prizes: Chess Board, Speed Cube, Anime Book, and more',
      'Participation Certificates distributed to all attendees',
      'Official vote of thanks & synchronized exit',
    ],
    color: 'border-chart-4/60 bg-chart-4/5',
    dot: 'bg-chart-4',
  },
]

export function Schedule() {
  return (
    <section id="schedule" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Detailed Schedule
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            Event Timeline
          </h2>
          <p className="max-w-xl text-muted-foreground leading-relaxed">
            Gate opens at 2:30 PM. Gate closes strictly at 3:30 PM.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0">
          {/* vertical line */}
          <div className="absolute left-[120px] top-3 bottom-3 w-px bg-border hidden sm:block" />

          {timeline.map((item, i) => (
            <div key={i} className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
              {/* Time */}
              <div className="sm:w-[120px] sm:text-right shrink-0 pt-1">
                <span className="font-mono text-xs font-bold text-muted-foreground whitespace-nowrap">{item.time}</span>
              </div>

              {/* Dot */}
              <div className="hidden sm:flex flex-col items-center shrink-0 relative z-10">
                <div className={`w-3 h-3 rounded-full mt-1.5 ring-2 ring-background ${item.dot}`} />
              </div>

              {/* Content */}
              <div className={`flex-1 rounded-2xl border ${item.color} p-5`}>
                <h3 className="font-mono text-sm font-bold text-foreground mb-3">{item.title}</h3>
                <ul className="flex flex-col gap-1.5">
                  {item.items.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
