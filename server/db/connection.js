const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://girishhbora:dsk67NEJu4yIQdun@cluster0.r7ysf.mongodb.net/trendyz?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected to database."))
  .catch((err) => {
    console.log(err);
  });
