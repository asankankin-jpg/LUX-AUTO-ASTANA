# Используем стабильную и легкую версию сервера Nginx
FROM nginx:alpine

# Копируем абсолютно все файлы из текущей папки проекта в папку сервера Nginx
# Теперь index.html, style.css, script.js, admin.html и testdrive.html будут в корне
COPY . /usr/share/nginx/html

# Открываем 80-й порт для доступа к сайту
EXPOSE 80

# Запускаем сервер
CMD ["nginx", "-g", "daemon off;"]
