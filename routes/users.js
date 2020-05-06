const express = require('express');
const router = express.Router();

//@route   POST api/users
//@desc    Register a user
//@access  public

router.post('/', (req, res) => {
    res.send('registers user');
})

module.exports = router;
