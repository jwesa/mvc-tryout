const User = require("../models/user");

exports.addUser = (request, response) => {
	response.render("create.hbs");
};

exports.getUsers = (request, response) => {
    User.find({}, (err, allUsers) => {
        if (err) {
            console.log(err);
            return response.sendStatus(400);
        }
        response.render("users.hbs", {
            users: allUsers,
        });
    });
};

exports.postUser = (request, response) => {
    if (!request.body) return response.sendStatus(400);
    const userName = request.body.name;
    const userAge = request.body.age;
    const user = new User({ name: userName, age: userAge });
    user.save(err => {
        if (err) return console.log(err);
        response.redirect("/users");
    });
};
