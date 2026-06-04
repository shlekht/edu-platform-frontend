import { apiClient } from "../../shared/api/client";

export const getNotes = async () => {
  const response = await apiClient.get(`/notes/`);
  return response.data;
}

export const createNote = async (noteData) => {
  const response = await apiClient.post(`/notes/`, noteData);
  return response.data;
}

export const updateNote = async (noteId, noteData) => {
  const response = await apiClient.put(`/notes/${noteId}/`, noteData);
  return response.data;
}

export const deleteNote = async (noteId) => {
  const response = await apiClient.delete(`/notes/${noteId}/`);
  return response.data;
}