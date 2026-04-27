'use client'

export function BrainfluxLogo() {
  return (
    <svg
      viewBox="0 0 1000 400"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-4xl mx-auto"
      style={{ filter: 'drop-shadow(0 0 20px rgba(99, 102, 241, 0.3))' }}
    >
      {/* Define filters and gradients */}
      <defs>
        {/* Liquid glass gradient */}
        <linearGradient id="glassGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: 'rgba(255, 255, 255, 0.9)', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'rgba(200, 210, 255, 0.7)', stopOpacity: 1 }} />
        </linearGradient>

        {/* Inner glow filter */}
        <filter id="innerGlow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Outer neon glow for subtitle */}
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* "Presents" text - top left */}
      <text
        x="50"
        y="45"
        fontSize="28"
        fontWeight="300"
        fontFamily="sans-serif"
        fill="currentColor"
        opacity="0.7"
        letterSpacing="4"
      >
        Presents
      </text>

      {/* Purple border box around logo */}
      <rect
        x="40"
        y="60"
        width="920"
        height="200"
        fill="none"
        stroke="rgba(168, 85, 247, 0.6)"
        strokeWidth="3"
        rx="12"
      />

      {/* BRAINFLUX Wordmark - using geometric SVG paths */}
      <g filter="url(#innerGlow)" style={{ mixBlendMode: 'screen' }}>
        {/* B */}
        <g>
          <rect x="50" y="90" width="35" height="110" fill="url(#glassGradient)" />
          <rect x="85" y="90" width="30" height="48" fill="url(#glassGradient)" />
          <rect x="85" y="148" width="30" height="52" fill="url(#glassGradient)" />
          <rect x="50" y="90" width="65" height="12" fill="url(#glassGradient)" />
          <rect x="50" y="138" width="65" height="12" fill="url(#glassGradient)" />
          <rect x="50" y="188" width="65" height="12" fill="url(#glassGradient)" />
        </g>

        {/* R */}
        <g>
          <rect x="130" y="90" width="35" height="110" fill="url(#glassGradient)" />
          <rect x="165" y="90" width="28" height="50" fill="url(#glassGradient)" />
          <circle cx="179" cy="115" r="25" fill="url(#glassGradient)" />
          <polygon points="165,140 193,140 165,200 130,200" fill="url(#glassGradient)" />
          <rect x="130" y="90" width="63" height="12" fill="url(#glassGradient)" />
        </g>

        {/* A with Chess Knight */}
        <g>
          {/* Main A shape */}
          <polygon
            points="210,200 243,90 276,200"
            fill="url(#glassGradient)"
            stroke="url(#glassGradient)"
            strokeWidth="8"
          />
          <rect x="225" y="150" width="36" height="12" fill="url(#glassGradient)" />
          {/* Chess Knight inside A */}
          <g transform="translate(243, 130) scale(0.8)">
            <path
              d="M 0,-20 Q -10,-15 -8,-5 L -5,5 L -15,8 L -12,18 L 12,18 L 15,8 L 5,5 L 8,-5 Q 10,-15 0,-20"
              fill="rgba(0,0,0,0.3)"
              stroke="rgba(0,0,0,0.4)"
              strokeWidth="1"
            />
          </g>
        </g>

        {/* I with Ruler/Level graphic */}
        <g>
          <rect x="290" y="90" width="35" height="110" fill="url(#glassGradient)" />
          {/* Ruler tick marks */}
          <line x1="297" y1="95" x2="297" y2="100" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          <line x1="307" y1="95" x2="307" y2="100" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          <line x1="317" y1="95" x2="317" y2="100" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          <line x1="297" y1="185" x2="297" y2="190" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          <line x1="307" y1="185" x2="307" y2="190" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
          <line x1="317" y1="185" x2="317" y2="190" stroke="rgba(0,0,0,0.3)" strokeWidth="2" />
        </g>

        {/* N */}
        <g>
          <rect x="340" y="90" width="35" height="110" fill="url(#glassGradient)" />
          <polygon points="375,200 410,90 445,200 410,110 375,200" fill="url(#glassGradient)" />
          <rect x="410" y="90" width="35" height="110" fill="url(#glassGradient)" />
        </g>

        {/* F with cutouts */}
        <g>
          <rect x="460" y="90" width="35" height="110" fill="url(#glassGradient)" />
          <rect x="495" y="90" width="40" height="12" fill="url(#glassGradient)" />
          <rect x="495" y="145" width="35" height="12" fill="url(#glassGradient)" />
        </g>

        {/* L */}
        <g>
          <rect x="555" y="90" width="35" height="110" fill="url(#glassGradient)" />
          <rect x="555" y="188" width="50" height="12" fill="url(#glassGradient)" />
        </g>

        {/* U */}
        <g>
          <rect x="625" y="90" width="35" height="90" fill="url(#glassGradient)" />
          <polygon points="625,180 660,200 695,180 695,90 660,90" fill="url(#glassGradient)" />
        </g>

        {/* X */}
        <g>
          <polygon points="730,90 755,140 780,90 805,90 775,140 805,200 780,200 755,150 730,200 705,200 735,140 705,90" fill="url(#glassGradient)" />
        </g>
      </g>

      {/* "Quiz Olympiad 2026" subtitle with neon glow */}
      <text
        x="500"
        y="330"
        fontSize="32"
        fontWeight="600"
        fontFamily="sans-serif"
        fill="rgba(168, 85, 247, 0.9)"
        textAnchor="middle"
        letterSpacing="3"
        filter="url(#neonGlow)"
        style={{ textShadow: '0 0 12px rgba(168, 85, 247, 0.5)' }}
      >
        Quiz Olympiad 2026
      </text>
    </svg>
  )
}
