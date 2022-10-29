import express from "express";

// creating a route
const ambulanceRouter = express.Router();

// importing the controller function
import {
  createAmbulance,
  deleteAmbulance,
  getAllAmbulances,
  trackAmbulance,
  updateAmbulance,
  updateAmbulanceLocation,
} from "../controller/_ambulance.js";

// routes
ambulanceRouter.get("/", getAllAmbulances);
ambulanceRouter.post("/create", createAmbulance);
ambulanceRouter.delete("/", deleteAmbulance);
ambulanceRouter.patch("/", updateAmbulance);
ambulanceRouter.patch("/location", updateAmbulanceLocation);
ambulanceRouter.post("/watch", trackAmbulance);

export default ambulanceRouter;
