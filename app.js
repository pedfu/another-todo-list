const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));  // torna a pasta public visivel para o express
app.set('view engine', 'ejs');

const items = [];
const workItems = [];

app.get("/about", function(req, res) {
  res.render("about");  // nao precisa especificar o caminho, ele automaticamente procura na pasta views
});

app.get("/work", function(req, res) {
  res.render("list", {listTitle: "Work List", items: workItems})  // nao precisa especificar o caminho, ele automaticamente procura na pasta views
});

app.post("/work", function(req, res) {
  const item = req.body.newItem;

  if ( req.body.list === "Work" ) {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/", function(req, res) {
  const dayS = date.getDate();
  res.render("list", {listTitle: dayS, items: items})  // nao precisa especificar o caminho, ele automaticamente procura na pasta views
});

app.post("/", (req, res) => {
  const item = req.body.newItem;

  if ( req.body.list === "Work" ) {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, function() {
  console.log("started");
});
