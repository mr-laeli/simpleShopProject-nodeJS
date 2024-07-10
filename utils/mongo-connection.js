const { MongoClient } = require('mongodb');
//A design pattern using SINGLETON
module.exports = class connectToMongoDB {
     #DB_URL = 'mongodb://localhost:27017/products';
     #db = null;
     async #connect() {
          try {
               let client = new MongoClient(this.#DB_URL);
               let db = client.db();
               console.log('connected');
               return db;
          } catch (error) {
               console.log(error.message);
          }
     }
     async get() {
          try {
               if (this.#db) {
                    console.log('its already exist');
                    return this.#db;
               }
               this.#db = await this.#connect();
               return this.#db;
          } catch (error) {
               console.log(error);
          }
     }
};
