# Islamic-School

## Installation:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Rename `.env.example` to `.env`.
4. Run the server using `npm run start:dev`.

## Configuration:

- Environment Variables:
  - `PORT`: Port number the server listens on. Default: 3000
  - `MONGODB_URI`: URI for MongoDB database.
  - `JWT_SECRET`: Secret key for JWT token generation.
  - `EXPIRES_IN`: Token expiration time.

## Usage:

- API Endpoints:

  - POST `/api/v1/students/registration`

    - Description: Register student in School Online.
    - Request:

      ```json
      {
        "firstName": "John",
        "lastName": "Doe",
        "dateOfBirth": "1995-05-15",
        "gender": "male",
        "email": "johndoe@example.com",
        "contactNumber": "1234567890",
        "address": "123 Main Street, City, Country",
        "guardian": {
          "fatherName": "John Doe Sr.",
          "motherName": "Jane Doe",
          "guardianContactNumber": "9876543210"
        }
      }
      ```

    - Response:
      ```json
      {
        "success": true,
        "message": "User registered successfully",
        "data": {}
      }
      ```

## Dependencies:

- `express`: Web framework for Node.js.
- `mongoose`: mongodb object modeling for node.js.
- `mongodb`: MongoDB driver for Node.js.
- `cors`: Express middleware for enabling CORS.
- `dotenv`: Loads environment variables from .env file.
- `nodemon`: Utility for automatically restarting the server during development.
