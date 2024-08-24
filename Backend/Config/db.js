require("dotenv").config();

const mongoose = require("mongoose");

const url =
  "mongodb+srv://itsshashwat02:tRcuXNYA3IwiDGwu@database.wdymwui.mongodb.net/?retryWrites=true&w=majority&appName=database";
const connectdb = async () => {
  try {
    const conn = await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit(1);
  }
};

module.exports = connectdb;
