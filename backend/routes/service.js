const express = require('express');
const router = express.Router();
const { Service } = require('../models');

router.post('/', function (req, res) {
  Service.create(req.body).then((data) => {
    res.json(data);
  });
})
router.get('/', function(req,res){
  // res.send('hello')
  Service.find({}).then((data)=>{
    res.json(data)
  });
})
module.exports = router;
