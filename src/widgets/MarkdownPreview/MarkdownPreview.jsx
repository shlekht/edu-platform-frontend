import React from "react";
import ReactMarkdown from "react-markdown";
import styles from "./MarkdownPreview.module.css";

const MarkdownPreview = ({ text }) => {
  return (
    <div className={styles.container}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default MarkdownPreview;