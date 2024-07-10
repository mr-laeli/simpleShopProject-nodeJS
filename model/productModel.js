const { resolve } = require('path');
const products = require('../products/products.json');
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

async function updateProduct(id, payload) {
     return new Promise((resolve, reject) => {
          products.map((product) => {
               if (product.id == id) {
                    Object.assign(product, payload);
               }
               return products;
          });
          fs.writeFile(
               `${process.cwd()}/products/products.json`,
               JSON.stringify(products),
               (err) => {
                    if (err) reject(err);
                    else resolve('updated succsesfully');
               },
          );
     });
}

async function createProduct(product) {
     return new Promise((resolve, reject) => {
          products.push(product);
          fs.writeFile(
               `${process.cwd()}/products/products.json`,
               JSON.stringify(products),
               (err) => {
                    if (err) reject(err);
                    else resolve();
               },
          );
     });
}

module.exports = {
     findProduct,
     findProductById,
     deleteProduct,
     updateProduct,
     createProduct,
};
