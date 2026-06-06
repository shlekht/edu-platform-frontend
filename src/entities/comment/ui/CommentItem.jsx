import styles from './CommentItem.module.css';

export const CommentItem = ({ comment }) => {
  


  const date = new Date(comment.created_at)
  const formattedDate = new Intl.DateTimeFormat('ru-RU').format(date)
  return (
    <div className={styles.comment}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5ExGEHlPHckD3YbxH6e4kr25Ho2X4NifiQA&s'
        alt={comment.user.full_name}
        className={styles.avatar}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.username}>
              {comment.user.full_name}
            </p>

            <span className={styles.date}>
              {formattedDate}
            </span>
          </div>

          
        </div>

        <p className={styles.text}>
          {comment.text}
        </p>
      </div>
    </div>
  );
};