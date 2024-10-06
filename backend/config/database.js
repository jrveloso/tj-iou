const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_PASSWORD);
    console.log('Connected successfully')
  } catch (err) {
    console.error("Error", error);
  }
};

module.exports = connectDB;
