import * as events from './events.js'
import * as timer from './timer.js'
import state from './state.js'

export function start(minutes, seconds) {
  state.initialMinutes = minutes ?? state.initialMinutes
  state.initialSeconds = seconds ?? state.initialSeconds

  state.minutes = state.initialMinutes
  state.seconds = state.initialSeconds

  timer.updateDisplay()

  events.registerControls()
  events.registerSounds()
}
