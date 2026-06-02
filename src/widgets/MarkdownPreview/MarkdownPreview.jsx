import React from "react";
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown-light.css";


export const MarkdownPreview = ({ text }) => {
  return (
    <>
    
    <div className="markdown-body" style={{ backgroundColor: "#F3F4F6", padding: "5px", border: "1px solid #30363d" }}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
    </>
  );
};

