const Review = require('../../modal/Testimonial')


const review = async (req, res, next) => {
    try {
        const result = await Review.find();
        res.send(result);
    } catch (error) {
        next(error);
    }

}

module.exports = review ;