const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  // display users list
  res.send('User List');
});

router.put("/:id", (req, res) => {
  // edit user data by id
});

router.delete("/:id", (req, res) => {
  // delete user data by id
});

module.exports = router;