import { User } from '../entities/User';

interface IUserDTO {
  name: string;
  email: string;
  password: string;
}

interface IUserReposiroty {
  create({ name, email, password }: IUserDTO): Promise<User>;
  list(): Promise<User[]>;
  findByName(name: string): Promise<User | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUserReposiroty, IUserDTO };
