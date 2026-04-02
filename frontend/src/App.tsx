import { useState, useEffect } from "react";
import "./App.css";
import {
  getNotes,
  createNote,
  deleteNote,
  updateNote,
} from "./api/notes";

type Note = {
  id: string;
  title: string;
  content: string;
};

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    setLoading(true);
    const res = await getNotes();
    setNotes(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSubmit = async () => {
    if (!title || !content) return;

    if (editingId) {
      await updateNote(editingId, { title, content });
      setEditingId(null);
    } else {
      await createNote({ title, content });
    }

    setTitle("");
    setContent("");
    fetchNotes();
  };

  const handleDelete = async (id: string) => {
    await deleteNote(id);
    fetchNotes();
  };

  const handleEdit = (note: Note) => {
    setTitle(note.title);
    setContent(note.content);
    setEditingId(note.id);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Notes App</h1>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editingId ? "Update Note" : "Add Note"}
      </button>

      <hr />

      {notes.map((note) => (
        <div key={note.id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>

          <button onClick={() => handleEdit(note)}>Edit</button>
          <button onClick={() => handleDelete(note.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;