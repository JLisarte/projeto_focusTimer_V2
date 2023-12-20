import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running")

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
  sounds.buttonPressAudio.play()
}

export function moreTime() {
  state.minutes += 5
  if (state.minutes > 60) {
    state.minutes = 60
  }

  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function lessTime() {
  state.minutes -= 5
  if (state.minutes < 5) {
    state.minutes = 0
  }

  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function toggleMusicTree() {
  document.documentElement.classList.remove("music-on-cloud")
  document.documentElement.classList.remove("music-on-storefront")
  document.documentElement.classList.remove("music-on-campfire")
  state.isMute = document.documentElement.classList.toggle("music-on-tree")

  if (state.isMute) {
    sounds.buttonTree.play()
    sounds.buttonRain.pause()
    sounds.buttonCoffe.pause()
    sounds.buttonFire.pause()
    return
  }
  sounds.buttonTree.pause()
}

export function toggleMusicRain() {
  document.documentElement.classList.remove("music-on-tree")
  document.documentElement.classList.remove("music-on-storefront")
  document.documentElement.classList.remove("music-on-campfire")
  state.isMute = document.documentElement.classList.toggle("music-on-cloud")

  if (state.isMute) {
    sounds.buttonRain.play()
    sounds.buttonTree.pause()
    sounds.buttonCoffe.pause()
    sounds.buttonFire.pause()
    return
  }
  sounds.buttonRain.pause()
}

export function toggleMusicShop() {
  document.documentElement.classList.remove("music-on-tree")
  document.documentElement.classList.remove("music-on-cloud")
  document.documentElement.classList.remove("music-on-campfire")
  state.isMute = document.documentElement.classList.toggle(
    "music-on-storefront"
  )

  if (state.isMute) {
    sounds.buttonCoffe.play()
    sounds.buttonTree.pause()
    sounds.buttonRain.pause()
    sounds.buttonFire.pause()
    return
  }
  sounds.buttonCoffe.pause()
}

export function toggleMusicFire() {
  document.documentElement.classList.remove("music-on-tree")
  document.documentElement.classList.remove("music-on-cloud")
  document.documentElement.classList.remove("music-on-storefront")
  state.isMute = document.documentElement.classList.toggle("music-on-campfire")

  if (state.isMute) {
    sounds.buttonFire.play()
    sounds.buttonTree.pause()
    sounds.buttonRain.pause()
    sounds.buttonCoffe.pause()
    return
  }
  sounds.buttonFire.pause()
}
