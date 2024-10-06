const mongoose = require('mongoose')

const IOUSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    sku: { type: Number, required: true },
    name: { type: String, required: true },
  });
  
 module.exports = mongoose.model('IOU', IOUSchema)