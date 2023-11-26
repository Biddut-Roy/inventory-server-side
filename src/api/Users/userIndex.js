const Users = require("../../modal/User");



const usersData = async (req, res, next) => {
    try {
        const bodyItem = req.body;
        const result = await Users.create(bodyItem);
        res.send(result);
    } catch (error) {
        next(error);
    }

}

module.exports = usersData 