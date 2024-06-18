import express from "express";
import mongoose from "mongoose";

import { mongoDBURL, PORT } from "./config.js";

const app = express();

app.get("/", (req, res) => {
  return res.status(234).send("Welcome codeandrender");
});

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to the database");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
