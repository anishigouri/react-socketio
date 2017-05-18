module.exports = function(app) {
    var User = app.models.user;

    var controller = {};

    controller.fetchUsers = function(req, res) {
        // A função exec recebe retorna uma Promise(Essa é uma função do mongoose)
        User.find().exec().then(
            function(users) {
                console.log('users', users);
                res.json(users);
            },
            function(erro) {
                console.error(erro);
                res.status(500).json(erro);
            }
        );

    }

    return controller;
}