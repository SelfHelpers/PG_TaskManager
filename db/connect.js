const mongoose = require('mongoose');

const connection_uri =
  'mongodb+srv://abhipg:mongodb@cluster0.owffkya.mongodb.net/TaskManager';

const connectDB = (url) => {
  return mongoose.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });
};

module.exports = connectDB;
