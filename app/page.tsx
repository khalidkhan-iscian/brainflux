import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { AntiCheatingStrategy } from '@/components/anti-cheating-strategy'
import { About } from '@/components/about'
import { EventStructure } from '@/components/event-structure'
import { Schedule } from '@/components/schedule'
import { Rules } from '@/components/rules'
import { Awards } from '@/components/awards'
import { RegistrationTracker } from '@/components/registration-tracker'
import { Fees } from '@/components/fees'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'
import { AccessibilityHub } from '@/components/accessibility-hub'
import { LiquidCursor } from '@/components/liquid-cursor'

export default function Page() {
  return (
    <main>
      <LiquidCursor />
      <AccessibilityHub />
      <Navbar />
      <Hero />
      <AntiCheatingStrategy />
      <About />
      <EventStructure />
      <Schedule />
      <Rules />
      <Awards />
      <RegistrationTracker />
      <Fees />
      <FAQ />
      <Footer />
    </main>
  )
}
