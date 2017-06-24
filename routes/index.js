var express = require('express');
var data = require('./../data/data');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'David BQ Tran', data: data });
});

module.exports = router;
