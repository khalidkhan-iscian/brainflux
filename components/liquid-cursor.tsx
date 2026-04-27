'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue, useTransform } from 'framer-motion'

interface CursorState {
  isOverGlass: boolean
  isOverButton: boolean
  isOverText: boolean
}

export function LiquidCursor() {
  const [cursorState, setCursorState] = useState<CursorState>({
    isOverGlass: false,
    isOverButton: false,
    isOverText: false,
  })
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Motion values for cursor position
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring physics for the primary dot (fast follow)
  const primaryX = useSpring(mouseX, { stiffness: 1000, damping: 50, mass: 0.1 })
  const primaryY = useSpring(mouseY, { stiffness: 1000, damping: 50, mass: 0.1 })

  // Spring physics for the liquid trailer (elastic lag)
  const trailerX = useSpring(mouseX, { stiffness: 150, damping: 15, mass: 0.5 })
  const trailerY = useSpring(mouseY, { stiffness: 150, damping: 15, mass: 0.5 })

  // Spring physics for the glow (slowest, largest)
  const glowX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 1 })
  const glowY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 1 })

  // Dynamic size based on state
  const trailerSize = cursorState.isOverButton ? 24 : cursorState.isOverGlass ? 80 : 40

  // Check for touch device
  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0)
    }
    checkTouch()
  }, [])

  // Mouse move handler
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [mouseX, mouseY, isVisible])

  // Element detection
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement
    
    // Check for glass elements
    const isGlass = target.closest('[data-glass]') !== null ||
      target.closest('.backdrop-blur-xl') !== null ||
      target.closest('.backdrop-blur-md') !== null ||
      target.classList.contains('backdrop-blur-xl') ||
      target.classList.contains('backdrop-blur-md')
    
    // Check for buttons
    const isButton = target.closest('button') !== null ||
      target.closest('a') !== null ||
      target.closest('[role="button"]') !== null

    // Check for white text
    const computedStyle = window.getComputedStyle(target)
    const color = computedStyle.color
    const isWhiteText = color === 'rgb(255, 255, 255)' || 
      color.includes('255, 255, 255') ||
      target.classList.contains('text-white')

    setCursorState({
      isOverGlass: isGlass,
      isOverButton: isButton,
      isOverText: isWhiteText,
    })
  }, [])

  // Mouse leave handler
  const handleMouseLeave = useCallback(() => {
    setIsVisible(false)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.body.style.cursor = 'auto'
    }
  }, [isTouchDevice, handleMouseMove, handleMouseOver, handleMouseLeave])

  // Don't render on touch devices
  if (isTouchDevice) return null

  return (
    <>
      {/* Background Glow - 400px radial gradient following cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: glowX,
          y: glowY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <div 
          className="w-[400px] h-[400px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.4) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      </motion.div>

      {/* Liquid Trailer Ring */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          x: trailerX,
          y: trailerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: trailerSize,
          height: trailerSize,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          width: { type: 'spring', stiffness: 300, damping: 20 },
          height: { type: 'spring', stiffness: 300, damping: 20 },
          opacity: { duration: 0.2 },
        }}
      >
        <div 
          className="w-full h-full rounded-full border transition-all duration-200"
          style={{
            borderColor: cursorState.isOverButton 
              ? 'rgb(96, 165, 250)' // blue-400
              : 'rgba(255, 255, 255, 0.3)',
            borderWidth: cursorState.isOverButton ? '2px' : '1px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: cursorState.isOverGlass ? 'blur(20px)' : 'blur(12px)',
            mixBlendMode: cursorState.isOverText ? 'difference' : 'normal',
            boxShadow: cursorState.isOverGlass 
              ? '0 0 30px rgba(59, 130, 246, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)'
              : '0 0 15px rgba(59, 130, 246, 0.15)',
          }}
        />
      </motion.div>

      {/* Primary Dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000]"
        style={{
          x: primaryX,
          y: primaryY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: cursorState.isOverButton ? 0.5 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
          scale: { type: 'spring', stiffness: 500, damping: 25 },
        }}
      >
        <div 
          className="w-2 h-2 rounded-full bg-white"
          style={{
            mixBlendMode: cursorState.isOverText ? 'difference' : 'normal',
            boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          }}
        />
      </motion.div>
    </>
  )
}
