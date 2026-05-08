import styles from "./ContentSwitcher.module.css";

export const ContentSwitcher = ({
  activeTab,
  onChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.switcher}>
        <button
          className={`${styles.button} ${
            activeTab === "course" ? styles.active : ""
          }`}
          onClick={() => onChange("course")}
        >
          Курс
        </button>

        <button
          className={`${styles.button} ${
            activeTab === "comments" ? styles.active : ""
          }`}
          onClick={() => onChange("comments")}
        >
          Комментарии
        </button>
      </div>
    </div>
  );
};