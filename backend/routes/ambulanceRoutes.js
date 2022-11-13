import express from "express";

// creating a route
const ambulanceRouter = express.Router();

// importing the controller function
import {
  createAmbulance,
  deleteAmbulance,
  getAllAmbulances,
  getMyAmbulance,
  trackAmbulance,
  updateAmbulance,
  updateAmbulanceLocation,
  demoAmbulance,
  resetDemoAmbulance,
} from "../controller/_ambulance.js";

// routes
ambulanceRouter.get("/", getAllAmbulances);
ambulanceRouter.post("/", getMyAmbulance);
ambulanceRouter.post("/create", createAmbulance);
ambulanceRouter.delete("/", deleteAmbulance);
ambulanceRouter.patch("/", updateAmbulance);
ambulanceRouter.patch("/location", updateAmbulanceLocation);
ambulanceRouter.post("/watch", trackAmbulance);
ambulanceRouter.post("/demoAmbulance", demoAmbulance);
ambulanceRouter.patch("/demoAmbulance/reset", resetDemoAmbulance);

export default ambulanceRouter;
