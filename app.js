require('dotenv').config();
const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const path = require('path');
const tasksRoutes = require('./routes/tasks');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-Handler');
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));
app.use('/api/v1/tasks', tasksRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

/*
app.get('/api/v1/tasks') --> get all tasks
app.post('/api/v1/tasks') --> create a new task
app.get('/api/v1/tasks/:id') --> get a task
app.patch('/api/v1/tasks/:id') --> update a single task
app.delete('/api/v1/tasks/:id') --> delete a task
*/

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

start();
