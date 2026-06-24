# 🧩 DecompositionJSDoc

**DecompositionJSDoc** — это учебный проект, демонстрирующий декомпозицию React-приложения на компоненты с использованием TypeScript и JSDoc-подобного документирования. Проект представляет собой макет новостного/информационного портала с разбивкой на логические блоки.

---

## 🚀 Технологический стек

- **Язык**: TypeScript
- **Фреймворк**: React 18
- **Сборщик**: Vite
- **Линтер**: ESLint (плоская конфигурация)
- **Стили**: CSS (стандартный)

---

## 📦 Установка и запуск

```bash
# Клонировать репозиторий
git clone https://github.com/your-username/DecompositionJSDoc.git

# Перейти в директорию проекта
cd DecompositionJSDoc

# Установить зависимости
npm install

# Запустить в режиме разработки
npm run dev
```

После запуска откройте в браузере `http://localhost:5173`.

---

## 🧪 Примеры использования

### Запуск сборки для продакшена

```bash
npm run build
```

### Линтинг кода

```bash
npm run lint
```

---

## 📁 Структура проекта

```
DecompositionJSDoc/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── BodyAd/          # Рекламный блок в теле страницы
│   │   ├── BodyComponents/  # Основные компоненты тела страницы
│   │   ├── Currency/        # Блок курсов валют
│   │   ├── HeaderAd/        # Рекламный блок в шапке
│   │   ├── LastNews/        # Блок последних новостей
│   │   └── SearchEngine/    # Компонент поиска
│   ├── App.css
│   ├── App.tsx              # Корневой компонент
│   ├── index.css
│   ├── main.tsx             # Точка входа
│   └── vite-env.d.ts
├── eslint.config.js
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
└── vite.config.ts
```

---

## 📄 Лицензия

Проект распространяется под лицензией **MIT**. Подробнее — в файле `LICENSE`.