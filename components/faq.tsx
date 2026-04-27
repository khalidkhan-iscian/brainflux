'use client'

import { useState } from 'react'
import {
  HelpCircle,
  ShieldCheck,
  Clock,
  Backpack,
  Gift,
  Zap,
  Users,
  DollarSign,
  Award,
  Accessibility,
} from 'lucide-react'
import { ChevronDown } from 'lucide-react'

interface FAQItem {
  id: number
  question: string
  answer: string
  icon: React.ReactNode
  category: string
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is the '1-1-1 Seating Strategy'?",
    answer:
      'The 1-1-1 Strategy ensures fairness by seating one student from each category (Primary, Junior, Senior) on the same bench. Since each group has different question sets and syllabus, this arrangement significantly minimizes the possibility of academic dishonesty. This cross-category composition guarantees that students cannot copy from their bench mates, maintaining the highest standards of competition integrity.',
    icon: <Users className="w-5 h-5" />,
    category: 'Strategy',
  },
  {
    id: 2,
    question: 'Is the school uniform mandatory?',
    answer:
      'Yes, school uniform is mandatory for all participants. This requirement emphasizes institutional identity and maintains a disciplined, professional atmosphere throughout the event. It also helps volunteers and organizers easily identify registered participants. Participants arriving without proper school uniform will not be permitted to sit for the Main Quiz.',
    icon: <ShieldCheck className="w-5 h-5" />,
    category: 'Eligibility',
  },
  {
    id: 3,
    question: 'Can I bring my bag into the Auditorium?',
    answer:
      'No, bags are strictly prohibited inside the auditorium. All bags must be kept in the designated "Mandatory Bag Zone" during the competition. Participants can only carry pens, pencils, erasers, and their registration ticket. Any unauthorized materials found will result in immediate disciplinary action and potential disqualification.',
    icon: <Backpack className="w-5 h-5" />,
    category: 'Logistics',
  },
  {
    id: 4,
    question: 'What happens if I arrive after 03:30 PM?',
    answer:
      'The gate will strictly close at 03:30 PM. Late arrivals will not be permitted to sit for the Main Quiz and subsequent segments. We strongly recommend arriving by 02:30 PM to complete registration and orientation. Participants who miss the gate closure will forfeit their participation, with no refunds issued.',
    icon: <Clock className="w-5 h-5" />,
    category: 'Logistics',
  },
  {
    id: 5,
    question: 'How do I know if my registration is confirmed?',
    answer:
      'You can check your registration status in real-time using the "Live Capacity Tracker" on this website. Your BRAINFLUX ID Ticket, provided upon registration, serves as your confirmation. If you registered at the campus stall, your name is listed in our database. On the day of the event, present your ticket and School ID for verification at the registration desk.',
    icon: <HelpCircle className="w-5 h-5" />,
    category: 'Registration',
  },
  {
    id: 6,
    question: 'Are calculators or digital devices allowed?',
    answer:
      'Mobile phones, smartwatches, and all other electronic devices are strictly prohibited. A Zero-Tolerance policy is enforced: any student caught with a device faces instant disqualification. Non-programmable calculators are allowed for Math questions. Only the following models are permitted: FX-82MS, FX-100MS, FX-570MS, FX-991MS, FX-991EX, FX-991ES, FX-991ES Plus, and FX-991CW. Sharing calculators is strictly forbidden.',
    icon: <Zap className="w-5 h-5" />,
    category: 'Rules',
  },
  {
    id: 7,
    question: 'What categories are included in the Olympiad?',
    answer:
      'BRAINFLUX features three participant categories: Primary (Class 4-5), Junior (Class 6-8), and Senior (Class 9-10). The Main Academic Segment includes Quiz, Case Solving, Essay Submission, and Extempore Speech. Add-on Segments feature Blitz Chess (5 mins/player), Rubik&apos;s Cube Sprint (Best of 3), and Anime Quiz. Senior participants also compete in the exclusive Speed Quiz round.',
    icon: <Award className="w-5 h-5" />,
    category: 'Event Structure',
  },
  {
    id: 8,
    question: 'Is there a registration fee?',
    answer:
      'Yes, there is a registration fee. The Universal Base Registration fee is 100 BDT, which grants entry to the Main Quiz, Case Solving, Essay, Extempore Speech, and Speed Quiz (for Seniors). Add-on Segments have optional fees: Rubik&apos;s Cube (50 BDT), Chess Duo (100 BDT per pair), Individual Anime Quiz (50 BDT), and Group Anime Quiz (150 BDT per group of 4).',
    icon: <DollarSign className="w-5 h-5" />,
    category: 'Fees',
  },
  {
    id: 9,
    question: 'Will participants receive certificates?',
    answer:
      'Absolutely. All registered participants receive a Participation Certificate, Keychain, and Fact-Leaflet. Top performers receive additional recognition: 1st, 2nd, and 3rd place winners in each category earn Crests (Trophies) along with their certificates. Winners of add-on segments also receive specialized gifts (Chess Board, Speed Cube, Anime Book, etc.). Prize winners must be present at the closing ceremony to claim their awards.',
    icon: <Gift className="w-5 h-5" />,
    category: 'Prizes',
  },
  {
    id: 10,
    question: 'How can I access the Accessibility Hub?',
    answer:
      'The Accessibility Hub is available as a floating button on the bottom-left corner of the website. Click it to access features including: adjustable text size (for dyslexia support), high contrast mode (for visual accessibility), dyslexia font toggle (OpenDyslexic), and reduce motion option (for users sensitive to animations). All settings are saved to your device and persist across sessions.',
    icon: <Accessibility className="w-5 h-5" />,
    category: 'Accessibility',
  },
]

interface ExpandedState {
  [key: number]: boolean
}

export function FAQ() {
  const [expanded, setExpanded] = useState<ExpandedState>({})

  const toggleFAQ = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  const categories = [...new Set(faqs.map((faq) => faq.category))]

  return (
    <section id="faq" className="py-24 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center gap-3">
          <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Information Desk
          </span>
          <h2 className="font-mono text-3xl font-bold text-foreground text-balance md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl text-muted-foreground leading-relaxed text-balance">
            Everything you need to know about BRAINFLUX 2026. Select a question to expand and explore our comprehensive guidance.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <div
              key={cat}
              className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary/80"
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-2xl border border-border overflow-hidden transition-all"
              style={{
                background: expanded[faq.id]
                  ? 'linear-gradient(135deg, oklch(0.2 0.035 255 / 0.8) 0%, oklch(0.18 0.03 255 / 0.6) 100%)'
                  : 'linear-gradient(135deg, oklch(0.16 0.025 255 / 0.5) 0%, oklch(0.15 0.02 255 / 0.3) 100%)',
                backdropFilter: expanded[faq.id] ? 'blur(16px)' : 'blur(12px)',
                boxShadow: expanded[faq.id]
                  ? '0 0 20px oklch(0.65 0.22 210 / 0.1), inset 0 1px 0 oklch(1 0 0 / 0.1)'
                  : 'inset 0 1px 0 oklch(1 0 0 / 0.05)',
              }}
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-6 py-4 flex items-start justify-between gap-4 hover:bg-primary/5 transition-colors text-left"
              >
                <div className="flex items-start gap-3 flex-1">
                  <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {faq.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-sm font-bold text-foreground leading-tight">
                      {faq.question}
                    </h3>
                    <span className="mt-1 inline-block text-xs font-semibold text-primary/60 bg-primary/5 rounded px-2 py-0.5">
                      {faq.category}
                    </span>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-primary transition-transform duration-300 mt-0.5 ${expanded[faq.id] ? 'rotate-180' : ''
                    }`}
                />
              </button>

              {/* Answer Content */}
              {expanded[faq.id] && (
                <div
                  className="border-t border-white/10 px-6 py-4 text-sm leading-relaxed"
                  style={{
                    color: 'oklch(0.85 0.02 255)',
                  }}
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 rounded-2xl border border-primary/20 p-6 text-center" style={{
          background: 'linear-gradient(135deg, oklch(0.78 0.18 85 / 0.08) 0%, oklch(0.78 0.18 85 / 0.04) 100%)',
          backdropFilter: 'blur(12px)',
        }}>
          <p className="text-sm text-muted-foreground mb-3">
            Can&apos;t find your answer?
          </p>
          <p className="font-mono text-accent font-bold">
            Contact the ISTARC organizing committee for additional support
          </p>
        </div>
      </div>
    </section>
  )
}
