const mongoose = require("mongoose");

const StaffSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
    },
    municipality: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Student", StaffSchema);
