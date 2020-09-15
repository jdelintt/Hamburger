var orm = require("../config/orm");

var burgers = {
  all: function (cb) {
    orm.all("burgers", function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.all("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.all("burgers", objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.all("burgers", condition, function (res) {
      cb(res);
    });
  },
};

module.exports = burgers;
