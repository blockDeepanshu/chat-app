import mongoose from "mongoose";

mongoose.connection.once("open", () => {
  console.log("Mongo Connected Suucessfully");
});

mongoose.connection.on("error", (err) => {
  console.log("Mongo Connect Error", err);
});

const connectDB = async (url) => {
  await mongoose.connect(url);
};

export default connectDB;
