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
  state.isMute = document.documentElement.classList.toggle("mute")

  if(state.isMute) {
    sounds.buttonTree.play()
    return
  }
  sounds.buttonTree.pause()

  console.log(state.isMute);
}