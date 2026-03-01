🚀 Task Universe Site

Тестовое задание на позицию Python / Django разработчика.

Проект представляет собой лендинг с адаптивной вёрсткой на Bootstrap 5 и динамическим слайдером фотографий.
Фотографии управляются через административную панель Django с возможностью drag & drop сортировки.

🛠 Технологии

Python 3.12

Django 5.2

MySQL

Bootstrap 5

Slick Slider

Slick Lightbox

django-filer

django-admin-sortable2

⚙ Функциональность

Адаптивная верстка (desktop + mobile)

Слайдер фотографий с синхронизированными миниатюрами

Открытие изображений в полноэкранном режиме (lightbox)

Управление фотографиями через Django Admin

Загрузка изображений через django-filer

Drag & drop сортировка слайдов

Локализованные названия моделей и полей в админке

📦 Установка и запуск проекта
1️⃣ Клонировать репозиторий
git clone <repository_url>
cd task_universe_site
2️⃣ Создать виртуальное окружение и установить зависимости
python3.12 -m venv venv
source venv/bin/activate  # Mac / Linux
venv\Scripts\activate     # Windows

pip install -r req.pip
3️⃣ Настроить базу данных MySQL

Создать базу данных:

CREATE DATABASE task_universe CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

Создать пользователя:

CREATE USER 'sql_user'@'localhost' IDENTIFIED BY 'strong_pass';
GRANT ALL PRIVILEGES ON task_universe.* TO 'sql_user'@'localhost';
FLUSH PRIVILEGES;

В settings.py указать параметры подключения:

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'task_universe',
        'USER': 'sql_user',
        'PASSWORD': 'strong_pass',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
4️⃣ Применить миграции
python manage.py migrate
5️⃣ Создать администратора
python manage.py createsuperuser
6️⃣ Запустить сервер
python manage.py runserver

Открыть в браузере:

http://127.0.0.1:8000/

Админка:

http://127.0.0.1:8000/admin/
📂 Управление слайдером

Перейти в админку

Добавить слайды через django-filer

Изменить порядок слайдов с помощью drag & drop

Изменения автоматически отображаются на лендинге

📁 Структура проекта
task_universe_site/
│
├── landing/
│   ├── models.py
│   ├── admin.py
│   ├── views.py
│   ├── templates/
│   └── static/
│
├── task_universe_site/
│   ├── settings.py
│   ├── urls.py
│
├── manage.py
├── req.pip
└── README.md
📌 Примечание

Проект разработан в рамках тестового задания и демонстрирует:

базовую fullstack-компетенцию

работу с внешними пакетами Django

интеграцию фронтенд-библиотек

аккуратную структуру backend-части