# ToDoList CRUD Fullstack Project

This is a ToDoList project that implements CRUD (Create, Read, Update, Delete) operations on a list of tasks. The project currently consists of the backend, which is a complete API developed with Node.js, Express, and MySQL.

## Features

- [x] Create a new task.
- [x] List all existing tasks.
- [x] Update an existing task.
- [x] Delete a task.

## Technologies Used

- Node.js
- Express.js
- MySQL

## Database Configuration

Before running the project, you need to configure the MySQL database. You can do this by following these steps:

1. Install MySQL on your system if it is not already installed.

2. Create a MySQL database for the project.

3. Rename the `.env.example` file to `.env` in the project's root folder and configure the necessary environment variables for the database connection. You can use the `.env.example` file as a reference.

```plaintext
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_DATABASE=database_name
```

4. Edit the `connection.js` file in the `src` folder to use the environment variables configured in your `.env` file.

```javascript
require('dotenv').config(); // Load environment variables from the .env file

module.exports = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};
```

## Installation and Execution

Follow these steps to run the project:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/your-todolist-project.git
   ```

2. Navigate to the project folder:

   ```bash
   cd your-todolist-project
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the project:

   ```bash
   npm start
   ```

   The API will be accessible at [http://localhost:3333](http://localhost:3333). Ensure that MySQL is running and configured correctly.

## Frontend Usage

The frontend of the ToDoList project has been developed using HTML, CSS, and JavaScript. To use the frontend, follow these steps:

1. Open the `index.html` file in a web browser to access the ToDoList interface.

2. Use the provided features to create, list, update, and delete tasks.

## Importing Postman Configurations

To import Postman configurations for testing the API, you can follow these steps:

1. Download and install [Postman](https://www.postman.com/downloads/) if you haven't already.

2. Import the Postman collection by clicking the "Import" button in Postman and selecting the provided Postman collection file.

3. Once imported, you can use the collection to test the API endpoints. Make sure to update the environment variables in Postman to match your API configuration.

## API Endpoints

The API provides the following endpoints:

- `GET /tasks`: Lists all tasks.
- `POST /tasks`: Creates a new task.
- `PUT /tasks/:id`: Updates an existing task.
- `DELETE /tasks/:id`: Deletes a task.

For more details on how to use each endpoint, refer to the API documentation.
## Author

João Carlos Fernandes Bernardo
- GitHub: [https://github.com/jcfbernardo](https://github.com/jcfbernardo)