var app = require('./config/custom-express')();
require('./config/database')('mongodb://localhost/react-socketio');

var server = app.listen(8080, function() {
    console.log('Server started in port 8080');
});

var io = require('socket.io')(server);

io.on('connection', function(socket) {
    
    console.log('a user connected');
    
    socket.on('disconnected', function() {
        console.log('user disconnected');
    });

    socket.on('user', function(user) {
        console.log('recebeu', user);
        io.emit('users', user);
    });
});