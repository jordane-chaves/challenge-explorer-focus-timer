import * as actions from './actions.js'
import * as elements from './elements.js'
import state from './state.js'

export function registerControls() {
  elements.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    const actionFunction = actions[action]

    const isFunction = typeof actionFunction === 'function'

    if (!isFunction) {
      return
    }

    actionFunction()
  })
}

export function registerSounds() {
  elements.sounds.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    const music = event.target.dataset.music
    const actionFunction = actions[action]

    const isFunction = typeof actionFunction === 'function'

    if (!isFunction) {
      return
    }

    state.music = music
    actionFunction()
  })
}
