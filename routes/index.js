const api = require('../api/hello-world');

module.exports = app => {
    app.route("/api/index")
    .get(api.get)    
};