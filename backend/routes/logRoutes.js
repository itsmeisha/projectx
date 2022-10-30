import express from "express";

// creating a router
const logRouter = express.Router();

//importing the controller functions
import { getAllLogs, setLog, deleteAllLogs } from "../controller/_logs.js";

// routes
logRouter.get("/", getAllLogs);
logRouter.post("/", setLog);
logRouter.delete("/", deleteAllLogs);

export default logRouter;
