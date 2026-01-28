import { useEffect, useRef } from 'react'

type Snowflake = {
  x: number
  y: number
  radius: number
  speedY: number
  driftX: number
}

const FLAKE_COUNT = 120

export function SnowCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = canvas.clientWidth
    let height = canvas.clientHeight

    const resize = () => {
      const { innerWidth, innerHeight } = window
      width = innerWidth
      height = innerHeight
      canvas.width = innerWidth * window.devicePixelRatio
      canvas.height = innerHeight * window.devicePixelRatio
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0)
    }

    resize()

    const flakes: Snowflake[] = Array.from({ length: FLAKE_COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 1 + Math.random() * 2,
      // Slower, more gentle fall speed
      speedY: 0.12 + Math.random() * 0.25,
      driftX: (Math.random() - 0.5) * 0.25,
    }))

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = 'rgba(255,255,255,0.85)'
      for (const flake of flakes) {
        flake.y += flake.speedY
        flake.x += flake.driftX

        if (flake.y > height + 5) {
          flake.y = -5
          flake.x = Math.random() * width
        }
        if (flake.x < -5) flake.x = width + 5
        if (flake.x > width + 5) flake.x = -5

        ctx.beginPath()
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      animationFrameId = window.requestAnimationFrame(render)
    }

    animationFrameId = window.requestAnimationFrame(render)

    window.addEventListener('resize', resize)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  )
}

