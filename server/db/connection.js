const mongoose = require("mongoose");

mongoose
  .connect(
    process.env.MONGO_URL
  )
  .then(() => console.log("Connected to database."))
  .catch((err) => {
    console.log(err);
  });
