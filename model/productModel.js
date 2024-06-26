const { resolve } = require('path');
const products = require('../products ( data )/products.json');

async function findProduct() {
     return new Promise((resolve, reject) => {
          resolve(products);
     });
}

module.exports = {
     findProduct,
};
