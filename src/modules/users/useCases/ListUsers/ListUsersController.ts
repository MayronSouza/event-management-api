import { Request, Response } from "express";
import { ListUsersUseCase } from "./ListUsersUseCase";

export class ListUsersController {
  constructor(
    private listUsersUseCase: ListUsersUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.listUsersUseCase.execute();

      return res.json(users);
    } catch (error) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}
