import express from "express";

// controller functions
import {
  getAllNotification,
  deleteAllNotification,
  updateNotification,
  addNotification,
  createsNotification,
} from "../controller/_notification.js";

// creating a router
const notificationRouter = express.Router();

notificationRouter.post("/all", getAllNotification); // fetches all the notification of a user
notificationRouter.delete("/all", deleteAllNotification); // deletes all the notification of a user
notificationRouter.patch("/all", updateNotification); // updates all notification of a user
notificationRouter.post("/add", addNotification); // adds a notification of a user
notificationRouter.post("/create", createsNotification); // creates a notification of a user

export default notificationRouter;
