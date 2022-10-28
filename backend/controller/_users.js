import { userModel } from "../config/models.js";

export const getAllUsers = async (req, res) => {
  const users = userModel.find({});
  res.send(users);
};

export const addUser = async (req, res) => {
  const userToAdd = {
    name: "test user",
    doj: "12",
    contact: "23891284",
    achievements: ["pro ", "player"],
    ambulance: {
      id: "124dsf234dfa3",
    },
  };

  const user = new userModel(userToAdd);
  const savedUser = await user.save();

  res.json({
    msg: "user added successfully",
  });
};
