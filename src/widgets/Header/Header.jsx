import styles from "./Header.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { Container } from "../../shared/ui/Container/Container";
import { useNavigate } from "react-router";
import { useState } from "react";
import  RulesWindow from "../RulesWindow/RulesWindow";

export const Header = () => {
  const [showRules, setShowRules] = useState(false);

  const navigate = useNavigate();

    
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.inner}>
          <div className={styles.logo}>☀️ Платформа</div>

          <nav className={styles.nav}>
            <Button onClick={() => navigate("/")} >📚 Главная</Button>
            <Button onClick={() => navigate("/notes")}>🖋️ Заметки</Button>
            <Button onClick={() => setShowRules(!showRules)}>📓 Правила </Button>
            <Button onClick={() => navigate("/create-course")}>🏫 Создать курс</Button>
            <Button variant="primary" onClick={() => navigate("/profile")}>👤 Мой профиль</Button>
          </nav>
        </div>
        
      </Container>

      {showRules && (
        
        <RulesWindow /> ) }

    </header>
  );
};