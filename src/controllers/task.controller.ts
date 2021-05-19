import { Handler, Request, Response } from 'express';

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
  res.json();
};

export const createTask: Handler = (req: Request, res: Response) => {
  res.json();
};

export const deleteTask: Handler = (req: Request, res: Response) => {
  res.json();
};

export const updateTask: Handler = (req: Request, res: Response) => {
  res.json();
};
