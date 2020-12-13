const faker = require('faker');
const { Review, Product } = require('./index.js');

const randomNum = (max) => {
  return Math.floor(Math.random() * max) + 1;
}

const categories = []
const generateCategories = () => {
  for(let i = 0; i < 10; i++) {
    categories.push(faker.commerce.department())
  }
};
generateCategories();

const urlStrings = (int) => {
  let urls = [
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch1.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch2.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch3.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch4.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch5.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch6.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch7.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch8.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch9.jpg',
    'https://store-product-imgs.s3-us-west-2.amazonaws.com/watch10.jpg'
  ]
  return urls.slice(0, int )
}

const generateData = () => {
  let data = []

  for(let i = 0; i < 100; i++) {
    let imageArray = urlStrings(randomNum(11));
    let categorySelected = categories[randomNum(10)];
    let numReviews = randomNum(300);
    let product = {
      images: imageArray,
      itemName: faker.commerce.productName(),
      price: faker.commerce.price(),
      inStock: faker.random.boolean(),
      qty: 0,
      prodId: faker.random.uuid(),
      freeShipping: faker.random.boolean(),
      category: categorySelected, //list I make of 10
      description: faker.lorem.paragraphs(),
      materials: faker.lorem.paragraph(),
      recUsage: faker.lorem.paragraphs(),
      reviews: numReviews
    }
    data.push(product)
  }
  Product.insertMany(data)
  .then(res => {
    console.log("Products added to database")
    return
  })
  .catch(err => {
    console.log('error writing to db ', err)
  })

}
generateData()

const generateReviews = () => {
  let reviews = [];

  for(let i = 0; i < 300; i++) {
    let imageArray = urlStrings(randomNum(11));
    let review = {
      userName: faker.internet.userName(),
      starRating: randomNum(5),
      verifiedPurchaser: faker.random.boolean(),
      reviewDate: faker.date.recent(),
      review: faker.lorem.paragraphs(),
      images: imageArray,
      recommend: faker.random.boolean(),
      effictiveness: randomNum(5),
      fastDelivery: randomNum(5),
      quality: randomNum(5)
    }
    reviews.push(review);
  }
  Review.insertMany(reviews)
  .then(res => {
    console.log("Reviews added to database")
    return
  })
  .catch(err => {
    console.log('error adding reviews ',err)
  })
}
generateReviews();