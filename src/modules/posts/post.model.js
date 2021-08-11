import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";
import { USER_NAME } from "../modelsName.js";
import Comment from "../comments/comment.model.js";

const post = new mongoose.Schema({
  _id: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.Number, ref: USER_NAME },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

autoIncrementModel(post, "Post");

post.pre("deleteMany", async function (next) {
  const { _conditions: document } = this;
  await Comment.deleteMany({ user: document._id });
  next();
});

post.pre("deleteOne", async function (next) {
  const { _conditions: document } = this;
  await Comment.deleteMany({ post: document._id });
  next();
});

export default mongoose.model("Post", post);
