var orm = require("../config/orm.js");

var burger = {
  all: function(callBack) {
    orm.all("burgers", function(result) {
      callBack(result);
    });
  },

  create: function(values, callBack){
    orm.create("burgers", values, function(result){
      callBack(result);
    });
  },

  update: function(values, condition, callBack){
    orm.update("burgers", values, condition, function(result) {
      callBack(result);
    });
  },

  delete: function(condition, callBack){
    orm.delete("burgers", condition, function(result){
      callBack(result);
    });
  }
};

module.exports = burger;
