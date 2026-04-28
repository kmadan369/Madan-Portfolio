// Particle animation configuration
// This can be used for adding canvas-based particle effects if needed

export interface ParticleConfig {
  particleCount: number
  particleSize: number
  particleColor: string
  lineColor: string
  lineDistance: number
  speed: number
}

export const defaultParticleConfig: ParticleConfig = {
  particleCount: 50,
  particleSize: 2,
  particleColor: 'rgba(255, 255, 255, 0.3)',
  lineColor: 'rgba(255, 255, 255, 0.1)',
  lineDistance: 150,
  speed: 0.5
}

export function initParticles(canvas: HTMLCanvasElement, config: ParticleConfig = defaultParticleConfig) {
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Set canvas size
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  // Particle class and animation logic can be implemented here
  // For now, this is a placeholder structure

  console.log('Particle system initialized with config:', config)
}
