import { useEffect, useState } from 'react'

export function useCountUp(target: number, duration: number = 2000, delay: number = 0) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const startTime = Date.now() + delay
    const endTime = startTime + duration

    const timer = setInterval(() => {
      const now = Date.now()
      
      if (now < startTime) return
      
      if (now >= endTime) {
        setCount(target)
        clearInterval(timer)
        return
      }

      const progress = (now - startTime) / duration
      const easeOutQuad = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutQuad * target))
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration, delay])

  return count
}
