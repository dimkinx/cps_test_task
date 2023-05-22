# CPS - тестовое задание

[![EditorConfig](https://github.com/dimkinx/cps_test_task/actions/workflows/editorconfig.yml/badge.svg)](https://github.com/dimkinx/cps_test_task/actions/workflows/editorconfig.yml)
[![HTML](https://github.com/dimkinx/cps_test_task/actions/workflows/html.yml/badge.svg)](https://github.com/dimkinx/cps_test_task/actions/workflows/html.yml)
[![CSS](https://github.com/dimkinx/cps_test_task/actions/workflows/css.yml/badge.svg)](https://github.com/dimkinx/cps_test_task/actions/workflows/css.yml)
[![JavaScript](https://github.com/dimkinx/cps_test_task/actions/workflows/javascript.yml/badge.svg)](https://github.com/dimkinx/cps_test_task/actions/workflows/javascript.yml)

## О проекте

Данный проект реализован с целью определения приемлемого уровня знаний вёрстки. При разработке затрагиваются следующие темы:

- основы CSS/HTML;
- построение сеток + БЭМ именование;
- продвинутая стилизация;
- JavaScript в браузере;
- настройка окружения;
- система контроля версий - Git.

## Об используемом окружении и возможностях сборки

Автоматизация сборки проекта основана на таск-менеджере **Gulp v4**, программной платформе **Node.js v18** и менеджере пакетов **NPM v9**.

В проекте реализована поддержка декомпозиции структуры HTML документа, компиляция стилей из SCSS синтаксиса препроцессора SASS в стандартный CSS, с последующим добавлением вендорных префиксов и транспиляция ECMAScript модулей в обратно совместимый код JavaScript.

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
- запуск валидации и тестирования на соответствие кодгайдам:
  ```bash
  npm test
  ```
- конвертирование шрифтов _(опционально)_:
  ```bash
  npm run fonts
  ```
