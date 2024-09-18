# Django API with React Todo App

This project is a full-stack application demonstrating how to build a Django API and connect it to a React frontend. The app allows users to log in, create, view, edit, and complete todos.

Table of Contents
 * Introduction
 * Features
 * Installation
 * Usage
 * Technologies Used
 * Contributing
 * License

Introduction
This project is designed to showcase how to build a RESTful web API with Django and Django REST Framework, and connect it to a React frontend. The app is a simple Todo application where users can manage their tasks.

Features
 * User Authentication: Sign up and log in with token-based authentication.
 * CRUD Operations: Create, read, update, and delete todos.
 * Permissions: Users can only manage their own todos.
 * Deployment: Backend deployed on PythonAnywhere and frontend on Netlify.

Installation

Backend
 * Clone the repository:
   git clone <repository-url>
cd <repository-directory>

 * Create a virtual environment:
   python3 -m venv env
source env/bin/activate

 * Install dependencies:
   pip install -r requirements.txt

 * Run migrations:
   python manage.py makemigrations
python manage.py migrate

 * Create a superuser:
   python manage.py createsuperuser

 * Run the server:
   python manage.py runserver

Frontend
 * Navigate to the frontend directory:
   cd frontend

 * Install dependencies:
   npm install

 * Start the React app:
   npm start


Usage
 * Access the backend at http://localhost:8000/admin to manage todos.
 * Access the frontend at http://localhost:3000 to interact with the Todo app.

Technologies Used
 * Backend: Django, Django REST Framework
 * Frontend: React, React Bootstrap
 * Database: SQLite (default), MySQL(Online).
 * Deployment: PythonAnywhere (backend), Netlify (frontend)

Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.
License
This project is licensed under the MIT License.
Feel free to customize this README to better fit your project’s specifics!