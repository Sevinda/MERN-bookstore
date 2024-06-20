import cors from "cors";
import express from "express";
import mongoose from "mongoose";

import { mongoDBURL, PORT } from "./config.js";
import bookRoute from "./routes/booksRoute.js";

const app = express();
app.use(express.json());

// THERE ARE 2 METHODS
// METHOD 1, ALLOWS ALL OF THE ORIGINS
app.use(cors())

// METHOD 2, ONLY ALLOW THE SPECIFIED ORIGINS
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

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
