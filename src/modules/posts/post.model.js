import mongoose from "mongoose";
import User from "../users/user.model.js";

const post = new mongoose.Schema({
  _id: { type: Number, required: true },
  user: { type: mongoose.Schema.Types.Number, ref: "User" },
  title: { type: String, required: true },
  body: { type: String, required: true },
});
export default mongoose.model("Post", post);
