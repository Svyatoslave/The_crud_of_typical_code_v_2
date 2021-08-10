import mongoose from "mongoose";
import autoIncrementModel from "../../common/mongoose/autoIncrement.js";

const USER_NAME = "User";

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

autoIncrementModel(user, USER_NAME);

// user.pre("deleteOne", (...args) => {
//   console.log("Remove user");
//   console.log(args);
// });

export { USER_NAME };

export default mongoose.model(USER_NAME, user);
