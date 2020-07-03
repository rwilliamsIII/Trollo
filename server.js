const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./models");
const mongoose = require("mongoose");





app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/trollotodos",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.use(require("./routes/api-routes"))
// require("./routes/html-routes.js")(app);

    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
