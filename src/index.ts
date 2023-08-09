import type { Engine, Engines } from 'engines'
import engines from 'engines'

export { engines }

export type { Engine, Engines }

export function getEngine(key: Engines) {
  return engines.find(engine => engine.key === key)!
}

export function hasEngine(key: string) {
  return engines.some(engine => engine.key === key)
}
