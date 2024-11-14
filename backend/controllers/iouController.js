const IOU = require("../models/IOU");
const mongoose = require("mongoose");

const getIOUs = async (req, res) => {
  try {
    const ious = await IOU.find().sort({ date: 1 });
    res.json(ious);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching ious" });
  }
};

const postIOU = async (req, res) => {
  try {
    const { date, name, sku, userID, fullName, paid } = req.body;
    const newIOU = new IOU({ date, sku, name, userID, fullName, paid });
    await newIOU.save();
    res.json(newIOU);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching ious" });
  }
};

const payIOU = async (req, res) => {
  const { ids } = req.body;

  try {
    const objectIds = ids.map((id) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new Error(`Invalid ID: ${id}`);
      }
      return new mongoose.Types.ObjectId(id);
    });

    const result = await IOU.updateMany(
      { _id: { $in: objectIds } },
      { $set: { paid: true } }
    );

    if (result.modifiedCount === 0) {
      return res.status(404).send("No IOUs found to pay.");
    }

    res.status(200).send(`${result.modifiedCount} IOUs deleted successfully.`);
  } catch (err) {
    console.error("Error paying IOUs:", err.message);
    res
      .status(500)
      .json({ message: "Failed to pay IOUs.", error: err.message });
  }
};

module.exports = {
  getIOUs,
  postIOU,
  payIOU,
};
