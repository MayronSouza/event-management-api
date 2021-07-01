import { Router } from 'express';
import { createUserController } from '../modules/users/useCases/CreateUser';
import { listUsersController } from '../modules/users/useCases/ListUsers';

const userRouter = Router();

// Rota de listagem de usuários
userRouter.get('/', (req, res) => {
  return listUsersController.handle(req, res);

  return res.json();
});

// Rota de criação de um usuário
userRouter.post('/', (req, res) => {
  return createUserController.handle(req, res);

  return res.status(201).json();
});

export { userRouter };
