# CN Hospital API

This is a RESTful API designed for a Hospital to manage the health records of COVID-19 patients. It allows the hospital staff (doctors) to register and log in, register patients, and create reports for each visit. It also provides endpoints to retrieve a patient's records and all reports filtered by status.
The API is built using Node.js and MongoDB, and uses JSON Web Tokens (JWT) for authentication. The folder structure is organized into models, controllers, and routes for scalability and maintainability.

## Installation

To install and run the application, follow the steps below:

1. Clone the repository - `git clone https://github.com/raj21parihar/cn-hospital-api.git`
2. Navigate to the project directory: `cd cn-hospital-api`
3. Install the dependencies - `npm install`
4. Create a `.env` file in the root directory with the following environment variables: -
    - `PORT=3000`
    - `MONGODB_URI=<your_mongodb_uri>`
    - `JWT_SECRET=<your_jwt_secret>`

That's it! You should now have the CN Hospital API app up and running on your local machine.

> Note: In order to use the app's functionality, you will need to have Node.js and npm installed on your system. If you don't have them installed, you can download and install them from the official Node.js [website](https://nodejs.org/en/).

## Dependencies

CN Hospital API requires the following dependencies:

-   `dotenv` - Loads environment variables from a `.env` file
-   `express` - Web framework for Node.js
-   `jsonwebtoken` - Generates and verifies JSON web tokens (JWTs)
-   `mongoose` - ODM (Object-Document Mapping) library for MongoDB and Node.js
-   `passport` - Authentication middleware for Node.js
-   `passport-jwt` - Passport strategy for authenticating with a JSON Web Token (JWT)

## API Routes

### Doctor

-   **POST** `/doctors/register` - Register a new doctor with a username and password.
-   **POST** `/doctors/login` - Login with a username and password to receive a JWT.
    > Note: All routes except for `/doctors/register` and `/doctors/login` require a valid JWT to be included in the Authorization header of the request. The JWT should have the format `Bearer <token>`.

### Patients

-   **POST** `/patients/register` - Register a new patient with a phone number. If the patient already exists, the existing patient info is returned.
-   **POST** `/patients/:id/create_report` - Create a new report for the patient with the given id, which includes the status and the date. The report is created by the doctor who is currently authenticated.
-   **GET** `/patients/:id/all_reports` - List all the reports for the patient with the given id, sorted from oldest to newest.

### Reports

-   **GET** `/reports/:status` - List all the reports for all patients with the given status. The reports are sorted from oldest to newest.

## Folder structure

The project has a scalable folder structure with separate models, controllers, and routes:

-   `models/`
    -   `doctor.js`
    -   `patient.js`
    -   `report.js`
-   `controllers/`
    -   `doctors_controller.js`
    -   `patients_controller.js`
    -   `reports_controller.js`
-   `routes/`
    -   `doctors.js`
    -   `patients.js`
    -   `reports.js`
-   `index.js`

## Contributing

We welcome contributions from the community! If you would like to contribute to CN Hospitel API, please follow these steps:

1. Fork the repository
2. Create a new branch for your changes
3. Make your changes and commit them
4. Push your changes to your forked repository
5. Create a pull request to merge your changes into the main repository

## Author

[Parmanand Parihar](https://github.com/raj21parihar/)

## License

This project is licensed under the ISC License.

## Bugs/Issues

If you encounter any bugs or issues while using the app, please report them [here](https://github.com/raj21parihar/cn-hospital-api/issues).
