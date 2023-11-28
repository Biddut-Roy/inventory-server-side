const CheckOut = require('../../../modal/CheckOut');
const Product = require('../../../modal/Product');

const getCheckOutData = async (req, res) => {
    try {
        // const result = await CheckOut.find();

        const dataCount = await CheckOut.aggregate([
            {
                $unwind: '$mainId'
            },
            {
                $lookup: {
                    from: 'Product',
                    localField: 'mainId',
                    foreignField: '_id',
                    as: '_id'
                }
            },
            {
                $unwind: '$_id'
            },
            // {
            //     $group: {
            //         _id: '$ProductsId.product_name',
            //         count: { $sum: 1 },
            //         revenue: { $sum: '$ProductsId.sellingPrice' }
            //     },
            // },
            // {
            //     $project: {
            //         _id: 0,
            //         category: '$_id',
            //         count: '$count',
            //         totalRevenue: '$revenue'
            //     }
            // }
        ]);

        res.send(dataCount);

    } catch (error) {
        console.error('Error retrieving checkout data:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = getCheckOutData;

