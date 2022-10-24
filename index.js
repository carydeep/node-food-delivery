const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const orderRoute = require("./routes/order");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.URL_CONNECT_DB, () => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  cors({
    // origin: "https://web-learning-front.vercel.app",
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api", orderRoute);

app.listen(process.env.PORT || 6969, () => {
  console.log("Server is running");
});
