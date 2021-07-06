import { UserRepository } from "../../repositories/implementations/UserRepository";
import { ListUsersController } from "./ListUsersController";
import { ListUsersUseCase } from "./ListUsersUseCase";

export default (): ListUsersController => {
  const userRepository = new UserRepository();

  const listUsersUseCase = new ListUsersUseCase(
    userRepository,
  );

  const listUsersController = new ListUsersController(
    listUsersUseCase,
  );

  return listUsersController;
}

