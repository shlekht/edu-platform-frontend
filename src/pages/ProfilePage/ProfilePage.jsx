import { useParams } from 'react-router';
import { Container } from '../../shared/ui/Container/Container';
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";

import { useProfile } from '../../features/viewProfile/model/useProfile';
import { mockUsers } from '../../entities/user/model/mock';

import { ProfileInfo } from '../../widgets/profile/ProfileInfo/ProfileInfo';
import { ProfileCourses } from '../../widgets/profile/ProfileCourses/ProfileCourses';



export const ProfilePage = () => {
  const { id } = useParams();

  const { profileUser, isLoading } = useProfile(id);

  if (isLoading || !profileUser) return <div style={{ color: '#fff' }}>Loading...</div>;

  return (
    <>
      <Header />

      <Container>
        <ProfileInfo profileUser={profileUser} />
        <ProfileCourses users={mockUsers} />
      </Container>

      <Footer />
    </>
  );
};