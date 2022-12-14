import express from "express";

// importing the dotenv to read the .env files
import dotenv from "dotenv";

// utilities
import { connectToDb } from "./config/db.js";

// routes
import authRouter from "./routes/authRoute.js";
import notificationRouter from "./routes/notificationRoute.js";
import ambulanceRouter from "./routes/ambulanceRoutes.js";
import logRouter from "./routes/logRoutes.js";

// configuring the dotenv file
dotenv.config();

// declearing the application
const app = express();

// reading the port from the env file if not available then reading hard coded value 3001
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The server is up and running at port ${PORT}`);
});

// connecting to the database
connectToDb();

// middleware for reading the incoming form data
app.use(express.urlencoded({ extended: true }));

//middleware for reading incoming json data in the request
app.use(express.json());

// auth routes
app.use(`/api/v1/auth`, authRouter);

// notificaition routes
app.use(`/api/v1/notification`, notificationRouter);

// ambulance routes
app.use(`/api/v1/ambulance`, ambulanceRouter);

// log routes
app.use(`/api/v1/log`, logRouter);
