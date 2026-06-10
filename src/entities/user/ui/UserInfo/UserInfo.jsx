import styles from './UserInfo.module.css';

export const UserInfo = ({ user }) => {

  return (
    <div className={styles.wrapper}>
      <h2>Имя: {user.full_name}</h2>
      <p>Почта: {user.email}</p>
      <p>Роль: {user.role}</p>
    </div>
  );
};