const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Must provide a name'],
    trim: true,
    maxLength: [20, 'Must be within 20 characters'],
  },
  completed: {
    type: Boolean,
    required: [true, 'Missing a completed flag'],
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
