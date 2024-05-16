export class UserResponse {
  name!: string;
  email!: string;
  confirm_email!: string;
  password!: string;
  confirm_password!: string;
  salon!: boolean;
  kitchen!: boolean;
}

export type payload = {
  id: number
}