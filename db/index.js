const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env'});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful'))


const ProductSchema = new mongoose.Schema({
  images: [ String ],
  primaryImg: String,
  itemName: String,
  price: Number,
  inStock: Boolean,
  onSale: Boolean,
  qty: Number,
  prodId: String,
  freeShipping: Boolean,
  category: String, //list I make of 10
  description: String,
  materials: String,
  recUsage: String,
  reviews: Number
})

exports.Product = mongoose.model('Product', ProductSchema);

const ReviewSchema = new mongoose.Schema({
  userName: String,
  starRating: Number,
  verifiedPurchaser: Boolean,
  reviewDate: Date,
  review: String,
  images: [ String ],
  recommend: Boolean,
  effictiveness: Number,
  fastDelivery: Number,
  quality: Number,
  headline: String
})

exports.Review = mongoose.model('Review', ReviewSchema);
