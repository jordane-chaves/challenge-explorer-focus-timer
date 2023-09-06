import * as sounds from './sounds.js'
import * as timer from './timer.js'
import state from './state.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
}

export function reset() {
  state.isRunning = false
  state.minutes = state.initialMinutes
  state.seconds = state.initialSeconds

  document.documentElement.classList.remove('running')

  timer.updateDisplay()
  clearTimeout(state.timeout)
}

export function timerUp() {
  state.initialMinutes += 5

  if (state.initialMinutes > 60) {
    state.initialMinutes = 60
  }

  state.minutes = state.initialMinutes

  if (!state.isRunning) {
    state.initialSeconds = 0
    state.seconds = 0
  } else {
    state.initialSeconds = 0
  }

  timer.updateDisplay()
}

export function timerDown() {
  state.initialMinutes -= 5

  if (state.initialMinutes < 0) {
    state.initialMinutes = 0
  }

  state.minutes = state.initialMinutes

  if (!state.isRunning) {
    state.initialSeconds = 0
    state.seconds = 0
  } else {
    state.initialSeconds = 0
  }

  timer.updateDisplay()
}

/**
 * @param {string} music
 */
export function toggleMusic() {
  const { music } = state

  removeAllMusicClasses()

  state.musicOn = document.documentElement.classList.toggle(`music-${music}`)

  sounds.pause()

  if (state.musicOn) {
    sounds.play()
    return
  }
}

function removeAllMusicClasses() {
  const { music } = state

  document.documentElement.classList.forEach(className => {
    const hasMusicClass = className.startsWith('music-')
    const isSameClass = className === `music-${music}`

    if (hasMusicClass && !isSameClass) {
      document.documentElement.classList.remove(className)
    }
  })
}
