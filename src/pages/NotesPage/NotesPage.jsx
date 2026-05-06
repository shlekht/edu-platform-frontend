import styles from "./NotesPage.module.css";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { Container } from '../../shared/ui/Container/Container';

export const NotesPage = () => {
  return (
    <div className={styles.page}>
      <Header />

      <main className={styles.main}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <button className={styles.addButton}>Добавить заметку</button>

          <ul className={styles.notesList}>
            <li className={styles.noteItem}>Заметка 1</li>
            <li className={styles.noteItem}>Заметка 2</li>
            <li className={styles.noteItem}>Заметка 3</li>
          </ul>
        </aside>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Content */}
        <section className={styles.content}>
          <p className={styles.text}>Текст с заметки.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};
