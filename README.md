# NestJS Users API

This project is a RESTful API built with NestJS for managing users. It allows you to create, read, update, and delete (CRUD) user profiles in a MongoDB database. The API also uses validation to ensure data integrity.

## Technologies

![NestJS](https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- CRUD operations for user profiles
- TypeScript for type safety
- Data validation with DTOs (Data Transfer Objects)
- MongoDB as the database
- Mongoose for MongoDB object modeling

## Setup

1. **Clone the repository**:

   ```bash
    git clone https://github.com/hugueslopezpardo/nestjs-api-users.git
   ```

2. **Navigate to the project directory**:

   ```bash
    cd nestjs-api-users
   ```

## Running the Application

1. **Run the application**:

   ```bash
    docker-compose up -d
   ```

2. **Access the API**:
    - The API will be accessible at `http://localhost:3000/api`.

## API Endpoints

The following endpoints are available in the Users API, with `curl` examples provided for testing each endpoint.

### 1. Create User

- **Endpoint**: `POST /users`
- **Body**:
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  }
  ```
- **Curl Command**:
  ```bash
  curl -X POST http://localhost:3000/users -H "Content-Type: application/json" -d '{"firstName": "John", "lastName": "Doe", "email": "john.doe@example.com"}'
  ```
- **Response**: The created user object.

### 2. Get All Users

- **Endpoint**: `GET /users`
- **Curl Command**:
  ```bash
  curl -X GET http://localhost:3000/users
  ```
- **Response**: An array of all user objects.

### 3. Get User by ID

- **Endpoint**: `GET /users/:id`
- **Parameters**: `id` - The ID of the user.
- **Curl Command**:
  ```bash
  curl -X GET http://localhost:3000/users/<user_id>
  ```
- **Response**: The user object, or `null` if not found.

### 4. Update User

- **Endpoint**: `PATCH /users/:id`
- **Parameters**: `id` - The ID of the user.
- **Body**:
  ```json
  {
    "firstName": "Updated First Name",
    "lastName": "Updated Last Name",
    "email": "updated.email@example.com"
  }
  ```
- **Curl Command**:
  ```bash
  curl -X PATCH http://localhost:3000/users/<user_id> -H "Content-Type: application/json" -d '{"firstName": "Updated First Name", "lastName": "Updated Last Name", "email": "updated.email@example.com"}'
  ```
- **Response**: The updated user object, or `null` if not found.

### 5. Remove User

- **Endpoint**: `DELETE /users/:id`
- **Parameters**: `id` - The ID of the user.
- **Curl Command**:
  ```bash
  curl -X DELETE http://localhost:3000/users/<user_id>
  ```
- **Response**: The removed user object, or `null` if not found.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
