import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './ChatWidget.module.css'; 
import { sendMessageToLLM } from "../../entities/chat/api";



export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue;
    
    
    setMessages([{ role: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    try {
        
        const data = await sendMessageToLLM(userText);
        
        
        const botReply = data.text || 'Ошибка: пустой ответ от сервера';
        
        
        setMessages([
            { role: 'user', text: userText },
            { role: 'assistant', text: botReply }
        ]);
        setIsAnswered(true);
    } catch (error) {
        console.error('Ошибка при генерации ответа LLM:', error);
        
        
        setMessages([
            { role: 'user', text: userText },
            { role: 'assistant', text: 'Не удалось получить ответ. Попробуйте еще раз.' }
        ]);
        setIsAnswered(true);
    } finally {
        setIsLoading(false);
    }
};

  const handleResetChat = () => {
    setMessages([]);
    setIsAnswered(false);
    setInputValue('');
  };

  const widgetContent = (
    <div className={styles.fixedWidgetContainer}>
      {isOpen && (
        <div className={styles.widgetMenu}>
          
          <div className={styles.widgetHeader}>
            <span className={styles.assistantTitle}>Интерактивный ассистент</span>
          </div>

          <div className={styles.chatBody}>
            {messages.length === 0 && !isLoading && (
              <div className={styles.emptyState}>Задайте мне любой вопрос связанный с казахским языком!</div>
            )}
            
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`${styles.message} ${msg.role === 'user' ? styles.userMessage : styles.aiMessage}`}
              >
                {msg.text}
              </div>
            ))}

            {isLoading && (
              <div className={`${styles.message} ${styles.aiMessage} ${styles.loading}`}>
                Печатает ответ...
              </div>
            )}
          </div>

          <div className={styles.widgetFooter}>
            {isAnswered ? (
              <button className={styles.resetButton} onClick={handleResetChat}>
                Новый вопрос
              </button>
            ) : (
              <form onSubmit={handleSendMessage} className={styles.inputForm}>
                <input
                  type="text"
                  placeholder="Введите ваш вопрос..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  disabled={isLoading}
                  className={styles.chatInput}
                />
                <button 
                  type="submit" 
                  disabled={isLoading || !inputValue.trim()} 
                  className={styles.sendButton}
                >
                  {isLoading ? '...' : '➔'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <button className={styles.widgetTrigger} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✖' : '💬'}
      </button>
    </div>
  );

  return ReactDOM.createPortal(widgetContent, document.body);
};