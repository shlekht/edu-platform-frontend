import { mockComments } from '../../entities/comment/model/mockComments';
import { CommentItem } from '../../entities/comment/ui/CommentItem';

import { CreateCommentForm } from '../../features/createComment/ui/CreateCommentForm';

import styles from './CommentsSection.module.css';

export const CommentsSection = () => {
  const handleCreateComment = (text) => {
    console.log('Новый комментарий:', text);
  };


  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        Комментарии
      </h2>

      <CreateCommentForm
        onSubmit={handleCreateComment}
      />

      <div className={styles.commentsList}>
        {mockComments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
          />
        ))}
      </div>
    </section>
  );
};