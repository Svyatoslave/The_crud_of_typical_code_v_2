import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";
import Album from "../albums/album.model.js";
import Post from "../posts/post.model.js";
import Todo from "../todos/todo.model.js";

const user = new mongoose.Schema({
  _id: { type: Number, required: false },
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  address: {
    street: { type: String, required: true },
    suite: { type: String, required: true },
    city: { type: String, required: true },
    zipcode: { type: String, required: true },
    geo: {
      lat: { type: String, required: true },
      lng: { type: String, required: true },
    },
  },
  phone: { type: String, required: true },
  website: { type: String, required: true },
  company: {
    name: { type: String, required: true },
    catchPhrase: { type: String, required: true },
    bs: { type: String, required: true },
  },
});

autoIncrementModel(user, "User");

user.pre("deleteOne", async function (next) {
  const { _conditions: document } = this;
  await Album.deleteMany({ user: document._id });
  await Post.deleteMany({ user: document._id });
  await Todo.deleteMany({ user: document._id });
  next();
});

export default mongoose.model("User", user);
