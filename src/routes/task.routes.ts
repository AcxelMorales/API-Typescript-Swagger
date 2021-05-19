import { Router } from 'express';

import * as taskController from '../controllers/task.controller';

const router = Router();

router.get('/tasks', taskController.getTasks);
router.get('/tasks/count', taskController.getCountTasks);
router.post('/tasks', taskController.createTask);
router.get('/tasks/:id', taskController.getTaskById);
router.delete('/tasks/:id', taskController.deleteTask);
router.put('/tasks/:id', taskController.updateTask);

export default router;
