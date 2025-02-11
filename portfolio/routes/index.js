var express = require('express');
var router = express.Router();
var cors  = require("cors");

router.use(cors())
/* GET home page. */
router.get('/', function(req, res, next) {
   return res.send({ title: 'Main route Index' });

});

router.get('/testApi', function(req, res, next) {
    res.json({ title: 'TestAPI Route' });

})


module.exports = router;
