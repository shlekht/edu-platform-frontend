import styles from './CommentItem.module.css';

export const CommentItem = ({ comment, onReport }) => {
  const handleReport = () => {
    onReport?.(comment.id);
  };

  return (
    <div className={styles.comment}>
      <img
        src={comment.user.avatar}
        alt={comment.user.name}
        className={styles.avatar}
      />

      <div className={styles.content}>
        <div className={styles.header}>
          <div>
            <p className={styles.username}>
              {comment.user.name}
            </p>

            <span className={styles.date}>
              {comment.createdAt}
            </span>
          </div>

          <button
            className={styles.reportButton}
            onClick={handleReport}
            aria-label="Пожаловаться"
          >
            !
          </button>
        </div>

        <p className={styles.text}>
          {comment.text}
        </p>
      </div>
    </div>
  );
};