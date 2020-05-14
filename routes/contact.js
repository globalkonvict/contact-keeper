const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');
const Contact = require('../models/Contacts');

//@route   GET api/contacts
//@desc    get users all contacts
//@access  private

router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: 'Server Error!' });
  }
});

//@route   POST api/contacts
//@desc    create new contacts
//@access  private

router.post(
  '/',
  [auth, [check('name', 'Name is required!').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, name, phone, type } = req.body;

    try {
      const newContact = new Contact({
        user: req.user.id,
        name,
        email,
        phone,
        type,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: 'Server Error!' });
    }
  }
);

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
