import styles from "./Button.module.css";

export const Button = ({ children, variant = "default", onClick }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} onClick={onClick}>
      {children}
    </button>
  );
};