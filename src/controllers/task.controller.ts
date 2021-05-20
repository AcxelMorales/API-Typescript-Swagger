import { Handler, Request, Response } from 'express';
import { nanoid } from 'nanoid';

import { getConnection } from '../database/db';

export const getTasks: Handler = (req: Request, res: Response) => {
  const data = getConnection().get('tasks').value();
  return res.status(200).json({
    ok: true,
    data
  });
};

export const getCountTasks: Handler = (req: Request, res: Response) => {
  res.json();
};

export const getTaskById: Handler = (req: Request, res: Response) => {
  const taskFound = getConnection().get('tasks').find({
    id: req.params.id
  }).value();

  if (!taskFound) {
    return res.status(404).json({
      ok: false,
      message: 'La tarea no fue encontrada'
    });
  }

  return res.status(200).json({
    ok: true,
    taskFound
  });
};

export const createTask: Handler = (req: Request, res: Response) => {
  const {name, description} = req.body;

  if (name === undefined || description === undefined) {
    return res.status(409).json({
      ok: false,
      message: 'Los campos name y description son obligatorios'
    });
  }

  const task = {
    name,
    description,
    id: nanoid()
  };

  try {
    getConnection().get('tasks').push(task).write();

    return res.status(200).json({
      ok: true,
      task
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      error
    });
  }
};

export const deleteTask: Handler = (req: Request, res: Response) => {
  res.json();
};

export const updateTask: Handler = (req: Request, res: Response) => {
  res.json();
};
