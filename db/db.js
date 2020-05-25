const mongoose = require('mongoose');

const dbConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, dbConfig);
    console.log('DB Connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
