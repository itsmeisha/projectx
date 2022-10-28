// importing the express as express
import express from "express";

// importing the dotenv to read the .env files
import dotenv from "dotenv";

// utilities
import { connectToDb } from "./config/db.js";

// routes
import mapRouter from "./routes/map.js";

// configuring the dotenv file
dotenv.config();

// declearing the application
const app = express();

// reading the port from the env file if not available then reading hard coded value 3001
const PORT = process.env.PORT || 3001;

// `` = backtick , template literals
app.listen(PORT, () => {
  console.log(`The server is up and running at port ${PORT}`);
});

app.use("/api/v1/maps", mapRouter);

// connecting to the database
connectToDb();
