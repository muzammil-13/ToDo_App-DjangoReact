
# Django API with React Todo App

This repository contains a full-stack project demonstrating a Todo application built using Django for the backend API and React for the frontend interface. The project is based on the book "Beginning Django API with React" and aims to provide a hands-on guide to building and deploying a complete Django-React stack application.

## Project Overview

This Todo app allows users to manage their tasks efficiently by providing features to create, read, update, and delete tasks. It also includes authentication features such as user registration and login. The project is designed to showcase the integration of a Django REST API with a React frontend.

### Features

- **User Authentication**: Register and log in using token-based authentication.
- **Todo Management**: Create, update, and delete tasks with a user-friendly interface.
- **Task Completion**: Mark tasks as completed or incomplete.
- **Responsive UI**: A clean and responsive user interface built with React.
- **Backend API**: A RESTful API built with Django and Django REST Framework.
- **Frontend Integration**: Connects the frontend with the backend using Axios.

## Technologies Used

### Backend

- **Django**: A high-level Python web framework for rapid development.
- **Django REST Framework**: A powerful and flexible toolkit for building Web APIs.
- **SQLite**: A lightweight database for development.

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **Axios**: A promise-based HTTP client for making requests to the backend API.

## Project Structure

The project is divided into two main directories:

1. **Backend (`backend/`)**:

   - Contains the Django project and Django REST Framework setup.
   - Implements the API endpoints for managing todos and user authentication.
2. **Frontend (`frontend/`)**:

   - Contains the React application that interacts with the backend API.
   - Includes components for displaying, adding, editing, and deleting todos.

## Setup and Installation

Follow these steps to get the project up and running on your local machine:

### Prerequisites

- Python 3.8+
- Node.js 14+
- npm 6+

### Backend Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/django-react-todo-app.git
   cd django-react-todo-app
   ```
2. **Navigate to the backend directory**:

   ```bash
   cd backend
   ```
3. **Install dependencies**:

   ```bash
   pip install -r requirements.txt
   ```
4. **Apply migrations and create a superuser**:

   ```bash
   python manage.py migrate
   python manage.py createsuperuser
   ```
5. **Run the development server**:

   ```bash
   python manage.py runserver
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```bash
   cd frontend
   ```
2. **Install dependencies**:

   ```bash
   npm install
   ```
3. **Start the React development server**:

   ```bash
   npm start
   ```

The React app will be available at `http://localhost:3000`.

## Usage

1. Access the React frontend in your browser at `http://localhost:3000`.
2. Register a new account or log in using an existing account.
3. Start managing your todos!

## Deployment

Follow these steps to deploy the application:

1. **Deploy the Django API** to a platform like Heroku or DigitalOcean.
2. **Deploy the React frontend** to a platform like Vercel or Netlify.
3. Update the frontend configuration to point to the deployed backend API.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

This project is inspired by the book "Beginning Django API with React". Special thanks to the authors for providing a structured and comprehensive guide to learning Django and React development.
