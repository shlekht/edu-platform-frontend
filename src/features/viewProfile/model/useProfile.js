import { useEffect, useState } from 'react';
import { getUserById } from './mock';

export const useProfile = (userId) => {
  const [profileUser, setProfileUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    setTimeout(() => {
      const user = getUserById(userId);
      setProfileUser(user);
      setIsLoading(false);
    }, 500);
  }, [userId]);

  return { profileUser, isLoading };
};