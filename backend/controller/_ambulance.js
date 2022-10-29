// importing the ambulance model
import { ambulanceModel } from "../config/models.js";

export const getAllAmbulances = async (req, res) => {
  try {
    const ambulances = await ambulanceModel.find(); //fetches all the ambulances

    if (!ambulances)
      return res.status(404).json({ error: "No ambulances found" });

    res.status(200).json({
      msg: "Ambulances fetch successful",
      ambulances,
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while  fetching the ambulances",
      msg: e,
    });
  }
};
export const getMyAmbulance = async (req, res) => {
  const userId = req?.body.id;

  try {
    const myAmbulance = await ambulanceModel.findOne({ userId });

    if (!myAmbulance)
      return res.status(404).json({ error: "No ambulances found" });

    res.status(200).json({
      msg: "Ambulances fetch successful",
      ambulance: myAmbulance,
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while getting a ambulance",
      msg: e,
    });
  }
};

export const createAmbulance = async (req, res) => {
  const userId = req?.body.id;
  const ambulanceData = req?.body.data;

  if (!userId || !ambulanceData)
    return res.status(400).json({
      error: "Invalid ambulance data",
    });
  try {
    await new ambulanceModel({
      userId,
      ...ambulanceData,
    }).save(); // creates a new ambulance
    res.status(200).json({
      msg: "Ambulance created",
      ambulances: await ambulanceModel.find(),
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while creating a ambulance",
      msg: e,
    });
  }
};
export const deleteAmbulance = async (req, res) => {
  try {
    await ambulanceModel.deleteMany(); // deletes all the ambulances
    res.status(200).json({ msg: "Ambulance deleted successfully" });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while deleting a ambulance",
      msg: e,
    });
  }
};
export const updateAmbulance = async (req, res) => {
  const userId = req?.body.id;
  const updateData = req?.body.data;

  if (!userId || !updateData)
    return res.status(400).json({
      error: "Invalid ambulance data",
    });
  try {
    const updateAmbulance = await ambulanceModel.findOneAndUpdate(
      { userId },
      updateData
    );
    res.status(200).json({
      msg: "ambulance updated successfully",
      ambulance: updateAmbulance,
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while updating the ambulance",
      msg: e,
    });
  }
};
export const updateAmbulanceLocation = async (req, res) => {
  const userId = req?.body.id;
  const newLocation = req?.body.location;

  try {
    const updatedAmbulance = await ambulanceModel.findOneAndUpdate(
      { userId },
      {
        $set: {
          location: newLocation,
        },
      }
    );

    res.status(200).json({
      msg: "Ambulance updated successfully",
      ambulances: await ambulanceModel.find(),
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while updating the ambulance location",
      msg: e,
    });
  }
};
export const trackAmbulance = async (req, res) => {
  const userId = req?.body.id;

  try {
    const uptoDateAmbulance = await ambulanceModel.findOne({ userId });

    if (!uptoDateAmbulance)
      return res.status(404).json({
        error: "Cannot track ambulance, no data found",
      });
    res.status(200).json({
      msg: "Tracking in progress",
      ambulance: uptoDateAmbulance,
    });
  } catch (e) {
    res.status(500).json({
      error: "unknow error occured while tracking the ambulance location",
      msg: e,
    });
  }
};