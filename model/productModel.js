const { resolve } = require('path');
const products = require('../products ( data )/products.json');
const fs = require('fs');

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

async function deleteProduct(id) {
     return new Promise((resolve, reject) => {
          const newList = products.filter((products) => products.id != id);
          fs.writeFile(
               `${process.cwd()}/products ( data )/products.json`,
               JSON.stringify(newList),
               (err) => {
                    if (err) reject(err);
                    else resolve('removed sucssesfully');
               },
          );
     });
}

module.exports = {
     findProduct,
     findProductById,
     deleteProduct,
};
