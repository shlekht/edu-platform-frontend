import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { Container } from "../../shared/ui/Container/Container";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>Название Платформы</div>

          <nav className={styles.nav}>
            <Button>Главная</Button>
            <Button>Правила</Button>
            <Button variant="primary">Вход / Регистрация</Button>
          </nav>
        </div>
      </Container>
    </header>
  );
};