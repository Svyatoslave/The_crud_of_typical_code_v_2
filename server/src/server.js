import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import routing from "./allRouters";
import initialize from "./dbinitilize";
import { PORT, DB_URL } from "./constants";

async function bootstrap() {
  try {
    const app = express();

    app.use(cors());
    app.use(express.json());
    routing(app);

    await mongoose.connect(DB_URL, {
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
