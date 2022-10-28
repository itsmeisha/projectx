import express from "express";

// declearing the router
const Router = express.Router();

// getting the controllers
import { addUser, getAllUsers } from "../controller/_users.js";

Router.get("/get-users", getAllUsers);
Router.get("/add-user", addUser);

export default Router;
