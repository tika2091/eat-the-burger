var express = require('express');
var router = express.Router();
var exphand = require('../model/burger.js');


router.get('/', function(req, res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data});
  });
});
router.put('/myburgers/update', function(req,res){
  burger.update(req.body.burger_id,function(result){
    console.log(result);
    
  })
})
module.exports = router;
