const SellProduct = require('../../../modal/SellProduct');
const Product = require('../../../modal/Product');

const getSellData = async (req, res) => {
  try {
    const email = req.params?.email;
    const page = parseInt(req.query?.page);
    const size = parseInt(req.query?.size);
    const query = { email: email };
    const queryCheck = { user_email: email };

   
    const result = await SellProduct.find(query).sort({ date: 'desc' }).skip(page * size).limit(size);
    const dataLength = await SellProduct.estimatedDocumentCount();
    res.send({ result, dataLength });
    
    const resulst = await Product.find(queryCheck);
    // console.log(resulst);

    // const aggregateResult = await SellProduct.aggregate([
    //   {
    //     $match: { email: email },
    //   },
    //   {
    //     $unwind: '$mainId',
    //   },
    //   {
    //     $lookup: {
    //       from: 'SellProduct',
    //       localField: 'mainId',
    //       foreignField: '_id',
    //       as: 'joinedData',
    //     },
    //   },
    //   {
    //     $unwind: '$joinedData',
    //   },
    //   {
    //     $project: {
    //       name: '$joinedData.product_name',
    //     },
    //   },
    // ]);

    // console.log(aggregateResult);
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
};

module.exports = getSellData;
