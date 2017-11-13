var connection = require("./connection.js");

var orm = {
  all: function(table, callBack){
    var queryStr = "SELECT * FROM " + table + ";";
    connection.query(queryStr, function(error, result){
      if(error){
        throw error;
      }
      callBack(result);
    });
  },

  create: function(table, values, callBack){
    var queryString = "INSERT INTO ";
    queryString+=table;
    queryString+= " SET ? ";
    
    connection.query(queryString, values, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  update: function(table, values, condition, callBack){
    var queryString = "UPDATE " + table + " SET ? WHERE " + condition;
    connection.query(queryString, values, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  delete: function(table, condition, callBack){
    var queryString = "DELETE FROM " + table + " WHERE " + condition;
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  }
};

module.exports = orm;