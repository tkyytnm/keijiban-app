const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Comment List');
});

router.post('/', (req, res) => {
  // add comment
})

router.delete('/:id', (req, res) => {
  // delete comment by id
})

module.exports = router;