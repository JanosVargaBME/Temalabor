module.exports = function () {
    const Model = require('../pacman/model/skin');
    return function (req, res, next) {
        Model.find({}, (err, skins) => {
            if (err) {
                return next(err);
            }
            res.locals.skins = skins;
            return next();
        })
    }
}