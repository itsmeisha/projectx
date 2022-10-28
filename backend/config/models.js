import mongoose from "mongoose";

// importing the userschema
import userSchema from "../schema/userSchema.js";

// creating and exporting the user model
// the first string of the model function indicates the collection the data is mapped to
export const userModel = mongoose.model("user", userSchema);
