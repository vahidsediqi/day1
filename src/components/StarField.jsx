import { useEffect, useRef } from 'react'

export default function StarField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const setSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setSize()
    window.addEventListener('resize', setSize)

    const COUNT = 180
    const stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.1 + 0.15,
      alpha: Math.random() * 0.6 + 0.05,
      speed: Math.random() * 0.004 + 0.001,
      dir: Math.random() > 0.5 ? 1 : -1,
      color: Math.random() > 0.85 ? '#c4b5fd' : Math.random() > 0.7 ? '#93c5fd' : '#ffffff',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      stars.forEach(s => {
        s.alpha += s.speed * s.dir
        if (s.alpha >= 0.7) { s.alpha = 0.7; s.dir = -1 }
        if (s.alpha <= 0.02) { s.alpha = 0.02; s.dir = 1 }
        ctx.save()
        ctx.globalAlpha = s.alpha
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = s.color
        ctx.fill()
        ctx.restore()
      })
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', setSize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  )
}
