import { api } from "./client";

export const getNotes = () => api.get("/notes");

export const createNote = (data: {
  title: string;
  content: string;
}) => api.post("/notes", data);

export const updateNote = (
    id: string,
    data: {title: string; content: string}
) => api.patch(`/notes/${id}`, data);

export const deleteNote = (id: string) =>
  api.delete(`/notes/${id}`);