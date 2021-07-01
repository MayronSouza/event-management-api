import {v4 as uuidV4} from 'uuid';

class User {
  id?: string;

  name: string;

  email: string;

  password: string;

  confirmPassword: string;

  created_at: Date;

  updated_at: Date;

  constructor({
    name,
    email,
    password,
    confirmPassword,
    created_at,
    updated_at,
  }: User) {
    if (!this.id) {
      this.id = uuidV4();
    }

    this.name = name;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}

export { User };
