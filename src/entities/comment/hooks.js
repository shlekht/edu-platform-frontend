import { useState, useEffect } from "react";
import { getCommentsByCourseId } from "./api";



export const useComments = (id) => {
  const [comments, setComments] = useState([]);
  const [commentsLoading, setCommentsLoading] = useState(false);

   useEffect(() => {
    const fetchComments = async () => {
      try {
        setCommentsLoading(true);
        const data = await getCommentsByCourseId(id);
        setComments(data);
      } catch (error) {
        console.error("Ошибка при загрузке комментариев:", error);
      } finally {
        setCommentsLoading(false);
      }
    };

    fetchComments();
  }, [id]); 

  return { comments, commentsLoading }
  
};