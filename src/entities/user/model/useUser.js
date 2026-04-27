import { useUserContext } from './userContext';

export const useUser = () => {
  const { user } = useUserContext();

  return {
    user,
    isAuth: !!user
  };
};