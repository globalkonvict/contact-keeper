const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./db/db');

//Setup Env Variables
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 5000;

//Init middleware
app.use(express.json({ extended: false }));

//connectDB
connectDB();

//Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/users', require('./routes/users'));

//server static
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
