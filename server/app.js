const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

const m = (name, text, id) => ({ name, text, id })

io.on('connection', socket => {
  socket.on('userJoined', (data, callback) => {
    if (!data.name || !data.room) {
      return callback('Данные некорректны')
    }

    callback({ userId: socked.id });
    socket.emit('newMessage', m('admin', `Добро пожаловать, ${data.name}`, ))
  })
})

module.exports = {
  app,
  server
}
