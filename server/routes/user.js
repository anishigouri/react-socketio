module.exports = function(app) {

    var controller = app.controllers.user;

    app.route('/users').get(controller.fetchUsers);/*
        .post(controller.saveUser);

    app.route('/user/:id')
        .get(controller.fetchUser)
        .delete(controller.removeUser);*/
}