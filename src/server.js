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
    const connection = await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      autoIndex: false,
    });

    await initialize.initializeAll();

    await app.listen(PORT);

    console.log(
      "\x1b[32m%s\x1b[0m",
      `\n  SERVER STARTED ON PORT ${PORT} !!!\n`
    );
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
