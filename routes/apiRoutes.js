const router = require('express').Router()
const data_base = require('../db/db.json')
const fs = require('fs')

router.get('/notes', (req, res) => {
  console.log('Ruby is awesome');
  res.json(data_base)
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    data_base.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(data_base), err => err)
    res.json(data_base)
  });

module.exports = router