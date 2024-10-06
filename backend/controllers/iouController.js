const IOU = require('../models/IOU')
const mongoose = require('mongoose')

const getIOUs = async (req, res) => {
    try {
      const ious = await IOU.find().sort({ date: 1 });
      res.json(ious);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Error fetching ious" });
    }
  }

const postIOU = async (req, res) => {
    try {
      console.log(req.body);
      const { date, name, sku } = req.body;
      const newIOU = new IOU({ date, sku, name });
      await newIOU.save();
      res.json(newIOU);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      res.status(500).json({ message: "Error fetching ious" });
    }
  }

  const deleteIOU = async (req, res) => {
    const { ids } = req.body;
    console.log(ids);
  
    try {
      const objectIds = ids.map((id) => {
        if (!mongoose.Types.ObjectId.isValid(id)) {
          throw new Error(`Invalid ID: ${id}`);
        }
        return new mongoose.Types.ObjectId(id);
      });
      console.log(objectIds);
  
      const result = await IOU.deleteMany({ _id: { $in: objectIds } });
  
      if (result.deletedCount === 0) {
        return res.status(404).send("No IOUs found to delete.");
      }
  
      res.status(200).send(`${result.deletedCount} IOUs deleted successfully.`);
    } catch (err) {
      console.error("Error deleting IOUs:", err.message);
      res
        .status(500)
        .json({ message: "Failed to delete IOUs.", error: err.message });
    }
  }

  module.exports = {
    getIOUs, postIOU, deleteIOU
  }