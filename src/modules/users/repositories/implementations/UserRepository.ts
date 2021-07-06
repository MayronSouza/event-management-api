import { getRepository, Repository } from "typeorm";
import { User } from "../../entities/User";
import { IUserReposiroty, IUserDTO } from "../IUserRepository";

class UserRepository implements IUserReposiroty {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: IUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
    });

    await this.repository.save(user);
  }

  async list(): Promise<User[]> {
    const users = await this.repository.find();

    return users;
  }

  async findByName(name: string): Promise<User | undefined> {
    const user = await this.repository.findOne({ name });

    return user;
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.repository.findOne({ email });

    return user;
  }
}

export { UserRepository };
