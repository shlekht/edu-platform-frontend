import { useState, useEffect } from "react";
import styles from "./NotesPage.module.css";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { ChatWidget } from "../../widgets/ChatWidget/ChatWidget";
import { AuthForm } from "../../widgets/AuthForm/AuthForm";
import { Container } from "../../shared/ui/Container/Container";
import { useUserContext } from "../../entities/user/model/userContext";
import { getNotes } from "../../entities/note/api";
import { createNote } from "../../entities/note/api";
import { updateNote } from "../../entities/note/api";
import { deleteNote } from "../../entities/note/api";
import { Button } from "../../shared/ui/Button/Button";

export const NotesPage = () => {
  const { user } = useUserContext();

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const [editTitle, setEditTitle] = useState("");
  const [editText, setEditText] = useState("");

  useEffect(() => {
    if (user) {
      getNotes().then((fetchedNotes) => {
        
        setNotes(fetchedNotes);
        if (fetchedNotes && fetchedNotes.length > 0) {
          setSelectedNote(fetchedNotes[0]);
        }
      });
    } else {
      setNotes([]);
      setSelectedNote(null);
    }
  }, [user]);

  useEffect(() => {
    if (selectedNote) {
      setEditTitle(selectedNote.title);
      setEditText(selectedNote.text);
    } else {
      setEditTitle("");
      setEditText("");
    }
  }, [selectedNote]);

  const handleAddNote = async () => {
    try {
      const newNoteData = {
        title: "Новая заметка",
        text: "",
      };
      const createdNote = await createNote(newNoteData);
      setNotes((prevNotes) => [...prevNotes, createdNote]);

      setSelectedNote(createdNote);
    } catch (error) {
      console.error("Ошибка при создании заметки:", error);
      alert("Не удалось создать заметку. Попробуйте еще раз.");
    }
  };

  const handleSaveNote = async (e) => {
    e.preventDefault();

    const updatedData = {
      id: selectedNote?.id,
      title: editTitle,
      text: editText,
    };

    try {
      const updatedNote = await updateNote(selectedNote.id, updatedData);

      setNotes((prevNotes) =>
        prevNotes.map((note) =>
          note.id === updatedNote.id ? updatedNote : note,
        ),
      );
    } catch (error) {
      console.error("Ошибка при сохранении:", error);
    }
  };

  const handleDeleteNote = async () => {
    if (!selectedNote) return;

    try {
      await deleteNote(selectedNote.id);
      setNotes((prevNotes) =>
        prevNotes.filter((note) => note.id !== selectedNote.id),
      );
      setSelectedNote(null);
      alert("Заметка удалена!");
    } catch (error) {
      console.error("Ошибка при удалении заметки:", error);
      alert("Не удалось удалить заметку. Попробуйте еще раз.");
    }
  };

  return (
    <div className={styles.page}>
      <Header />

      {user ? (
        <main className={styles.main}>
          <aside className={styles.sidebar}>
            <Button className={styles.addButton} onClick={handleAddNote}>
              Добавить заметку
            </Button>

            <ul className={styles.notesList}>
              {notes.map((note) => (
                <li
                  key={note.id}
                  className={`${styles.noteItem} ${selectedNote?.id === note.id ? styles.activeNote : ""}`}
                  onClick={() => setSelectedNote(note)}
                >
                  {note.title}
                </li>
              ))}
            </ul>
          </aside>

          <div className={styles.divider} />

          <section className={styles.content}>
            {selectedNote ? (
              <form onSubmit={handleSaveNote} className={styles.editForm}>
                <div className={styles.formGroup}>
                  <label htmlFor="noteTitle">Заголовок</label>
                  <input
                    id="noteTitle"
                    type="text"
                    className={styles.inputTitle}
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Введите заголовок..."
                    required
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="noteText">Текст заметки</label>
                  <textarea
                    id="noteText"
                    className={styles.textareaText}
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    placeholder="Начните писать..."
                    rows={10}
                    required
                  />
                </div>

                <Button type="submit" className={styles.saveButton}>
                  Сохранить изменения
                </Button>
                <Button
                  className={`${styles.saveButton} ${styles.deleteButton}`}
                  onClick={handleDeleteNote}
                >
                  Удалить заметку
                </Button>
              </form>
            ) : (
              <p className={styles.text}>Выберите заметку для редактирования</p>
            )}
          </section>
        </main>
      ) : (
        <AuthForm />
      )}
      <ChatWidget/>
      <Footer />
    </div>
  );
};
