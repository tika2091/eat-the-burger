var connection = require('.connection.js');
var orm = {
  all: functin(tableInput, cb){
    connection.query('SELECT * FROM '+tableInput+';', function(err, result){
      if(err)throw err;
      cb(result);
    })
  },
  update: function(tableInput, condition, cb){
    connection.qury('UPDATE '+tableInput+'SET devoured=true WHERE id='+condition+';', function(err,result){
      if(err)throw err;
      cb(result);
    })
  }
}
module.exports=orm;
