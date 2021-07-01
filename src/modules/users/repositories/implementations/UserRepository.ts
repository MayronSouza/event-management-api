import { User } from "../../entities/User";
import { IUserReposiroty, IUserDTO } from "../IUserRepository";

class UserRepository implements IUserReposiroty {
  private users: User[];

  private static INSTANCE: UserRepository;

  constructor() {
    this.users = [];
  }

  public static getInstance(): UserRepository {
    if(!UserRepository.INSTANCE) {
      UserRepository.INSTANCE = new UserRepository();
    }

    return UserRepository.INSTANCE;
  }

  async create({ name, email, password }: IUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password: undefined,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.users.push(user)
  }

  list(): User[] {
    return this.users;
  }

  findByName(name: string): User | undefined {
    const user = this.users.find(user => user.name === name);

    return user;
  }

  findByEmail(email: string): User | undefined {
    const user = this.users.find(user => user.email === email);

    return user;
  }
}

export { UserRepository };
