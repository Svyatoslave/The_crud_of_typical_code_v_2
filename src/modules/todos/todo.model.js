import mongoose from "mongoose";
import User from "../users/user.model.js";

const todo = new mongoose.Schema({
  _id: { type: Number, required: true },
  userId: { type: mongoose.Schema.Types.Number, ref: "User" },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});
export default mongoose.model("Todo", todo);
