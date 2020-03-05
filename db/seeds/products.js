var faker = require('faker');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(() => {
      return knex.raw('ALTER TABLE ' + 'products' + ' AUTO_INCREMENT = 1')
    })
    .then(function () {
      // Create temp database info and Inserts seed entries
      let tempProd = [];
      for (let i = 0; i < 50; i++) {
        tempProd.push({
          imgSmall: faker.image.abstract(),
          imgLarge: faker.image.abstract(),
          itemName: faker.commerce.productName(),
          price: faker.random.number(),
          numInstock: faker.random.number(),
          materials: faker.lorem.sentence(),
          description: faker.lorem.paragraph(),
          shippingCost: 'FREE',
        })
        console.log(tempProd)
      }
      return knex('products').insert(tempProd);
    });
};
