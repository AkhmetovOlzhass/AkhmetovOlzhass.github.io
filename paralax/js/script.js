parallaxMouse({elements: '.pic', moveFactor: 10, wrap: 'body'});
const UPPER_LIMIT_Y = 20
const UPPER_LIMIT_X = 2
const LOWER_LIMIT_X = -2
const MAX_SIZE = 6
const MIN_SIZE = 2
const AMOUNT = 250
const COLOR = 0xffffff
const { Application, Graphics } = PIXI
const floored = v => Math.floor(Math.random() * v)
const update = p =>
  Math.random() > 0.5
    ? Math.max(LOWER_LIMIT_X, p - 1)
    : Math.min(p + 1, UPPER_LIMIT_X)

const reset = p => {
  p.x = floored(app.renderer.width)
  p.y = -(p.height + floored(app.renderer.height))
  p.vy = floored(UPPER_LIMIT_Y)
}

const genParticles = t =>
  new Array(AMOUNT).fill().map(p => {
    const SIZE = floored(MAX_SIZE) + MIN_SIZE
    p = new PIXI.Sprite(t)
    p.scale.x = p.scale.y = SIZE / 100
    // p.width = p.height = SIZE
    p.vx = floored(UPPER_LIMIT_X) - UPPER_LIMIT_X
    p.vy = floored(UPPER_LIMIT_Y)
    p.alpha = Math.random()
    p.x = floored(app.renderer.width)
    p.y = -(SIZE + floored(app.renderer.height))
    drops.addChild(p)
    return p
  })

const app = new Application({
  antialias: true,
  transparent: true,
})

const drops = new PIXI.particles.ParticleContainer(AMOUNT, {
  scale: true,
  position: true,
  alpha: true,
})
app.stage.addChild(drops)

const p = new Graphics()
p.beginFill(COLOR)
p.drawCircle(0, 0, 100)
p.endFill()
const baseTexture = app.renderer.generateTexture(p)
let particles = genParticles(baseTexture)

// app.stage.filters = [new PIXI.filters.BlurFilter(3)]
app.ticker.add(i => {
  if (
    app.renderer.height !== innerHeight ||
    app.renderer.width !== innerWidth
  ) {
    app.renderer.resize(innerWidth, innerHeight)
    drops.removeChildren()
    particles = genParticles(baseTexture)
  }
  for (let particle of particles) {
    if (particle.y > 0) particle.x += particle.vx
    particle.y += particle.vy

    if (Math.random() > 0.9) particle.vx = update(particle.vx)
    if (Math.random() > 0.9)
      particle.vy = Math.min(particle.vy + 1, UPPER_LIMIT_Y)

    if (
      particle.x > app.renderer.width ||
      particle.x < 0 ||
      particle.y > app.renderer.height
    )
      reset(particle)
  }
})

document.body.appendChild(app.view)