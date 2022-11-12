// importing the model
import { notificationModel } from "../config/models.js";

export const getAllNotification = async (req, res) => {
  const userId = req?.body?.userId;
  try {
    const notifications = await notificationModel.findOne({
      user: userId,
    }); // fetches all the notifications

    if (!notifications) {
      return res.status(404).json({
        error: "No notifications found",
      });
    }
    res.status(200).json({
      msg: "notification fetch successful",
      notifications,
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error while fetching the notifications",
      msg: e,
    });
  }
};

export const deleteAllNotification = async (req, res) => {
  const userId = req?.body?.userId;

  try {
    await notificationModel.deleteMany({
      user: userId,
    }); // delets all the notification
    res.status(200).json({
      msg: "delted all the notifications",
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error while deleting the notifications",
      msg: e,
    });
  }
};

// this function updates all the notifications of a user to seen
export const updateNotification = async (req, res) => {
  const userId = req.body?.userId;

  try {
    const updatedNotifications = await notificationModel.updateOne(
      { user: userId }, // finds all the notification with the seen value to false
      {
        $set: {
          // sets all the notification to true
          "notification.$[].seen": true,
        },
      }
    );

    if (!updatedNotifications)
      return res
        .status(404)
        .json({ error: "No notification for the user found" });

    res.status(200).json({
      msg: "Notifications updated successfully",
      notification: await notificationModel.find({ user: userId }),
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: "unknow error while updating the notifications",
      msg: e,
    });
  }
};

// creates a notification
export const createsNotification = async (req, res) => {
  const data = req?.body;
  if (!data || (data && Object.keys(data).length === 0))
    return res.status(400).json({ error: "Data is not valid" });
  //   data is expected to be according to the model

  const userId = req?.body?.userId;
  try {
    const existance = await notificationModel.findOne({ user: userId });

    if (existance) {
      return res.status(200).json({
        msg: "notification created succesfully",
        notification: existance,
      });
    }

    const notification = await new notificationModel({
      user: data?.userId,
      notification: data?.notification,
    }).save();
    res.status(200).json({
      msg: "notification created succesfully",
      notification,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: "unknow error while creating the notifications",
      msg: e,
    });
  }
};

// adds the notification to the notifications collection to the provided id
export const addNotification = async (req, res) => {
  const userId = req?.body?.userId;

  const notificationToAdd = req?.body?.notification;

  console.log(userId, notificationToAdd);
  if (!notificationToAdd || !userId)
    return res.status(400).json({
      error: "Invalid request",
    });
  //   data is expected to be according to the model

  try {
    // adds a new notification to the notificaiton
    await notificationModel.findOneAndUpdate(
      { userId: userId },
      {
        $push: {
          notification: notificationToAdd,
        },
      }
    );
    res.status(200).json({
      msg: "Notification added successfully",
      notification: await notificationModel.find(),
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error while adding the notifications",
      msg: e,
    });
  }
};
