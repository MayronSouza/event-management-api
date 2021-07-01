import { IUserReposiroty } from "../../repositories/IUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserReposiroty) {}

  execute({ name, email, password }: IRequest): void {
    const userAlreadyExits = this.userRepository.findByEmail(email);

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
