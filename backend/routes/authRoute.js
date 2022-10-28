import express from "express";

// declearing the router
const Router = express.Router();

// getting the controllers
import { checkExistance, getAllUsers } from "../controller/_users.js";

Router.get("/getallusers", getAllUsers);
Router.post("/checkexistance", checkExistance);

export default Router;
