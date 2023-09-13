const express = require('express');
const routes = express.Router();

const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');

routes.get('/tasks', tasksController.getAll);
routes.post('/tasks', tasksMiddleware.validateFieldTitle, tasksController.createTask);
routes.delete('/tasks/:id', tasksController.deleteTask);
routes.put('/tasks/:id',
	tasksMiddleware.validateFieldTitle,
	tasksMiddleware.validateFieldStatus,
	tasksController.updateTask
);

module.exports = routes;