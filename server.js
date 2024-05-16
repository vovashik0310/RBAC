require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

const authRouter = require("./routes/auth");

app.use(express.json());
app.use("/auth", authRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
