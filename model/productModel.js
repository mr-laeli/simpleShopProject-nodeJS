const { resolve } = require('path');
const { ObjectId } = require('mongodb');
const mongoConnection = require('../utils/mongo-connection');
const fs = require('fs');

async function findProduct() {
     const DB = await new mongoConnection().get();
     return new Promise(async (resolve, reject) => {
          const product = await DB.collection('product').find({}).toArray();
          resolve(product);
     });
}

async function findProductById(id) {
     const DB = await new mongoConnection().get();
     return new Promise(async (resolve, reject) => {
          const product = await DB.collection('product').findOne({ _id: new ObjectId(id) });

          resolve(product);
     });
}

async function deleteProduct(id) {
     const DB = await new mongoConnection().get();
     return new Promise(async (resolve, reject) => {
          const product = await DB.collection('product').deleteOne({ _id: new ObjectId(id) });

          resolve(product);
     });
}

async function updateProduct(id, payload) {
     const DB = await new mongoConnection().get();
     return new Promise(async (resolve, reject) => {
          const product = await DB.collection('product').updateOne(
               { _id: new ObjectId(id) },
               {
                    $set: { ...payload },
               },
          );
          resolve(product);
     });
}

async function createProduct(payload) {
     const DB = await new mongoConnection().get();
     return new Promise(async (resolve, reject) => {
          const product = await DB.collection('product').insertOne({ payload });
          resolve(product);
     });
}

module.exports = {
     findProduct,
     findProductById,
     deleteProduct,
     updateProduct,
     createProduct,
};
