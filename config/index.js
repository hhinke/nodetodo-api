var configValues = require("./config");

module.exports = {
  getDbConnectionString: function () {
    return `mongodb+srv://${configValues.uname}:${configValues.pwd}@nodetodo-cluster.95rxa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
  },
};
