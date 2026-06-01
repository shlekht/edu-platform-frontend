import { UserInfo } from '../../../entities/user/ui/UserInfo/UserInfo';
import styles from './ProfileInfo.module.css';

export const ProfileInfo = ({ profileUser }) => {
  
  return (
    <div className={styles.wrapper}>
      <UserInfo user={profileUser} />
    </div>
  );
};