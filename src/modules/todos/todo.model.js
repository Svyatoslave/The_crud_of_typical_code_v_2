import mongoose from "mongoose";

import { USER_NAME } from "../users/user.model.js";
import autoIncrementModel from "../../common/mongoose/autoIncrement.js";

const TODO_NAME = "TODO";

const todo = new mongoose.Schema({
  _id: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.Number, ref: USER_NAME },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

autoIncrementModel(todo, TODO_NAME);

export { TODO_NAME };

export default mongoose.model(TODO_NAME, todo);
