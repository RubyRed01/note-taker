const {v4:uuid} = require('uuid')
const router = require('express').Router()
const data_base = require('../db/db.json')
const fs = require('fs')

router.get('/notes', (req, res) => {
  res.json(data_base)
});

router.post('/notes', (req, res) => {
    console.log(req.body);
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: uuid()
    }
    data_base.push(newNote);
    fs.writeFile('./db/db.json', JSON.stringify(data_base), err => err)
    res.json(data_base)
  });



module.exports = router