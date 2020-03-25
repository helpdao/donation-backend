//require('./config');

const mongoose = require("mongoose");
const app = require("./app");

const mongodb = "mongodb://mongo:27018/portaldb";
const port = 3001;

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
