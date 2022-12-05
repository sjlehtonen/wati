var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/add', function(req, res, next) {
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);
  res.json({result: num1 + num2});
});

module.exports = router;
