import { useState, useEffect } from "react";
import { CommentItem } from "../../entities/comment/ui/CommentItem";
import { createComment } from "../../entities/comment/api";

import { CreateCommentForm } from "../../features/createComment/ui/CreateCommentForm";

import styles from "./CommentsSection.module.css";

export const CommentsSection = ({ commentsList, id }) => {
  const [comments, setComments] = useState(commentsList || []);
  const courseId = id;
  
  useEffect(() => {
    setComments(commentsList || []);
  }, [commentsList]);

  const handleCreateComment = async (text) => {
    try {
      const newComment = await createComment(courseId, { text });
      setComments((prevComments) => [newComment, ...prevComments]);
    } catch (error) {
      console.error("Ошибка при создании комментария:", error);
      alert("Ошибка при создании комментария.");
    }
  };

  return (
    <section className={styles.section}>
      <CreateCommentForm onSubmit={handleCreateComment} />

      {comments.length === 0 ? (
        <h3 align="center">Комментариев пока нет</h3>
      ) : null}

      <div className={styles.commentsList}>
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
};
