import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  doj: String,
  contact: String,
  achievements: [String],
  ambulance: {
    id: String,
    // name: String,
    // dName: String,
    // pNumber: Number,
    // location: {
    //   lat: Number,
    //   lng: Number,
    // },
    // owner: String,
    // status: Boolean,
    // selected: Boolean,
  },
});

export default userSchema;
