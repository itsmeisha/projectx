import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: String,
  name: String,
  doj: String,
  contact: String,
  achievements: [String],
  photo: String,
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
