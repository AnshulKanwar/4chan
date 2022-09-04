import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

const PORT = 5500;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/posts", postRoutes);

const CONNECTION_URL = "mongodb://localhost:27017";
mongoose.connect(CONNECTION_URL);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
