import mongoose from "mongoose";

// creating a schema
const notificationSchema = mongoose.Schema(
  {
    user: String,
    notification: [
      {
        title: String,
        type: String, // decleares the type of notification there are currently only 5 types of notifications
        // - achievement
        // - locationAlert
        // - trackingAlert
        // - arrival
        // - emmergency
        message: String,
        seen: Boolean,
      },
    ],
  },
  { typeKey: "$type" }
);

// example data for this schema would be like
// [
//   {
//     title: "New! Achievement",
//     type: "achievement",
//     message: "Congrats now you got a helper batch for adding a ambulance",
//   },
//   {
//     title: "Alert",
//     type: "locationAlert",
//     message:
//       "Your ambulance is in active mode, and your location can be now tracked.",
//   },
//   {
//     title: "Tracking",
//     type: "trackingAlert",
//     message: "Lumbini ambulance is currently being tracked.",
//   },
//   {
//     title: "Arrival",
//     type: "arrival",
//     message: "Ambulance is about to arrive be ready.",
//   },
//   {
//     title: "Sos Signal",
//     type: "emmergency",
//     message: "SoS signal reveived click to open the live tracker.",
//   },
// ];

export default notificationSchema;
