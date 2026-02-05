# Используем легкий сервер Nginx
FROM nginx:alpine

# Копируем все файлы сайта в папку сервера
COPY . /usr/share/nginx/html

# Открываем 80 порт
EXPOSE 80
