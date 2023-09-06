import * as actions from './actions.js'
import * as elements from './elements.js'
import state from './state.js'

export function countdown() {
  if (!state.isRunning) {
    clearTimeout(state.timeout)
    return
  }

  const oneSecondInMilliseconds = 1000

  state.timeout = setTimeout(() => {
    state.seconds--

    if (state.seconds < 0) {
      state.seconds = 59
      state.minutes--
    }

    if (state.minutes < 0) {
      actions.reset()
      return
    }

    updateDisplay()
    countdown()
  }, oneSecondInMilliseconds)
}

export function updateDisplay() {
  const { minutes, seconds } = state

  elements.minutes.textContent = String(minutes).padStart(2, '0')
  elements.seconds.textContent = String(seconds).padStart(2, '0')
}
