import { useState } from 'react';

import { Button } from '../../../shared/ui/Button/Button';

import styles from './CreateCommentForm.module.css';

export const CreateCommentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = () => {
    if (!text.trim()) return;

    onSubmit?.(text);

    setText('');
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        className={styles.textarea}
        placeholder="Напишите комментарий..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className={styles.actions}>
        <Button onClick={handleSubmit}>
          Оставить комментарий
        </Button>
      </div>
    </div>
  );
};