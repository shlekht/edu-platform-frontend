import styles from "./Button.module.css";

export const Button = ({ children, variant = "default" }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
};