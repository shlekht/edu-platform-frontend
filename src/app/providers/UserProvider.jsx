import { useState, useEffect } from 'react';
import { UserContext } from '../../entities/user/model/userContext';
import { apiClient } from '../../shared/api/client';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  
  const login = async (username, password) => {
    
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    const response = await apiClient.post('/token', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });

    const { access_token } = response.data;
    localStorage.setItem('token', access_token);
    
    
    const userResponse = await apiClient.get('/user/me');
    setUser(userResponse.data);
  };
 
    const logout = () => {
      localStorage.removeItem('token');
      setUser(null);
    };

  useEffect(() => {
    
    const token = localStorage.getItem('token');
  
  if (token) {
    apiClient.get('/user/me')
      .then((res) => setUser(res.data))
      .catch(() => logout())
      .finally(() => setLoading(false));
  } else {
    setTimeout(() => setLoading(false), 0);
  }
}, []);
  

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

