
import { CommentItem } from '../../entities/comment/ui/CommentItem';

import { CreateCommentForm } from '../../features/createComment/ui/CreateCommentForm';

import styles from './CommentsSection.module.css';

export const CommentsSection = ({ commentsList }) => {
  console.log('CommentsSection получил комментарии:', commentsList);
  const comments = commentsList || []
  
  const handleCreateComment = (text) => {
    console.log('Новый комментарий:', text);
  };


  return (
    <section className={styles.section}>
      

      <CreateCommentForm
        onSubmit={handleCreateComment}
      />

      {comments.length === 0 ? (
        <h3 align='center'>
          Комментариев пока нет
        </h3>
      ) : null}

      <div className={styles.commentsList}>
        
          {comments.map((comment) => (
            <CommentItem
              key={comment.id}
              comment={comment}
            />
          )
          )}
        
      </div>
    </section>
  );
};