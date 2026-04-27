'use client'

import { useEffect, useState } from 'react'
import { Accessibility, X, Type, Contrast, Book, Zap } from 'lucide-react'

export function AccessibilityHub() {
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState({
    textSize: 'normal', // 'normal' | 'large'
    contrastMode: false,
    dyslexiaFont: false,
    reduceMotion: false,
  })

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('a11y-settings')
    if (saved) {
      const parsed = JSON.parse(saved)
      setSettings(parsed)
      applySettings(parsed)
    }
  }, [])

  // Apply settings to document
  const applySettings = (newSettings: typeof settings) => {
    const root = document.documentElement

    // Text size
    if (newSettings.textSize === 'large') {
      root.style.fontSize = '18px'
    } else {
      root.style.fontSize = '16px'
    }

    // Contrast mode
    if (newSettings.contrastMode) {
      root.classList.add('contrast-mode')
    } else {
      root.classList.remove('contrast-mode')
    }

    // Dyslexia font
    if (newSettings.dyslexiaFont) {
      root.style.fontFamily = "'OpenDyslexic', var(--font-sans), sans-serif"
    } else {
      root.style.fontFamily = 'var(--font-sans), sans-serif'
    }

    // Reduce motion
    if (newSettings.reduceMotion) {
      root.style.setProperty('--tw-animate', 'none')
      root.classList.add('reduce-motion')
    } else {
      root.classList.remove('reduce-motion')
    }
  }

  const toggle = (key: keyof typeof settings) => {
    const newSettings = {
      ...settings,
      [key]: !settings[key],
    }
    setSettings(newSettings)
    applySettings(newSettings)
    localStorage.setItem('a11y-settings', JSON.stringify(newSettings))
  }

  const toggleTextSize = () => {
    const newSettings = {
      ...settings,
      textSize: settings.textSize === 'normal' ? 'large' : 'normal',
    }
    setSettings(newSettings)
    applySettings(newSettings)
    localStorage.setItem('a11y-settings', JSON.stringify(newSettings))
  }

  return (
    <>
      {/* FAB Button - Bottom Left */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Accessibility menu"
        className="fixed bottom-6 left-6 z-[100] flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary backdrop-blur-md hover:bg-primary/20 transition-colors"
        style={{
          boxShadow: '0 4px 16px oklch(0.62 0.22 255 / 0.2)',
        }}
      >
        <Accessibility size={24} />
      </button>

      {/* Expanded Menu */}
      {isOpen && (
        <div
          className="fixed bottom-24 left-6 z-[100] w-64 rounded-2xl border border-border/60 bg-card p-6 space-y-4"
          style={{
            background: 'linear-gradient(135deg, oklch(0.16 0.025 255 / 0.8) 0%, oklch(0.2 0.03 255 / 0.6) 100%)',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 16px 48px oklch(0 0 0 / 0.3)',
          }}
        >
          {/* Close button */}
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-mono text-sm font-bold text-foreground">Accessibility</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-card/50 rounded transition-colors"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>

          {/* Text Size Toggle */}
          <div className="flex items-center justify-between p-3 rounded-lg bg-card/50 hover:bg-card/70 transition-colors cursor-pointer" onClick={toggleTextSize}>
            <div className="flex items-center gap-2">
              <Type size={18} className="text-primary" />
              <span className="text-xs font-semibold text-foreground">Text Size</span>
            </div>
            <span className="text-xs font-mono text-muted-foreground bg-muted rounded px-2 py-1">
              {settings.textSize === 'normal' ? 'A' : 'A+'}
            </span>
          </div>

          {/* Contrast Mode */}
          <button
            onClick={() => toggle('contrastMode')}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              settings.contrastMode
                ? 'bg-primary/20 border border-primary/40'
                : 'bg-card/50 hover:bg-card/70'
            }`}
          >
            <div className="flex items-center gap-2">
              <Contrast size={18} className={settings.contrastMode ? 'text-primary' : 'text-primary'} />
              <span className="text-xs font-semibold text-foreground">High Contrast</span>
            </div>
            <span className={`text-xs font-mono ${settings.contrastMode ? 'text-primary' : 'text-muted-foreground'}`}>
              {settings.contrastMode ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Dyslexia Font */}
          <button
            onClick={() => toggle('dyslexiaFont')}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              settings.dyslexiaFont
                ? 'bg-primary/20 border border-primary/40'
                : 'bg-card/50 hover:bg-card/70'
            }`}
          >
            <div className="flex items-center gap-2">
              <Book size={18} className={settings.dyslexiaFont ? 'text-primary' : 'text-primary'} />
              <span className="text-xs font-semibold text-foreground">Dyslexia Font</span>
            </div>
            <span className={`text-xs font-mono ${settings.dyslexiaFont ? 'text-primary' : 'text-muted-foreground'}`}>
              {settings.dyslexiaFont ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Reduce Motion */}
          <button
            onClick={() => toggle('reduceMotion')}
            className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
              settings.reduceMotion
                ? 'bg-primary/20 border border-primary/40'
                : 'bg-card/50 hover:bg-card/70'
            }`}
          >
            <div className="flex items-center gap-2">
              <Zap size={18} className={settings.reduceMotion ? 'text-primary' : 'text-primary'} />
              <span className="text-xs font-semibold text-foreground">Reduce Motion</span>
            </div>
            <span className={`text-xs font-mono ${settings.reduceMotion ? 'text-primary' : 'text-muted-foreground'}`}>
              {settings.reduceMotion ? 'ON' : 'OFF'}
            </span>
          </button>

          {/* Help text */}
          <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/20">
            Settings saved to your device. Customize the experience to suit your needs.
          </p>
        </div>
      )}

      {/* Global CSS for contrast mode */}
      <style>{`
        html.contrast-mode {
          --background: oklch(0.06 0.015 255);
          --foreground: oklch(1 0 0);
          --primary: oklch(0.7 0.3 255);
          --accent: oklch(0.85 0.25 85);
          --muted-foreground: oklch(0.8 0.02 255);
        }

        html.reduce-motion {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  )
}
