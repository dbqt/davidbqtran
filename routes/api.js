var express = require('express');
var data = require('./../data/data');
var router = express.Router();

/* GET users listing. */
router.get('/project', function(req, res, next) {
  res.json(data);
});

router.get('/project/:index', function(req, res, next) {
  res.json(data[req.params.index]);
});

module.exports = router;
