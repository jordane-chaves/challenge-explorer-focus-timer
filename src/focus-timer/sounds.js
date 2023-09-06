import state from "./state.js"

const audios = {
  coffeeShop: new Audio('../../assets/Cafeteria.wav'),
  fireplace: new Audio('../../assets/Lareira.wav'),
  forest: new Audio('../../assets/Floresta.wav'),
  rain: new Audio('../../assets/Chuva.wav'),
}

audios.coffeeShop.loop = true
audios.fireplace.loop = true
audios.forest.loop = true
audios.rain.loop = true

export function play() {
  /** @type {HTMLAudioElement} */
  const audio = audios[state.music]

  if (audio) {
    audio.play()
  }
}

export function pause() {
  Object.keys(audios).forEach(key => {
    const audio = audios[key]
    audio.pause()
  })
}
