// import the logmodel
import { logModel } from "../config/models.js";

export const getAllLogs = async (req, res) => {
  const userId = req?.body?.id;
  if (!userId)
    return res.status(400).json({
      error: "Invalid userId",
    });
  try {
    const logs = await logModel.find(); // fetches all the logs
    if (!logs)
      return res.status(404).json({
        error: "No logs found for the user",
      });

    return res.status(200).json({
      msg: "Fetching logs successful",
      logs,
    });
  } catch (e) {
    res.status(500).json({
      error: "Unknow error while fetching logs",
      msg: e,
    });
  }
};
export const setLog = async (req, res) => {
  const userId = req?.body?.id;
  const logToSet = req?.body?.data;

  if (!userId || !logToSet)
    return res.status(400).json({
      error: "Invalid data",
    });

  try {
    const logs = await logModel.findOneAndUpdate(
      { userId },
      {
        $push: {
          logs: logToSet,
        },
      }
    ); // finds log for the supplied user id and updates it if it exists

    // if there are no logs creating one
    if (!logs) {
      const createdLog = new logModel({
        userId,
        logs: [{ ...logToSet }],
      });

      return res.status(201).json({
        msg: "New log created",
        logs: createdLog,
      });
    }

    res.status(200).json({
      msg: "New log was added",
      logs,
    });
  } catch (e) {
    res.status(500).json({
      error: "Unknow error while setting logs",
      msg: e,
    });
  }
};
export const deleteAllLogs = async (req, res) => {
  const userId = req?.body?.id;
  if (!userId)
    return res.status(400).json({
      error: "Invalid userId",
    });
  try {
    await logModel.deleteMany({}); //deletes all the logs

    res.status(200).json({
      msg: "All logs deleted successfully",
    });
  } catch (e) {
    res.status(500).json({
      error: "Unknow error while fetching logs",
      msg: e,
    });
  }
};
