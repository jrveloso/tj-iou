const mongoose = require('mongoose')

const IOUSchema = new mongoose.Schema({
    date: { type: String, required: true },
    sku: { type: Number, required: true },
    name: { type: String, required: true },
    userID: { type: String, required: true },
    paid: { type: Boolean, required: true, default: false }
  });
  
 module.exports = mongoose.model('IOU', IOUSchema)