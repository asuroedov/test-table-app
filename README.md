Тестовое задание: https://kanalservis.notion.site/kanalservis/React-e07c83de444142dc8e743a2712934113

Деплой: https://asuroedov.github.io/test-table-app/

Запуск проекта: Установить зависимости(npm install), выполнить скрипт npm start. </br>
Должен быть свободен порт 5000 для запуска сервера. Должна быть создана бд postgresql(настройки для подключения в к бд в файле ..server/src/db.ts или ..server/development.env). 

Так же нужно будет заполнить бд данными(можно через post запрос на http://localhost:5000/transportations с данными вида [{"date":"2022-02-19","title":"Ручки","count":16754,"distance":220},{"date":"2022-01-02","title":"Ручки","count":10184,"distance":201}, ...]. Но легче посмотреть уже задеплоеное приложение
