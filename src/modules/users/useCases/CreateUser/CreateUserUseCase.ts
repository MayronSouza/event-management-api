import { IUserReposiroty } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserReposiroty) {}

  async execute({ name, email, password }: IRequest): Promise<void> {
    const userAlreadyExits = await this.userRepository.findByEmail(email);

    if (userAlreadyExits) {
      throw new Error('User already exists.')
    }

    this.userRepository.create({
      name,
      email,
      password,
    });
  }
}

export { CreateUserUseCase };
