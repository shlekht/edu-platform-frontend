# Educational Platform Project

<details>
<summary>🇷🇺 Русский </summary>
<br>

Мой первый frontend проект на React, Vite и JavaScript. Связанный backend — [[github](https://github.com/shlekht/edu-platform-backend)]. Общая идея — аналог сайта Stepik с конструктором курсов, в экосистеме казахского языка.

Я практиковался с синтаксисом и идеями React и FSD (Feature-Sliced Design) архитектуры. Также практиковался с Git и с минимальным Git Flow (`main` -> `branch` -> `main`). 

**Используемые библиотеки:**
* **axios**
* **react-markdown** — курсы это Markdown разметка
* **react-router**

**Основные фичи (Features):**
1. **Курсы:** Create, Read, Delete (создание, чтение, удаление) курса.
2. **Комментарии:** Create, Read (создание и чтение) комментариев.
3. **Заметки:** Full CRUD (создание, чтение, обновление, удаление) заметок.
4. **Интеграция:** Окно чата с LLM.
5. **Безопасность:** JWT авторизация.

**Важные архитектурные моменты:**
1. `app/providers/UserProvider` — обрабатывает логин, делает API запросы на логин и `GET /me`, сохраняет JWT токен в `localStorage`, кладёт нужные данные в `UserContext`.
2. `shared/api/client.js` — общий клиент для HTTP запросов. Сами функции запросов по сущностям лежат в `entities/`.

**Рефлексия:**
Лучше стал понимать frontend и SPA подход на React: как работает авторизация и аутентификация, как происходит связь между backend и frontend, как работают и для чего нужны CSS Modules и React Portal. Также понял, что выбранная архитектура (FSD) была оверинжинирингом и являлась слишком сложной для начала — общая идея и иерархия понятна, но часто тяжело определить, где именно должен находиться тот или иной функционал и/или компонент, так что некоторые компоненты остались неотрефакторенными и, возможно, запутанными.

---
</details>

<details>
<summary>🇺🇸 English</summary>
<br>

My first frontend project built with React, Vite, and JavaScript. Connected backend: [[github](https://github.com/shlekht/edu-platform-backend)]. The core concept is a Stepik alternative featuring a course builder, tailored for the Kazakh language ecosystem.

I practiced React syntax, core concepts, and Feature-Sliced Design (FSD) architecture. I also improved my Git skills using a lightweight workflow (`main` -> `branch` -> `main`).

**Libraries used:**
* **axios**
* **react-markdown** (courses are rendered using Markdown markup)
* **react-router**

**Key Features:**
1. **Course Management:** Create, read, and delete courses.
2. **Comments:** Create and read comments.
3. **Notes:** Full CRUD operations (create, read, update, delete) for notes.
4. **AI Chat:** An interactive chat window powered by an LLM.
5. **Authentication:** JWT-based authentication.

**Key Architecture Points:**
1. `app/providers/UserProvider` — Handles login by making API requests for login and `GET /me`. It stores the JWT token in `localStorage` and provides the necessary data via `UserContext`.
2. `shared/api/client.js` — A shared HTTP client. Entity-specific request functions are located within `entities/`.

**Reflection / Lessons Learned:**
I gained a much deeper understanding of frontend development and the SPA approach with React. I now better understand how authorization and authentication work, how backend and frontend communicate, and the practical use cases for CSS Modules and React Portals. 

I also realized that choosing FSD architecture for this project was a bit of an overengineering and too complex for a starting point. While the general concept and hierarchy make sense, it was often difficult to determine exactly where a specific feature or component should belong so some components stayed unrefactored and probably confusing.

---
</details>
