# Mini Food Delivery System

## Project Overview

A Microservices-based Food Delivery System developed using Node.js and Express.js. The project demonstrates service-to-service communication using Axios and JWT-based authentication.

---

## Services

### 1. Auth Service (Port 5001)
- User Registration
- User Login
- JWT Generation
- Token Verification

### 2. Menu Service (Port 5002)
- View Food Menu
- View Food Item by ID

### 3. Order Service (Port 5003)
- Place Order
- View Orders
- Communicates with Auth and Menu Services

---

## Architecture

Client (Postman)

↓

Order Service (5003)

↙              ↘

Auth Service      Menu Service

(5001)            (5002)

---

## Features

- JWT Authentication
- RESTful APIs
- Microservices Architecture
- Service-to-Service Communication using Axios
- Order Processing
- Menu Management

---

## Tech Stack

- Node.js
- Express.js
- JWT (jsonwebtoken)
- Axios
- Postman

---

## API Endpoints

### Auth Service
- POST /register
- POST /login
- POST /verify

### Menu Service
- GET /menu
- GET /menu/:id

### Order Service
- POST /order
- GET /orders

---

## Author

Sohini Das
