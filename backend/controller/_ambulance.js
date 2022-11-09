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

  if (!userId)
    return res.status(400).json({
      error: "Invalid userId data",
    });
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
    const existance = await ambulanceModel.find({ userId });

    if (existance && existance?.length != 0)
      return res.status(403).json({
        msg: "Ambulance was already created in past",
        ambulnace: await ambulanceModel.findOne({ userId }),
      });
    await new ambulanceModel({
      userId,
      ...ambulanceData,
    }).save(); // creates a new ambulance
    res.status(200).json({
      msg: "Ambulance created",
      ambulance: await ambulanceModel.findOne({ userId }),
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
    const existance = await ambulanceModel.find({ userId });

    if (!existance || (existance && existance?.length == 0))
      return res.status(403).json({
        msg: "Ambulance not found",
        ambulnaces: await ambulanceModel.find(),
      });

    await ambulanceModel.findOneAndUpdate({ userId }, updateData);
    res.status(200).json({
      msg: "ambulance updated successfully",
      ambulance: await ambulanceModel.findOne({ userId }),
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

  if (!userId || !newLocation)
    return res.status(400).json({
      error: "Invalid update data",
    });

  try {
    const existance = await ambulanceModel.find({ userId });

    if (!existance || (existance && existance?.length == 0))
      return res.status(403).json({
        msg: "Ambulance not found",
        ambulnaces: await ambulanceModel.find(),
      });
    await ambulanceModel.findOneAndUpdate(
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

  if (!userId)
    return res.status(400).json({
      error: "Invalid userId ",
    });

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

const demoLocationUpdate = async (newLocation) => {
  return await ambulanceModel.findOneAndUpdate(
    {
      userId: "demoAmbulance",
    },
    {
      $set: {
        location: newLocation,
      },
    }
  );
};

// this is the demo ambulance for the purpose of presentation only

export const demoAmbulance = async (req, res) => {
  const userLocation = req?.data?.location;
  // { latitute: 123214, longitude:2341343, }

  try {
    const demoAmbulance = await ambulanceModel.findOne({
      userId: "demoAmbulance",
    });

    if (!demoAmbulance)
      return res.status(404).json({
        msg: "No demo ambulance found",
      });

    // if the demo ambulance is found

    let coordinatesDifference = {
      latitude:
        userLocation?.latitude > demoAmbulance.latitude
          ? userLocation.latitude - demoAmbulance.latitude
          : demoAmbulance.latitude - userLocation.latitude,
      longitude:
        userLocation?.longitude > demoAmbulance.longitude
          ? userLocation.longitude - demoAmbulance.longitude
          : demoAmbulance.longitude - userLocation.longitude,
    };

    const onePart = {
      latitude: coordinatesDifference.latitude / 60,
      longitude: coordinatesDifference.longitude / 60,
    };

    setInterval(() => {}, 1000);
  } catch (e) {
    res.status(500).json({
      error: "Unknow error occured while showing the demo ambulnace",
      msg: e,
    });
  }
};
