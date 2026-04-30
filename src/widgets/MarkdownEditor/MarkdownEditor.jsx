import React, { useState, useRef } from "react";
import styles from "./MarkdownEditor.module.css";

const MarkdownEditor = () => {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  const applyFormat = (prefix, suffix = "") => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = text.substring(start, end);

    const newText =
      text.substring(0, start) +
      prefix +
      selectedText +
      suffix +
      text.substring(end);

    setText(newText);

    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(
        start + prefix.length,
        end + prefix.length
      );
    }, 0);
  };

  return (
    <div className={styles.container}>
      <div className={styles.toolbar}>
        <button
          className={styles.button}
          onClick={() => applyFormat("### ")}
        >
          H
        </button>

        <button
          className={styles.button}
          onClick={() => applyFormat("**", "**")}
        >
          B
        </button>

        <button
          className={styles.button}
          onClick={() => applyFormat("_", "_")}
        >
          I
        </button>
      </div>

      <textarea
        ref={textareaRef}
        className={styles.textarea}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Оставьте комментарий"
      />

      <div className={styles.footer}>
        <button className={styles.submitBtn}>
          Создать
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;