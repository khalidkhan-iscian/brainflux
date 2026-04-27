'use client'

import { useRef, useState, useEffect, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface TiltLogoProps {
  children: ReactNode
  maxTilt?: number
  className?: string
}

export function TiltLogo({ children, maxTilt = 10, className = '' }: TiltLogoProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  // Motion values for mouse position (normalized -1 to 1)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for smooth tilt
  const springConfig = { stiffness: 150, damping: 20, mass: 0.5 }
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [maxTilt, -maxTilt]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-maxTilt, maxTilt]), springConfig)

  // Glare position
  const glareX = useSpring(useTransform(mouseX, [-1, 1], [0, 100]), springConfig)
  const glareY = useSpring(useTransform(mouseY, [-1, 1], [0, 100]), springConfig)

  // Transform hooks for glare and shadow (MUST be at top level before conditionals)
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) => 
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
  )

  const shadowTranslateX = useTransform(rotateY, [maxTilt, -maxTilt], [-10, 10])
  const shadowTranslateY = useTransform(rotateX, [-maxTilt, maxTilt], [-10, 10])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate normalized position (-1 to 1) based on viewport
      const normalizedX = (e.clientX - centerX) / (window.innerWidth / 2)
      const normalizedY = (e.clientY - centerY) / (window.innerHeight / 2)

      mouseX.set(Math.max(-1, Math.min(1, normalizedX)))
      mouseY.set(Math.max(-1, Math.min(1, normalizedY)))
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isMounted, mouseX, mouseY])

  if (!isMounted) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={containerRef}
      className={`relative ${className}`}
      style={{
        perspective: 1000,
        transformStyle: 'preserve-3d',
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative"
      >
        {/* Main content */}
        {children}

        {/* Glare overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden"
          style={{
            background: glareBackground,
          }}
        />

        {/* 3D shadow that shifts opposite to tilt */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-2xl"
          style={{
            translateX: shadowTranslateX,
            translateY: shadowTranslateY,
            translateZ: -50,
            filter: 'blur(30px)',
            background: 'rgba(59, 130, 246, 0.3)',
            opacity: 0.5,
          }}
        />
      </motion.div>
    </motion.div>
  )
}
