var express = require('express');
var fs = require('fs');
var router = express.Router();
const addNums = require('../utils/util');
const mongoose = require('mongoose');

const writer = fs.createWriteStream('./storage/storage.txt', { flags: 'a'});

const numSchema = new mongoose.Schema({result: Number});
const numModel = mongoose.model('num', numSchema);

async function run () {
  await mongoose.connect('mongodb://root:example@127.0.0.1:27017/test', (err) => {
    console.log(err);
  });
  
}

run();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/add', async function(req, res, next) {
  console.log(req.body);
  const num1 = parseInt(req.body.num1);
  const num2 = parseInt(req.body.num2);

  const newNum = new numModel({result: num1 + num2});
  await newNum.save();
  
  writer.write((num1 + num2).toString() + '\n', () => {
    res.json({result: num1 + num2});
  });
});

module.exports = router;
