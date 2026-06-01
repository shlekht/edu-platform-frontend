import { Container } from '../../shared/ui/Container/Container';
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { mockUsers } from '../../entities/user/model/mock';

import { ProfileInfo } from '../../widgets/profile/ProfileInfo/ProfileInfo';
import { ProfileCourses } from '../../widgets/profile/ProfileCourses/ProfileCourses';
import { useUserContext } from '../../entities/user/model/userContext';



export const ProfilePage = () => {
  
  const { currentUser } = useUserContext();
  
  if (!currentUser) {
    return <p>Загрузка профиля или вы не авторизованы...</p>;
  }

  return (
    <>
      <Header />

      <Container>
        <ProfileInfo profileUser={currentUser} />
        <ProfileCourses users={mockUsers} />
      </Container>

      <Footer />
    </>
  );
};