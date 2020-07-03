const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const mysql = require("mysql");
const user = require("./models/user");


const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "bear",
    database: "trollo_db"
  });


  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}


// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
// });

require("./routes/api-routes.js")(app);
// require("./routes/html-routes.js")(app);




app.listen(PORT, function(){
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
})