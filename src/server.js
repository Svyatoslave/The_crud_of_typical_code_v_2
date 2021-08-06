import express from "express";
import mongoose from "mongoose";
import routing from "./allRouters.js";
import initialize from "./dbinitilize.js";
import { PORT, DB_URL } from "./constants.js";

const app = express();

app.use(express.json());
routing(app);

async function bootstrap() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: false,
    });
    await initialize.initializeAll();
    console.log("initializebd - complete");
    app.listen(PORT, () => console.log("SERVER STARTED ON PORT " + PORT));
  } catch (e) {
    console.log(e);
  }
}

bootstrap();
