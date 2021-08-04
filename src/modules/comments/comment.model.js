import mongoose from "mongoose";
import Post from "../posts/post.model.js";
import User from "../users/user.model.js";

const comment = new mongoose.Schema({
  _id: { type: Number, required: true },
  postId: { type: mongoose.Schema.Types.Number, ref: "Post" },
  name: { type: String, required: true, ref: "User" },
  email: { type: String, required: true, ref: "User" },
  body: { type: String, required: true },
});
export default mongoose.model("Comment", comment);
