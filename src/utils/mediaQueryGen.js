// Media Query Generator

function mediaQueryGen(breakPoints) {
  return breakPoints.map(bp => `@media (min-width: ${bp.width}px)`)
}

export default mediaQueryGen
