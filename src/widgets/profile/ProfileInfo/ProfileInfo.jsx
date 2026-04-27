import { useUser } from '../../../entities/user/model/useUser';
import { UserInfo } from '../../../entities/user/ui/UserInfo/UserInfo';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({ profileUser }) => {
  const { user } = useUser();

  const isOwner = user?.id === profileUser?.id;

  return (
    <div className={styles.wrapper}>
      <UserInfo user={profileUser} />

      {isOwner && (
        <button className={styles.button}>
          Редактировать профиль
        </button>
      )}
    </div>
  );
};