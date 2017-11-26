let User = require('../models/User');

exports.Login = function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    User.GetByUsername(username, function (err, user) {
        if (err){
            res.json({
                status: 0,
                message: "User not found"
            });
            return;
        }

        User.ComparePassword(password, user.password, function(err, isMatch){
            if (err) {
                res.json({
                    status: 0,
                    message: "Can not compare password"
                });
                return;
            }

            if(isMatch){
                res.json({
                    status: 1,
                    message: "Logged in successfully",
                    data: {
                        user_id: user.id
                    }
                });
                return;
            } else {
                res.json({
                    status: 0,
                    message: "Password was not match"
                });
                return;
            }
        });
    });
};

exports.Register = function (req, res, next) {
    var username = req.body.username;
    var email = req.body.email;
    var password = req.body.password;

    var newUser = new User({
        username: username,
        email:email,
        password: password
    });

    User.CreateUser(newUser, function (err, user) {
        if (err){
            res.json({
                status: 0,
                message: "Fail to create user"
            });
            return;
        }

        res.json({
            status: 1,
            message: "Created user successfully",
            data: {
                user_id: user.id
            }
        });
    });
};