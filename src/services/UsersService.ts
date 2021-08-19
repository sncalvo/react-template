import Api from './ApiService';

import User from '@models/User';

class UsersService {
  static getUsers = async () => (await Api.get<{ data: User[] }>('users')).data;
  static getUser = (id: string | number) => Api.get<User>(`users/${id}`);
  static createUser = (user: User) => Api.post<User>(`users`, user);
  static updateUser = (user: User) => Api.put<User>(`users`, user);
  static deleteUser = (id: string | number) => Api.delete<{}>(`users/${id}`);
}

export default UsersService;
