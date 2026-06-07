import { useState } from "react";

import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { ChatWidget } from "../../widgets/ChatWidget/ChatWidget";
import { MarkdownEditor } from "../../widgets/MarkdownEditor/MarkdownEditor";
import { MarkdownPreview } from "../../widgets/MarkdownPreview/MarkdownPreview";
import { Container } from '../../shared/ui/Container/Container';
import { Input } from '../../shared/ui/Input/Input';
import { createCourse } from '../../entities/course/api';


import styles from "./CreateCoursePage.module.css";

export const CreateCoursePage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [text, setText] = useState("");
  

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы, если кнопка внутри формы

    
    

    
    if (!title.trim()) {
      alert("Название курса обязательно для заполнения.");
      return;
    }

    if (!description.trim()) {
      alert("Описание курса обязательно для заполнения.");
      return;
    }

    
    if (!text.trim()) {
      alert("Контент курса не может быть пустым.");
      return;
    }
    const courseData = {
      title: title,
      description: description,
      content: text, 
    };
    setTitle("");
    setDescription("");
    setText("");
    
    createCourse(courseData)
      .then((response) => {
        console.log("Ответ от сервера:", response);
        alert("Курс успешно создан!");
      })
      .catch((error) => {
        console.error("Ошибка при создании курса:", error);
        alert("Произошла ошибка при создании курса. Пожалуйста, попробуйте снова.");
      });
  };

  return (
    <>
      <Header />

      <Container>
        
        <div className={styles.metaInputs}>
          
            <label htmlFor="course-title">Название курса</label>
            <Input
              id="course-title"
              type="text"
              placeholder="Введите название курса"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={styles.inputField}
              required
            />
          

          
            <label htmlFor="course-desc">Описание курса</label>
            <Input
              id="course-desc"
              type="text"
              placeholder="Введите краткое описание курса"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textareaField}
              required
            />
          
        </div>
        <div className = {styles.editorLayout}>
          <div className={styles.editor}>
            <MarkdownEditor value={text} onChange={setText} />
            <div className={styles.footer}>
            <button className={styles.submitBtn} onClick={handleSubmit}>
          Создать
        </button>
        </div>
          </div>
          <div className={styles.preview}>
            <MarkdownPreview text={text} />
          </div>
        </div>
      </Container>
      <ChatWidget/>
      <Footer />
    </>
  );
};