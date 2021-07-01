import { Router } from 'express';
import { createUserController } from '../modules/users/useCases/CreateUser';

const userRouter = Router();

userRouter.get('/users', (req, res) => {
  return
});

userRouter.post('/users', (req, res) => {
  return createUserController.handle(req, res);
});

export default userRouter;
