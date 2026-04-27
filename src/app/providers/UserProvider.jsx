import { useState } from 'react';
import { UserContext } from '../../entities/user/model/userContext';
import { currentUser } from '../../entities/user/model/mock';

console.log(UserContext, currentUser);

export const UserProvider = ({ children }) => {
  const [user] = useState(currentUser);


  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};

// export const UserProvider = ({ children }) => {
//   const [user] = useState(currentUser);

//   return (
//     <UserContext.Provider value={{ user }}>
//       {children}
//     </UserContext.Provider>
//   );
// };