import { User } from "../../entities/User";
import { UserRepository } from "../../repositories/implementations/UserRepository";

class CreateUserUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(data: User): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByName(data.name);

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const user = new User(data)

    this.userRepository.create(user);

    user.password = '';

    return user;
  }
}

export { CreateUserUseCase };
