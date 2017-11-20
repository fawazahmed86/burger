var connection = require("./connection.js");

var orm = {
  all: function(table, callBack){
    var queryString = "SELECT * FROM ";
        queryString+= table + ";";
    connection.query(queryString, function(error, result){
      if(error){
        throw error;
      }
      callBack(result);
    });
  },

  create: function(table, values, callBack){
    var queryString = "INSERT INTO ";
        queryString+= table;
        queryString+= " SET ? ";
    
    connection.query(queryString, values, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  update: function(table, values, condition, callBack){
    var queryString = "UPDATE " + table;
        queryString+= " SET ? WHERE " + condition;
    connection.query(queryString, values, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  },

  delete: function(table, condition, callBack){
    var queryString = "DELETE FROM " + table;
        queryString += " WHERE " + condition;
    connection.query(queryString, function(error, result) {
      if (error) {
        throw error;
      }
      callBack(result);
    });
  }
};

module.exports = orm;