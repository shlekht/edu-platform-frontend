import { apiClient } from "../../shared/api/client";

export const getCommentsByCourseId = async (courseId) => {
  const response = await apiClient.get(`/courses/${courseId}/comments`);
  return response.data;
};

export const createComment = async (courseId, commentData) => {
  const response = await apiClient.post(
    `/courses/${courseId}/comments`,
    commentData,
  );
  return response.data;
};
