const Class = require("../models/Class");

exports.getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ message: "Error fetching classes" });
  }
};

exports.createClass = async (req, res) => {
  const { name, description, schedule, capacity, trainer } = req.body;
  try {
    const newClass = new Class({ name, description, schedule, capacity, trainer });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(500).json({ message: "Error creating class" });
  }
};
