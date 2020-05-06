const express = require('express');
const router = express.Router();

//@route   GET api/contacts
//@desc    get users all contacts
//@access  private

router.get('/', (req, res) => {
    res.send('get all contact');
});

//@route   POST api/contacts
//@desc    create new contacts
//@access  private

router.post('/', (req, res) => {
    res.send('create new contacts');
});

//@route   PUT api/contacts
//@desc    update user's contacts
//@access  private

router.put('/:id', (req, res) => {
    res.send('update contacts');
});

//@route   DELETE api/contacts
//@desc    get users all contacts
//@access  private

router.delete('/:id', (req, res) => {
    res.send('delete user');
});

module.exports = router;
