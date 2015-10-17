var ipc = require('ipc')
var Peer = require('peerjs')
// var clipboard = require('clipboard')
// var shell = require('shell')

var ui = require('./ui.js')

var videoSources

ui.buttons.quit.addEventListener('click', function (e) {
  ipc.send('terminate')
})

MediaStreamTrack.getSources(function (sources) {
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
  var peerId = ui.inputs.id.value

  var peer = new Peer(peerId || 'electron-video', { key: 'ob1bohiqjkedn29' })
  var srouceId = videoSources[selectedCamera]

  peer.on('connection', function (conn) {
    console.log('on conn', conn)

    navigator.webkitGetUserMedia({
    audio: true,
    video: {
      optional: [
        { sourceId: srouceId }
      ]
    }},
    function (stream) {
      console.log('stream', stream)

      var call = peer.call(conn.peer, stream)

      call.on('stream', function (stream) {
        console.log('on call stream', stream)
      })
    },
    error
  )
  })
})

function error (err) {
  if (err) throw err
}
