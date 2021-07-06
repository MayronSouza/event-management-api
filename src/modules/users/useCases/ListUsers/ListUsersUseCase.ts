import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/implementations/UserRepository";

class ListUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    const users = await this.userRepository.list();

    return users;
  }
}

export { ListUsersUseCase };
