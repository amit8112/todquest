const Right = require("../models/rightModel");

module.exports = {
  create: async (req, res) => {
    const right = await Right.create({
      student: req.body.student,
      right: req.body.right,
    });
    const rightData = await right.save();
    return res.send(rightData);
  },
  staffByRight: async (req, res) => {
    const rightData = await Right.find({ _id: req.body.right_id }).populate(
      "student"
    );
    res.send(rightData);
  },
};
