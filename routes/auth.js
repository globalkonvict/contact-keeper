const express = require('express');
const router = express.Router();

//@route   GET api/auth
//@desc    Get logged in user
//@access  private

router.get('/', (req, res) => {
    res.send('get loged in user');
});

//@route   POST api/auth
//@desc    Logged in user
//@access  private

router.post('/', (req, res) => {
    res.send('loged in user');
})

module.exports = router;