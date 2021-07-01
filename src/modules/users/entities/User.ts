import {v4 as uuidV4} from 'uuid';

class User {
  id?: string;

  name: string;

  email: string;

  password: string;

  created_at: Date;

  updated_at: Date;

  constructor({
    name,
    email,
    password,
  }: User) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.email = email;
    this.password = password;
    this.created_at = new Date();
    this.updated_at = new Date();
  }
}

export { User };
