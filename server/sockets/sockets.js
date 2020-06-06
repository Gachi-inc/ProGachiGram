var server = require('../bin/www')
const io = require('socket.io')(server)

io.on('connection', (socket) => {
    console.log('user connected', socket.id)
})