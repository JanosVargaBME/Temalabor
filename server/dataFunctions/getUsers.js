module.exports = function () {
    const Model = require('../model/user');
    return function (req, res, next) {
        Model.find({}, (err, users) => {
            if (err) {
                return next(err);
            }
            res.locals.users = users;
            return users;
        })
    }
}