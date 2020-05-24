const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connectDB = async () => {
  try {
    await mongoose.connect(db, dbConfig);
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
