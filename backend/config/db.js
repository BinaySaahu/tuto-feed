const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(process.env.MONGO_URL, {
        // useNewUrlParser: true,
      });
      console.log("DataBase Connected");
    } catch (error) {
      console.log("Error");
      console.log(error);
    }
  };
  
  module.exports = connectDB;