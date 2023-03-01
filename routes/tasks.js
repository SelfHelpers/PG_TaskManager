const router = require('express').Router();
const {
  getTasks,
  createTasks,
  getTask,
  patchTask,
  deleteTask,
} = require('../controllers/tasks');
router.route('/').get(getTasks).post(createTasks);
router.route('/:id').get(getTask).patch(patchTask).delete(deleteTask);

module.exports = router;
