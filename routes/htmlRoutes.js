const path = require('path');
const router = require('express').Router()

router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

// GET Route for notes page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// route to direct users to a 404 page
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router