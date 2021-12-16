module.exports = function () {
    const Model = require('../pacman/model/monster');
    return function (req, res, next) {
        Model.find({}, (err, monsters) => {
            if (err) {
                return next(err);
            }
            res.locals.monsters = monsters;
            return next();
        })
    }
}