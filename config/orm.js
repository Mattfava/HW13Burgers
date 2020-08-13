var connection = require("./connection.js");

function questionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }

function pushToDB(obj){
    var arr = [];

    for(var key in obj){
        arr.push(key + "=" + obj[key]);
    }
    return arr.toString();
}

var orm ={
    all: function(table, cb){
        var tableQuery = "SELECT * FROM "+ table +";";
        connection.query(tableQuery, function(err,results){
            cb(results);
        })
    },


    create: function(table, columns, values, cb){
        var dbString = "INSERT INTO " + table +"("+columns.toString() +") VALUES ("+questionMarks(values.length)+")";
      

        connection.query(dbString, values, function(err, res){
            cb(res);
        });
    },
    update: function(table, values, condition, cb){
        var dbString2 = "UPDATE " + table +" SET "+pushToDB(values)+" WHERE "+condition;

        connection.query(dbString2, function(err, res){
            cb(res);
        });
    }
};

module.exports = orm;