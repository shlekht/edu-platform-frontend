import React, { useRef } from "react";
import styles from "./MarkdownEditor.module.css";

export const MarkdownEditor = ({ value, onChange }) => {
  const textareaRef = useRef(null);

  

  return (
    <div className={styles.container}>
      

      <textarea
        ref={textareaRef}
        className={styles.textarea}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Поле ввода текста..."
      />

      
    </div>
  );
};