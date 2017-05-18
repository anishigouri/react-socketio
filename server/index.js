var app = require('./config/custom-express')();
require('./config/database')('mongodb://localhost/react-socketio');

app.listen(8080, function() {
    console.log('Server started in port 8080');
});