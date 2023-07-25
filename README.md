# Formify App

Formify is a web-based application where users can create forms for business and general purposes.

Note: This is a project for learning purposes

---

## Installation

---

### Clone

Https: `git clone https://github.com/Fajar3108/formify.git`
SSH: `git clone git@github.com:Fajar3108/formify.git`

---

### Tools

- Node JS
- NPM
- Composer
- PHP 8+
- Apache
- MYSQL

---

### Install API (Laravel)

1. `cd formify/formify-api`
2. `composer install`
3. `npm install`
4. `cp .env.example .env` or `copy .env.example .env`
5. `php artisan key:generate`
6. Create a new database called **formify** or whatever you want
7. Change database name in .env file
8. `php artisan migrate --seed`
9. `php artisan serve` (default: http://localhost:8000)

---

### Install Client (React JS)

1. `cd formify/formify-client`
2. `npm install`
3. `npm run start` (default: http://localhost:3000)
