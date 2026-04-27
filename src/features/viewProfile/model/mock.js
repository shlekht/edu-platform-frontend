import { mockUsers } from '../../../entities/user/model/mock';

export const getUserById = (id) => {
  return mockUsers.find((u) => u.id === id);
};