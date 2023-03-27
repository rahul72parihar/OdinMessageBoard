var express = require("express");

var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },

  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
// ADD NEW MESSAGE
router.post("/new", function (req, res, next) {
  const message = req.body.text;
  const messageUser = req.body.user;
  messages.push({ text: message, user: messageUser, added: new Date() });
  res.redirect("/");
});
module.exports = router;
