import { createContext, useContext, useState } from 'react';
import { currentUser } from './mock';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user] = useState(currentUser);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);