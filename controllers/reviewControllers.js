const { Review } = require('../db/index.js')

exports.getNumberOfReviews = async (req, res) => {
  try {
    let qty = req.params.num + 1;
    let reviews = await Review.find()
    reviews = reviews.slice(0, qty);
    res.status(200).json({
      status: 'success',
      data: {
        reviews,
      }
    })
  } catch(err) {
    res.status(400).json({
      status: 'failure',
      message: err,
    });
  }
}