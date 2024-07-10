const HTTP = require('http');
const productController = require('./controller/productController');

const PORT = 5000;

const SERVER = HTTP.createServer((req, res) => {
     if (req.url == ('/products' || '') && req.method == 'GET') {
          productController.getMain(req, res);
     } else if (req.url.match(/\/products\/[0-9]+/) && req.method == 'GET') {
          productController.getById(req, res);
     } else if (req.url.match(/\/products\/[0-9]+/) && req.method == 'PUT') {
          productController.updateProduct(req, res);
     } else if (req.url.match(/\/products\/[0-9]+/) && req.method == 'DELETE') {
          productController.deleteProduct(req, res);
     } else if (req.url == ('/products' || '') && req.method == 'POST') {
          productController.createProduct(req, res);
     }
});

// -------------- run server -------------- //
SERVER.listen(PORT, () => {
     console.log(`server tun on port ${PORT} 🚀`);
});
