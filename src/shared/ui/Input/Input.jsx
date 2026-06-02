
import styles from './Input.module.css';

export const Input = ({ className, classNameWrapper, ...props }) => {
  return (
    <div className={`${styles.inputGroup} ${classNameWrapper || ''}`.trim()}>
      <input
        
        className={`${styles.input} ${className || ''}`.trim()}
        {...props} 
      />
    </div>
  );
};

