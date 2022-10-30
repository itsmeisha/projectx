import mongoose from "mongoose";

// importing the userschema
import userSchema from "../schema/userSchema.js";

// importing the notificationschema

import notificationSchema from "../schema/notificationSchema.js";

// importing the ambulance Schema
import ambulanceSchema from "../schema/ambulanceSchema.js";

// importing the log schema
import logSchema from "../schema/logSchema.js";

// creating and exporting the user model
// the first string of the model function indicates the collection the data is mapped to
export const userModel = mongoose.model("user", userSchema);

// creating and exporting the notification model
export const notificationModel = mongoose.model(
  "notification",
  notificationSchema
);

// creating ambulance model
export const ambulanceModel = mongoose.model("ambulance", ambulanceSchema);

// creating and exporting the log model
export const logModel = mongoose.model("logs", logSchema);
