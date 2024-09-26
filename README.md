# ***PORTFOLIO PROJECT***

This is a portfolio project built using **Node.js**, which allows users to manage their projects, skills, and achievements. It includes features like registration with password hashing, image uploads for projects, validation during registration, JWT-based authentication, and rate limiting for login requests.

## ***FEATURES***

- **Registration and Login**: 
  - Users can register with validation. Passwords are hashed using **bcrypt**.
  - JWT-based authentication is used, meaning users must be logged in to perform any actions.
  
- **Rate Limiting**: 
  - A rate limiter is applied to prevent brute-force attacks at login.

- **Project Management**: 
  - Authenticated users can add new projects and upload images.
  - To test this feature, use the `ProjectSubmit.html` file located in `public/test/ProjectSubmit.html`. (Note: temporarily remove `authenticateToken` middleware when testing.)

- **Skills and Achievements**: 
  - Users can add their skills and achievements to the portfolio.

- **Form Submission**: 
  - A form submission feature is available, allowing users to submit personal details.

## ***TECHNOLOGIES USED***

- **Node.js**: Backend framework.
- **Express**: Web application framework for handling routes and middleware.
- **Mongoose**: ODM for MongoDB for managing database connections and schemas.
- **bcrypt**: For hashing passwords.
- **jsonwebtoken (JWT)**: For token-based authentication.
- **multer**: For handling file uploads.
- **Helmet**: For security by setting various HTTP headers.
- **Morgan**: For logging HTTP requests.
- **Express Rate Limit**: To limit repeated requests to APIs.
- **Express Validator**: For validating and sanitizing input data.
- **CORS**: For handling cross-origin requests.

## ***GETTING STARTED***

### ***PREREQUISITES***

To run this project, ensure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **MongoDB** (running locally or on the cloud)
  
### ***INSTALLING***

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/portfolio-project.git
    ```

2. Navigate to the project directory:
    ```bash
    cd portfolio-project
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. Create a `.env` file in the root directory and add the following environment variables:
    ```bash
    MONGO_URI=your-mongodb-uri
    JWT_SECRET_KEY=your-secret-key
    JWT_REFRESH_SECRET_KEY=your-refresh-secret-key
    ```

5. Start the application:
    ```bash
    npm start
    ```

### ***DIRECTORY STRUCTURE***

```bash
|-- /public/login/            # Login page for users
|-- /public/test/ProjectSubmit.html # HTML form for project submission
|-- /routes/                  # API routes
|-- /controllers/             # Application logic (e.g., handling project submissions, authentication)
|-- /models/                  # Mongoose models for database schema
|-- /middlewares/             # Middleware for authentication and validations
|-- index.js                  # Main entry point for the application
|-- .env                      # Environment variables file
|-- README.md                 # This README file
```

## ***USAGE***

### ***1. User Registration***

To register, send a POST request to `/register` with the following body parameters:
```bash
{
  "username": "your-username",
  "email": "your-email",
  "password": "your-password"
}
```

The password will be hashed using bcrypt before being stored in the database.

### ***2. User Login***

To login, send a POST request to `/login` with your credentials. On successful login, you'll receive a JWT token:
```bash
{
  "token": "your-jwt-token"
}
```

Use this token to perform any actions like adding projects, skills, or achievements.

### ***3. Adding a Project***

After logging in, you can add a project by sending a POST request to /project (make sure to include the JWT token in the headers). You can also upload an image along with your project details using the form in `public/test/ProjectSubmit.html`.

### ***4. Upload an Image***

Image uploads are handled using Multer, and users can submit their images as part of their project details.

### **5. Form Submition***

Users can submit forms with personal details that will be stored in the database.

### ***Important Notes***
If you want to test project submission using the HTML form in `public/test/ProjectSubmit.html`, temporarily remove the authenticateToken middleware from the project route:

```bash
router.use('/project', projectRouter);
```

After testing, restore the middleware for authentication:

```bash
router.use('/project', authenticateToken, projectRouter);
```

### ***SECURITY FEATURES***
- Password Hashing: Passwords are securely hashed using bcrypt.
- JWT Authentication: Tokens are used to authorize actions. Users must have a valid token to access protected routes.
- Rate Limiting: The login route is protected with a rate limiter to prevent brute-force attacks.
- Helmet: Used for securing HTTP headers to protect the app from common vulnerabilities.
