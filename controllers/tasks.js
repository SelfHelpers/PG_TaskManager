const Task = require('../models/Task');

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.find({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `There is no task with the id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const patchTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `There is no task with the id ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `There is no task with the id ${taskID}` });
    }
    //res.status(200).json({ task });
    res.status(200).send();
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};
module.exports = {
  getTasks,
  createTasks,
  getTask,
  patchTask,
  deleteTask,
};
