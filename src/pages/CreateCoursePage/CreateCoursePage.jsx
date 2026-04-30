import { useState } from "react";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { MarkdownEditor } from "../../widgets/MarkdownEditor/MarkdownEditor";
import { MarkdownPreview } from "../../widgets/MarkdownPreview/MarkdownPreview";
import { Container } from '../../shared/ui/Container/Container';

import styles from "./CreateCoursePage.module.css";

export const CreateCoursePage = () => {

  const [text, setText] = useState("");

  return (
    <>
      <Header />

      <Container>
        <div className = {styles.editorLayout}>
          <div className={styles.editor}>
            <MarkdownEditor value={text} onChange={setText} />
          </div>
          <div className={styles.preview}>
            <MarkdownPreview text={text} />
          </div>
        </div>
      </Container>

      <Footer />
    </>
  );
};