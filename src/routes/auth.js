const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  // create new user data
});

router.put('/:id', (req, res) => {
  // edit user data by id
})

router.delete('/:id', (req, res) => {
  // delete user data by id
})

module.exports = router;