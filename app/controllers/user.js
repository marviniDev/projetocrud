const User = require('../models').User;
const Profile = require('../models').Profile;

module.exports = {
    async index(req, res) {
      return await User.findAll({
          include: [
            {
                association:"profile"
            }
        ],
        })
        .then((users) => res.status(200).send(users))
        .catch((error) => { res.status(400).send(error); });
    },

    async show(req, res){
        const user = await User.findAll({where: {id: req.params.id}})
        return res.json(user);
    },

    async store(req, res){
        let { name, password, email, fullname, birthday, genre } = req.body;
        let user = await User.create(
            { name, password, email, profile: {fullname, birthday, genre}},
            { include: ["profile"] }
            );
        return res.json(user);
    }
}