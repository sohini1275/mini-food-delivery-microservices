# Mini Food Delivery System (Microservices)

## Project Overview

This project demonstrates a Microservices Architecture using Node.js and Express.js.

The system consists of three independent services:

- Auth Service
- Menu Service
- Order Service

Communication between services is implemented using Axios.

---

## Technologies Used

- Node.js
- Express.js
- JWT Authentication
- Axios
- REST APIs

---

## Architecture

Client (Postman)

↓

Order Service (5003)

↙              ↘

Auth Service      Menu Service

(5001)            (5002)

---

## Services

### Auth Service

Endpoints:

- POST /register
- POST /login
- POST /verify

### Menu Service

Endpoints:

- GET /menu
- GET /menu/:id

### Order Service

Endpoints:

- POST /order
- GET /orders

---

## Running the Project

### Auth Service

```bash
cd auth-service
node server.js
```

### Menu Service

```bash
cd menu-service
node server.js
```

### Order Service

```bash
cd order-service
node server.js
```

---

## Features

- User Registration
- User Login
- JWT Authentication
- Menu Management
- Order Creation
- Service-to-Service Communication

---

## Author

Sohini Das
