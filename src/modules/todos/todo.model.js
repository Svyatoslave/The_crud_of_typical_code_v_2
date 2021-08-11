import mongoose from "mongoose";

import autoIncrementModel from "../../common/mongoose/autoIncrement.js";
import { USER_NAME } from "../modelsName.js";

const todo = new mongoose.Schema({
  _id: { type: Number, required: false },
  user: { type: mongoose.Schema.Types.Number, ref: USER_NAME },
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

autoIncrementModel(todo, "Todo");

export default mongoose.model("Todo", todo);
