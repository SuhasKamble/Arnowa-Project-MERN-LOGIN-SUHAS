const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://suhas:suhas@cluster0.divzi.mongodb.net/Arnowava-Auth?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("MongoDB is connected...");
  })
  .catch((e) => {
    console.log("MongoDB is not connected...");
  });
