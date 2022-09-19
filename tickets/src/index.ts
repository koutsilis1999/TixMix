import { app } from "./app";
import mongoose from "mongoose";

const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error("JWT_KEY must be defined!");
  }
  try {
    await mongoose.connect("mongodb://tickets-mongo-srv:27017/tickets");
    console.log("Connected to MongoDb");
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log("Listening on port 3000!");
  });
};

start();