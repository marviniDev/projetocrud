const Profile = require('../models').Profile;
const User = require('../models').User;

module.exports = {
    async index(req, res){
        return await Profile.findAll({
            include: [{
                association:'user'
            }]
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error); });
    }
};