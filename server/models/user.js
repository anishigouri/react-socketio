var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var Schema = mongoose.Schema;

module.exports = function() {
    var schema = new Schema({

        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    });

     return mongoose.model('User', schema);
};