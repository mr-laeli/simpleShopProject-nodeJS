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
          console.log(id);
          const products = await productModel.findProductById(id);
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.write(JSON.stringify(products));
          res.end();
     } catch (error) {
          console.log(error);
     }
}

module.exports = {
     getMain,
     getById,
};
