import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
  ) {}

  handle(req: Request, res: Response): Response {
    const { name, email, password } = req.body;

    this.createUserUseCase.execute({
      name,
      email,
      password,
    });

    return res.status(201).json();
  }
}
