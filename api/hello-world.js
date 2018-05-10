const conn = require('../infra/db-connection');

class HelloWorld {

    get(req, res){       
        res.send("Hello World");
    }
}

module.exports = new HelloWorld();

