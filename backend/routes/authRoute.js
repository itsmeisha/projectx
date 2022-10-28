import express from "express";

// declearing the router
const Router = express.Router();

// getting the controllers
import {
  checkExistance,
  getAllUsers,
  registerUser,
} from "../controller/_users.js";

Router.get("/getallusers", getAllUsers); // returns all the users in the database
Router.post("/checkexistance", checkExistance); // used for checking user existance and logging in the user
Router.post("/register", registerUser); // used to register user

export default Router;
