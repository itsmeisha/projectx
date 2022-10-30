import mongoose from "mongoose";

// creating a schema
const ambulanceSchema = mongoose.Schema(
  {
    userId: String,
    name: String,
    dName: String,
    pNumber: Number,
    vNumber: String,
    location: {
      latitude: Number,
      longitude: Number,
    },
    owner: String,
    status: Boolean,
    selected: Boolean,
  },
  { typeKey: "$type" }
);

// example of the data
//  {
//       userId: "123213141"
//       name: "Hamro ambulance",
//       dName: "Isha pun",
//       pNumber: "9860712345",
//       location: {
//         latitude: 27.685344030241538,
//         longitude: 83.45944723114371,
//       },
//       owner: "Mutu hospital",
//       status: true,
//       selected: false,
//     }

export default ambulanceSchema;
