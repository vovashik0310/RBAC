require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

const authRouter = require("./routes/auth");
const recordRouter = require("./routes/record");

app.use(express.json());
app.use("/auth", authRouter);
app.use("/api", recordRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
