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

module.exports = {
     getMain,
};
