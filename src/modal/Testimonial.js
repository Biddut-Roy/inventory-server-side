const {model , Schema} = require('mongoose');

const reviewSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    Details: {
        type: String,
        required: true
    }
});



const Review = model('Review', reviewSchema);

module.exports = Review;
