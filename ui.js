var ui = {}

module.exports = ui

ui.show = show
ui.hide = hide

ui.containers = {
  share: document.querySelector('.share-container'),
  join: document.querySelector('.join-container'),
  content: document.querySelector('.content-container'),
  choose: document.querySelector('.choose-container'),
  multimedia: document.querySelector('.multimedia-container'),
  sharing: document.querySelector('.sharing-container')
}

ui.buttons = {
  quit: document.querySelector('.quit-button'),
  share: document.querySelector('.share-button'),
  destory: document.querySelector('.destory-button')
}

ui.inputs = {
  id: document.querySelector('#id')
}

ui.selector = {
  camera: document.querySelector('.camera-selector')
}

function show (ele) {
  if (!ele) return
  ele.classList.remove('dn')
}

function hide (ele) {
  if (!ele) return
  ele.classList.add('dn')
  ele.classList.remove('db')
}
