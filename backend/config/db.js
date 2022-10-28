import mongoose from "mongoose";

export const connectToDb = async () => {
  mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, (error) => {
    console.log(
      error ? `Db connection error \n${error}` : "Db connected successfully"
    );
  });
};
