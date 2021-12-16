module.exports = function () {
    const Model = require('../pacman/model/score');
    return function (req, res, next) {
        Model.find({}, (err, scores) => {
            if (err) {
                return next(err);
            }
            res.locals.scores = scores;
            return next();
        })
    }
}