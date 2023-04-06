# CPS - тестовое задание

## О проекте

Данный проект реализован с целью определения приемлемого уровня знаний вёрстки. При разработке затрагиваются следующие темы:

- Основы CSS/HTML:

  - Структура HTML
  - Семантическая разметка и SEO. Доступность.
  - Инструменты разметки и оформления текста, управление отображением
  - Различия форматов изображений, особенности SVG
  - Оформление текста
  - Псевдоклассы и псевдоэлементы
  - Продвинутые селекторы, стилизация радио/чекбоксов
  - Расчет специфичности селекторов
  - Работа с таблицами и формами, различные типы инпутов
  - Наследование CSS

- Построение сеток + БЭМ именование:

  - Блочная модель документа
  - Анатомия flexbox и grid
  - Особенности кроссбраузерной верстки, вендорные префиксы
  - С какими проблемами борется БЭМ
  - Термины БЭМ: Блок, элемент, модификатор, микс

- Продвинутая стилизация:

  - Позиционирование
  - Фоны
  - Тени
  - Градиенты
  - Трансформации
  - Анимации
  - z-index

- JavaScript в браузере:

  - Типы данных
  - Приведение типов
  - Области видимости
  - Взаимодействие с DOM
  - Обработка событий
  - Замыкания

- Система контроля версий - Git и GitHub:

  - Первоначальная настройка
  - Создание коммита
  - Отправка изменений на удалённый репозиторий
  - Получение изменений с удалённого репозитория
  - Создание и переключение веток
  - Слияние веток на уровне локального и удалённого репозитория
  - Разрешение конфликтов при слиянии веток
  - Сравнение различных версий программного кода
  - Отмена и откладывание изменений

## Об используемом окружении и возможностях сборки

Реализация автоматизации сборки проекта основана на таск-менеджере **Gulp v4**, программной платформе **Node.js v18** и менеджере пакетов **NPM v9**.

В сборку добавлена поддержка декомпозиции структуры HTML документа, компиляция стилей из SCSS синтаксиса препроцессора SASS в стандартный CSS, с последующим добавлением вендорных префиксов и транспиляция ECMAScript модулей в обратно совместимый код JavaScript.

Предусмотрена работа с растровой и векторной графикой, а именно:

- компрессия изображений формата jpeg и png;
- генерация изображений в формате webp;
- оптимизация svg графики;
- генерация svg спрайта.

Качество и стиль кода контролируется заданными параметрами **EditorConfig**, линтерами **StyleLint** и **ESLint**, а так-же при помощи инструмента для автоформатирования - **Prettier**.

## Сценарии

При разработке проекта можно использовать следующие команды для запуска сценариев:

- установка зависимостей:
  ```bash
  npm i
  ```
- запуск локального сервера без минификаций:
  ```bash
  npm start
  ```
- запуск локального сервера c минификациями _(данный сценарий нужен для тестов производительности на локальном хосте)_:
  ```bash
  npm run start:prod
  ```
- сборка проекта, без минификации кода и оптимизации изображений:
  ```bash
  npm run build
  ```
- сборка проекта, минификация и оптимизация изображений перед деплоем на прод:
  ```bash
  npm run build:prod
  ```
- запуск тестирования на соответствие кодгайдам:
  ```bash
  npm test
  ```
- конвертирование шрифтов _(опционально)_:
  ```bash
  npm run fonts
  ```
