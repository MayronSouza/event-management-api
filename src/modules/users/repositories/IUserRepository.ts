import { User } from '../entities/User';

interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserReposiroty {
  create({ name, email, password }: IUserDTO): Promise<void>;
  list(): User[];
  findByName(name: string): User | undefined;
  findByEmail(email: string): User | undefined;
}

export { IUserReposiroty, IUserDTO };
