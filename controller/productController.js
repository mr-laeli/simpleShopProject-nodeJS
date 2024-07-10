const productModel = require('../model/productModel');

async function getMain(req, res) {
     try {
          const products = await productModel.findProduct();
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(products));
          res.end();
     } catch (error) {
          console.log(error);
     }
}

async function getById(req, res) {
     try {
          const id = req.url.split('/')[2];
          const products = await productModel.findProductById(id);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(products));
          res.end();
     } catch (error) {
          console.log(error);
     }
}

async function deleteProduct(req, res) {
     const id = req.url.split('/')[2];
     const product = productModel.findProductById(id);
     if (product) {
          const result = await productModel.deleteProduct(id);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(result));
          res.end();
     } else {
          console.log('error');
     }
}

async function updateProduct(req, res) {
     const id = req.url.split('/')[2];
     const product = productModel.findProductById(id);
     let newProduct = '';
     req.on('data', (chunk) => {
          newProduct += chunk.toString();
     });
     req.on('end', async () => {
          console.log('update');

          const parsedBody = { ...JSON.parse(newProduct) };

          if (product) {
               const result = await productModel.updateProduct(id, parsedBody);
               res.writeHead(200, { 'Content-Type': 'application/json' });
               res.write(JSON.stringify(result));
               res.end();
          } else {
               console.log('error');
          }
     });
}

async function createProduct(req, res) {
     try {
          let newProduct = '';
          req.on('data', (chunk) => {
               newProduct += chunk.toString();
          });
          req.on('end', async () => {
               const product = { id: Date.now(), ...JSON.parse(newProduct) };
               const result = await productModel.createProduct(product);
               res.writeHead(201, { 'Content-Type': 'application/json' });
               res.write(JSON.stringify('updated'));
               res.end();
          });
     } catch (error) {
          console.log(error);
     }
}

module.exports = {
     getMain,
     getById,
     deleteProduct,
     updateProduct,
     createProduct,
};
