import { FlaskConical, Globe, Trophy, BookOpen } from 'lucide-react'

const activities = [
  {
    icon: FlaskConical,
    title: 'Science & Technology Festivals',
    description:
      'Annual flagship exhibitions serving as a launchpad for student innovation. Most recently, the 13th ISTARC Science and Technology Festival was successfully executed in 2025.',
  },
  {
    icon: BookOpen,
    title: 'Workshops & Seminars',
    description:
      'Specialized sessions on high-growth fields including Bioinformatics, Genetics, and Metaverse Architecture — bridging the gap between curriculum and hands-on application.',
  },
  {
    icon: Trophy,
    title: 'Competitions & Olympiads',
    description:
      'Coordinating participation in elite national and international Science Olympiads with rigorous mentorship to help students achieve top-tier academic recognition.',
  },
  {
    icon: Globe,
    title: 'MILSET ASIA Member',
    description:
      'One of the few Bangladeshi representatives in this international network, ensuring students are integrated into the global scientific community.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            About ISTARC
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            Ideal Science &amp; Technology<br className="hidden sm:block" /> Aiming Research Council
          </h2>
          <p className="max-w-2xl text-muted-foreground leading-relaxed text-balance">
            Established in 2001, ISTARC is the premier co-curricular organization of Ideal School &amp; College.
            Guided by the philosophy{' '}
            <span className="italic text-accent">&ldquo;Science in Creation, not Annihilation&rdquo;</span>
            , we serve as a catalyst for scientific literacy and technological advancement.
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-6 flex flex-col gap-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="font-mono text-sm font-bold text-foreground leading-snug">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>

        {/* About the event */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <span className="rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                About BRAINFLUX 2026
              </span>
              <h2 className="mt-4 font-mono text-2xl font-bold text-foreground md:text-3xl text-balance">
                More than a competition — a platform for young minds
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                BRAINFLUX 2026 is designed to challenge the intellect, creativity, and analytical skills of students
                from Class 4 to Class 10. It is where young minds converge to showcase their mastery in
                Science, Math, ICT, and beyond, organized with a steadfast focus on academic integrity and discipline.
              </p>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                Structured into three distinct categories — <strong className="text-foreground">Primary</strong> (Class 4–5),{' '}
                <strong className="text-foreground">Junior</strong> (Class 6–8), and{' '}
                <strong className="text-foreground">Senior</strong> (Class 9–10) — with both a Main Academic Segment
                and high-energy Add-on Segments.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-0 md:w-64">
              {[
                { label: 'Class Groups', value: '3 (Primary, Junior, Senior)' },
                { label: 'Total Winners', value: '18 Ranked Students' },
                { label: 'Prize Crests', value: '15 Crests' },
                { label: 'Base Entry Fee', value: '100 BDT' },
              ].map(({ label, value }) => (
                <div key={label} className="rounded-xl bg-background border border-border p-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest">{label}</p>
                  <p className="mt-1 font-mono text-base font-bold text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
