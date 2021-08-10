import mongoose from "mongoose";

import { USER_NAME } from "../users/user.model.js";
import autoIncrementModel from "../../common/mongoose/autoIncrement.js";

const POST_NAME = "post";

const post = new mongoose.Schema({
  _id: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.Number, ref: USER_NAME },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

autoIncrementModel(post, POST_NAME);

export { POST_NAME };

export default mongoose.model(POST_NAME, post);
