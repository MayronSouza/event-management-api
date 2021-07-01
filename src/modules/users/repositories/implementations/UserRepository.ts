import { User } from "../../entities/User";
import { IUserReposiroty, IUserDTO } from "../IUserRepository";

class UserRepository implements IUserReposiroty {
  private users: User[] = [];

  async create({ name, email, password }: IUserDTO): Promise<User> {
    const user = new User({
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return user;
  }

  async list(): Promise<User[]> {

    return this.users;
  }

  async findByName(name: string): Promise<User | undefined> {
    const user = this.users.find(user => user.name === name);

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }
}

export { UserRepository };
