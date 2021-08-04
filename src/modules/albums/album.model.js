import mongoose from "mongoose";
import User from "../users/user.model.js";

const album = new mongoose.Schema({
  _id: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.Number, ref: "User" },
  title: { type: String, required: true },
});

export default mongoose.model("Album", album);
