import styles from './UserInfo.module.css';

export const UserInfo = ({ user }) => {
  return (
    <div className={styles.wrapper}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};