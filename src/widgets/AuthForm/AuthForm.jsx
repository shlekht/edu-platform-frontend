import React, { useState } from "react";
import styles from "./AuthForm.module.css";
import { Button } from "../../shared/ui/Button/Button";
import { Input } from "../../shared/ui/Input/Input";
import { registerUser } from "../../entities/user/api";
import { useUserContext } from "../../entities/user/model/userContext";

export const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    full_name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useUserContext();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    setLoading(true);

    try {
      if (isLogin) {
        await login(formData.email, formData.password);
      } else {
        await registerUser(formData);
        alert("Регистрация прошла успешно! Теперь вы можете войти.");
        setFormData({ email: "", full_name: "", password: "" });
        setIsLogin(true);
      }
    } catch (err) {
      setError(
        err.response?.status === 401
          ? "Неверная почта и/или пароль."
          : err.response?.data?.message || "Что-то пошло не так...",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>{isLogin ? "Вход" : "Регистрация"}</h2>

      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <Input
            type="email"
            name="email"
            placeholder="Электронная почта"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {!isLogin && (
            <Input
              type="text"
              name="full_name"
              placeholder="Имя пользователя"
              value={formData.full_name}
              onChange={handleChange}
              required
            />
          )}

          <Input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <Button type="submit" disabled={loading} className={styles.submitBtn}>
          {loading ? "Загрузка..." : isLogin ? "Войти" : "Создать аккаунт"}
        </Button>
      </form>

      <Button
        onClick={() => {
          setIsLogin(!isLogin);
          setError("");
        }}
        className={styles.toggleBtn}
      >
        {isLogin
          ? "Нет аккаунта? Зарегистрироваться"
          : "Уже есть аккаунт? Войти"}
      </Button>
    </div>
  );
};
