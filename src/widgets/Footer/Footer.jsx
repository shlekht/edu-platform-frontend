import styles from "./Footer.module.css";
import { Container } from "../../shared/ui/Container/Container";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div>Проект.</div>
      </Container>
    </footer>
  );
};