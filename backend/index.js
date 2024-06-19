import express from "express";
import mongoose from "mongoose";

import { mongoDBURL, PORT } from "./config.js";
import bookRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  return res.status(234).send("Welcome to codeandrender bookstore");
});

app.use("/books", bookRoute);

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
