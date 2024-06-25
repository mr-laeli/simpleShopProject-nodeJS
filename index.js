const HTTP = require('http');

const PORT = 5000;

const SERVER = HTTP.createServer((req, res) => {});

SERVER.listen(PORT, () => {
     console.log(`server tun on port ${PORT} 🚀`);
});
