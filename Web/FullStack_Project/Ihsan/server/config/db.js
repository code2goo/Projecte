// const config = require('config');
// const db = config.get('mongoURI');

const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
    try {
      await mongoose.connect(process.env.mongoURI, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        useUnifiedTopology: true
      });
  
      console.log('MongoDB Connected...');
    } catch (err) {
      console.error('Database connection error:', err);
      // Exit process with failure
      process.exit(1);
    }
  };

  
module.exports = connectDB;