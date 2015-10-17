var ipc = require('ipc')
// var Peer = require('peerjs')
// var clipboard = require('clipboard')
// var shell = require('shell')

var ui = require('./ui.js')

var videoSources

ui.buttons.quit.addEventListener('click', function (e) {
  ipc.send('terminate')
})

console.log('ui.selector.camera', ui.selector.camera)

MediaStreamTrack.getSources(function (sources) {

  console.log('sources', sources)
  var selector = ui.selector.camera

  videoSources = sources.filter(function (source) {
    return source.kind === 'video'
  })

  videoSources.forEach(function (source, index) {
    var option = document.createElement('option')
    option.text = source.label
    option.value = index
    selector.add(option)
  })

})

ui.buttons.share.addEventListener('click', function (e) {
  var selectedCamera = parseInt(ui.selector.camera.value)

  var srouceId = videoSources[selectedCamera]
  navigator.webkitGetUserMedia({
    audio: true,
    video: {
      optional: [
        { sourceId: videoSources[0] }
      ]
    }},
    function (stream) {

      console.log('stream', stream)

      // var call = peer.call(conn.peer, stream)

      // call.on('stream', function (stream) {
      //   console.log('on call stream', stream)
      // })
    },
    error
  )

  function error (err) {
    if (err) throw err
  }
})
