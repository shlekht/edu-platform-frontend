import { Container } from '../../shared/ui/Container/Container';
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { AuthForm } from "../../widgets/AuthForm/AuthForm";
import { mockUsers } from '../../entities/user/model/mock';

import { ProfileInfo } from '../../widgets/profile/ProfileInfo/ProfileInfo';
import { ProfileCourses } from '../../widgets/profile/ProfileCourses/ProfileCourses';
import { useUserContext } from '../../entities/user/model/userContext';
import { ChatWidget } from '../../widgets/ChatWidget/ChatWidget';



export const ProfilePage = () => {
  const { user } = useUserContext();

  return (
    <>
      <Header />

      <Container>
        {user ? (
          <>
            <ProfileInfo profileUser={user} />
            <ProfileCourses users={mockUsers} />
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