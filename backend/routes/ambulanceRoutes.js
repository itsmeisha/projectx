import express from "express";

// creating a route
const ambulanceRoute = express.Router();

// importing the controller function
import {
  createAmbulance,
  deleteAmbulance,
  updateAmbulance,
  updateAmbulanceLocation,
} from "../controller/_ambulance.js";

// routes
ambulanceRoute.post("/create", createAmbulance);
ambulanceRoute.delete("/", deleteAmbulance);
ambulanceRoute.patch("/", updateAmbulance);
ambulanceRoute.patch("/location", updateAmbulanceLocation);

export default ambulanceRoute;
