import mongoose from "mongoose";

export const ConnectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, { dbName: "ArrcLms" })
    .then(() => {
      console.log("MongoDB Connected!");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB", err);
    });
};
