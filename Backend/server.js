const express = require("express");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const connectdb = require("./Config/db");
const color = require("colors");
const userRoutes = require("./Routes/userRoutes");
const {
  notFound,
  errorHandler,
} = require("./middlerequest/errormiddlehandler");
dotenv.config();

connectdb();
app.use(express.json()); //to accept JSON data

app.use(
  cors({
    origin: "*",
  })
);

app.use("/api/user", userRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server starts on port ${PORT}`.yellow.bold)
);
