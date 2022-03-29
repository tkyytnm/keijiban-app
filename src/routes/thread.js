const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Threads List');
});

router.post('/', (req, res) => {
  // create new thread
});

router.put('/:id', (req, res) => {
  // edit thread by id
});

router.delete('/:id', (req, res) => {
  // delete thread by id
})

module.exports = router;