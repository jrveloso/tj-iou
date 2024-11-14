const mongoose = require("mongoose");
const IOU = require("../models/IOU");
const User = require("../models/User");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_PASSWORD);
    // await IOU.deleteMany({})
    // await User.deleteMany({})
    console.log('Connected successfully')
  } catch (err) {
    console.error("Error", error);
  }
};

module.exports = connectDB;
