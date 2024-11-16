# User Authentication Backend

This is a Flask-based backend for user registration and authentication using MySQL, with JWT-based token management and password hashing. It includes endpoints for user registration and login, with JWT access tokens for secure user sessions.

## Features

- User Registration and Login
- Password hashing (PBKDF2)
- JWT-based access tokens
- MySQL database support
- Cross-Origin Resource Sharing (CORS) support

### Prerequisites

- Python 3.8+
- MySQL Database

### Installation

1. **Clone the Repository**

   ```bash
   git clone <repository_url>
   cd project_root/backend
   ```

2. **Set up a Virtual Environment**

   ```bash
   python -m venv venv
   source venv/bin/activate         # On Windows, use `venv\Scripts\activate`
   ```

3. **Install Dependencies**

   Make sure you have all necessary packages installed by running:

   ```bash
   pip install -r requirements.txt
   ```

### Configuration

1. **Database Configuration**

   Update the database URI in `app.py` to match your MySQL credentials:

   ```python
   app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://username:password@localhost/your_database'
   ```

2. **JWT Secret Key**

   Set your secret key in `app.py`:

   ```python
   app.config['JWT_SECRET_KEY'] = 'your_jwt_secret_key'
   ```

### Running the Application

1. **Start MySQL**

   Ensure your MySQL server is running and accessible with the database name you specified in `SQLALCHEMY_DATABASE_URI`.

2. **Run the Flask Application**

   Start the Flask server:

   ```bash
   flask run
   ```

   By default, the application will run at `http://127.0.0.1:5000`.

### Endpoints

1. **Register**  
   **Endpoint**: `/register`  
   **Method**: `POST`  
   **Payload**:
   ```json
   {
     "username": "user123",
     "password": "password123",
     "email": "user@example.com"
   }
   ```
   **Response**:
   - `201`: Registration successful
   - `400`: User already exists or invalid email format

2. **Login**  
   **Endpoint**: `/login`  
   **Method**: `POST`  
   **Payload**:
   ```json
   {
     "username": "user123",
     "password": "password123"
   }
   ```
   **Response**:
   - `200`: Login successful, returns JWT access token
   - `401`: Invalid username or password

### Testing

You can test the API with tools like [Postman](https://www.postman.com/) or directly from the frontend with JavaScript.