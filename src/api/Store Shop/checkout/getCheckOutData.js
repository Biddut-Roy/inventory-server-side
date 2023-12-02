const CheckOut = require('../../../modal/CheckOut');


const getCheckOutData = async (req, res) => {
    const query = req.query?.email
   
    try {
        const product = await CheckOut.find({ email: query });

        const count = await CheckOut.estimatedDocumentCount({ email: query });

        const totals = await CheckOut.aggregate([
            {
                $match: { email: query },
            },
            {
                $group: {
                    _id: null,
                    totalDiscount: { $sum: '$discount' },
                }
            }
        ])
        const discount = totals.length > 0 ? totals[0].totalDiscount : 0;

        const prices = await CheckOut.aggregate([
            {
                $match: { email: query },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$sellingPrice' },
                }
            }
        ])

        const totalPay = prices.length > 0 ? prices[0].totalRevenue : 0;

        res.send({ product, discount, totalPay, count });

    } catch (error) {
        console.error('Error retrieving checkout data:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = getCheckOutData;

