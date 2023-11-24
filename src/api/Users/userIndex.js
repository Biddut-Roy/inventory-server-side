const Users = require("../../modal/User");





const usersData = async (req, res, next) => {
    try {
        const bodyItem = req.body;
        console.log(bodyItem);
        const result = await Users.create(bodyItem);
        res.json(result);
    } catch (error) {
        next(error);
    }

}

module.exports = usersData 