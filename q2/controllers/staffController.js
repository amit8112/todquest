const Student = require("../models/staffModel");

module.exports = {
  create: async (req, res) => {
    const { firstName, lastName, displayName, municipality } = req.body;
    const student = await Student.create({
      firstName,
      lastName,
      displayName,
      municipality,
    });
    return res.send(student);
  },
};
