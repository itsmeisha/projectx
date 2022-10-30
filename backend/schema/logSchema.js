import mongoose from "mongoose";

// creating the schema
const logSchema = mongoose.Schema(
  {
    userId: String,
    logs: [
      {
        name: String,
        duration: String,
        distance: String,
        date: String,
      },
    ],
  },
  { typeKey: "$type" }
);

// {
//     userId: "1243524543",
//     logs: [
//       {
//         // name: "Lumbini Ambulance",
//         // duration: "5 min",
//         // distance: "20 km",
//         // date: "8 jun",
//       },
//     ],
//   }

export default logSchema;
