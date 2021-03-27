const express = require("express");
const bodyParser = require("body-parser");
// const ejs = require("ejs");

const composeContent = "Provide the required information in the fields below.";

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

let posts = [];

app.get("/", (req, res) => {
  res.render("home", { posts: posts });
});

app.get("/compose", (req, res) => {
  res.render("compose", { composeContent: composeContent });
});

app.post("/compose", (req, res) => {
  const post = {
    date: req.body.postDate,
    carrier: req.body.postCarrier,
    fltNo: req.body.postFlight,
    eta: req.body.postETA,
    etd: req.body.postETD,
    notes: req.body.postNotes,
  };
  posts.push(post);
  res.redirect("/compose");
});

app.listen(3000, (req, res) => {
  console.log("Server up on port 3000");
});
