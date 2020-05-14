const express = require('express');
const app = express();
const connectDB = require('./config/db');

const PORT = process.env.PORT || 5000;

//Init middleware

app.use(express.json({extended: false}));

//connectDB
connectDB();

//Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));
app.use('/api/users', require('./routes/users'));

app.listen(PORT, () => console.log(`Server started on Port: ${PORT}`));
