import mongoose from "mongoose";
import { userModel } from "../config/models.js";

// fetches all the users from the database
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      msg: "user fetch successful",
      users: users,
    });
  } catch (e) {
    res.status(400).json({
      error: "couldnot get the users",
      msg: e,
    });
  }
};

// checks if the user exists or not in the database
// if the existance is validated and it is a login request
// then the user can be logged into the found user
// means no login function 😅
export const checkExistance = async (req, res) => {
  const id = req?.body?.id;
  if (!id)
    return res.status(400).json({
      error: "id  must be supplied",
    });

  try {
    const user = await userModel.findOne({ id: id });

    // if there is no user we get null.
    // it means the user doesnot exists with the given contact information
    if (!user) return res.status(404).json({ msg: "User doesnot exist" });

    // it means the user exists with the given contact information
    res.status(200).json({
      msg: "User with that id  exists",
      user: user,
    });
  } catch (e) {
    res.status(500).json({
      error: "Unknown error occured while checking the users existance",
      msg: e,
    });
  }
};

// loging in the user
export const registerUser = async (req, res) => {
  let user = req?.body;
  if (!user)
    return res.status(400).json({
      error: "User must be supplied",
    });
  try {
    // const docsCount = await userModel.countDocuments();

    // user.ambulance.id = docsCount;
    const registeredUser = await new userModel({
      ...user,
      ambulance: { userId: req?.body?.id },
      achievements: ["new"],
    }).save();

    // it means the user exists with the given contact information
    res.status(200).json({
      msg: "User registered successfully",
      user: registeredUser,
    });
  } catch (e) {
    res.status(400).json({
      error: "Unknown error occured while logging user in",
      msg: e,
    });
  }
};

// delets all the userdata from the database
export const deleteAllUser = async (req, res) => {
  try {
    await userModel.deleteMany({});
    res.status(200).json({
      msg: "user deletion successful",
    });
  } catch (e) {
    res.status(400).json({
      error: "Unknow error while deleting the users",
      error: e,
    });
  }
};
