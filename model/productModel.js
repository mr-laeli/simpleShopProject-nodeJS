const { resolve } = require('path');
const products = require('../products ( data )/products.json');

async function findProduct() {
     return new Promise((resolve, reject) => {
          resolve(products);
     });
}

async function findProductById(id) {
     return new Promise((resolve, reject) => {
          resolve(products.find((products) => products.id == id));
     });
}

module.exports = {
     findProduct,
     findProductById,
};
