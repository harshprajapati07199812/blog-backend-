const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const blogRoutes = require("./router/blogsRoutes");

dotenv.config({
  path: "./config.env",
});
const app = express();
app.use(express.json());

app.use("/blogs", blogRoutes);

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
  console.log("listen to port");
});
