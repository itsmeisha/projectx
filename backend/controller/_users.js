import { userModel } from "../config/models.js";

// fetches all the users from the database
export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    console.log(users);
    res.status(200).json({
      msg: "user fetch successful",
      users: users,
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({
      error: "couldnot get the users",
      msg: e,
    });
  }
};

// checks if the user exists or not in the database
export const checkExistance = async (req, res) => {
  // contactInfo is somewhat unique since it is provided by the social auth providers and I believe there are no two accounts with the same google id
  const contactInfo = req?.body?.contact;
  console.log({
    data: contactInfo,
    "req.body": req?.body,
  });
  try {
    const user = await userModel.findOne({ contact: contactInfo });

    // if there is no user we get null.
    // it means the user doesnot exists with the given contact information
    if (!user) return res.status(404).json({ msg: "User doesnot exist" });

    // it means the user exists with the given contact information
    res.status(200).json({
      msg: "User with that contact info exists",
      user: user,
    });
  } catch (e) {
    res.status(400).json({
      error: "Unknown error occured while checking the users existance",
      msg: e,
    });
  }
};
