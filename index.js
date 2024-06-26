const HTTP = require('http');
const productController = require('./controller/productController');

const PORT = 5000;

const SERVER = HTTP.createServer((req, res) => {
     if (req.url == '/products' && req.method == 'GET') {
          productController.getMain(req, res);
     } else if (req.url.match(/\/products\/[0-9]/)) {
          const id = req.url.split()[2];
          console.log(id);
          productController.getById(req, res);
     }
});

SERVER.listen(PORT, () => {
     console.log(`server tun on port ${PORT} 🚀`);
});
