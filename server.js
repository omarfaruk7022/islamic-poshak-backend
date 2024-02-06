import app from "./app.js";
import mongoose from "mongoose";
import config from "./src/config/index.js";
import color from "colors";

async function server() {
  try {
    await mongoose.connect(process.env.DATABASE_URL_MAIN).then(() => {
      console.log("Database connection successful".cyan.bold);
    });

    app.listen(config.port, () => {
      console.log(`App is running on port ${config.port}`.yellow.bold);
    });
  } catch (err) {
    console.log(err);
  }
}

server().catch((err) => console.log(err));
