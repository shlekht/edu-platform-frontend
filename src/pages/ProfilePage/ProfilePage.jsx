import { Container } from '../../shared/ui/Container/Container';
import { Button } from '../../shared/ui/Button/Button';
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { AuthForm } from "../../widgets/AuthForm/AuthForm";

import { ProfileInfo } from '../../widgets/profile/ProfileInfo/ProfileInfo';
import { ProfileCourses } from '../../widgets/profile/ProfileCourses/ProfileCourses';
import { useUserContext } from '../../entities/user/model/userContext';
import { ChatWidget } from '../../widgets/ChatWidget/ChatWidget';

import { getHistory } from "../../entities/history/api";
import { useState, useEffect } from "react";


export const ProfilePage = () => {
  const { user, logout } = useUserContext();
  
  
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    
    if (user) {
      const fetchHistory = async () => {
        try {
          setIsLoading(true);
          const historyData = await getHistory();
          setCourses(historyData);
        } catch (error) {
          console.error("Ошибка при загрузке истории:", error);
        } finally {
          setIsLoading(false);
        }
      };

      fetchHistory();
    }
  }, [user]); 

  return (
    <>
      <Header />

      <Container>
        {user ? (
          <>
            <ProfileInfo profileUser={user} />
            <Button 
              onClick={logout} 
              style={{ backgroundColor: "red", color: "white", marginBottom: "10px" }}
            > 
              Выход 
            </Button>
            
            
            {isLoading ? (
              <div>Загрузка истории...</div>
            ) : (
              <ProfileCourses courses={courses} />
            )}
          </>
        ) : (
          <AuthForm />
        )}
      </Container>
      <ChatWidget/>
      <Footer />
    </>
  );
};