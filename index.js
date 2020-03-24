//require('./config');

const mongoose = require("mongoose");
const app = require("./app");

const mongodb = process.env.MONGODB || "mongodb://localhost:27017/portaldb";
const port = process.env.PORT || 3001;

mongoose.set("useCreateIndex", true);

mongoose.connect(
  mongodb,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) console.log(`ERROR: connecting to Database. ${err}`);
    else
      app.listen(
        port,
        console.log(`portaldb started on: http://localhost:${port}`)
      );
  }
);
