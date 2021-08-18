interface User {
  id: string | number;
  firstName: string;
  lastName: string;
  email: string;
  job: string;
  avatar?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export default User;
