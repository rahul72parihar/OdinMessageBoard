var express = require("express");

var router = express.Router();

const messages = [
  {
    text: "Hi there! What a terrific website, I wish I could code like this",
    user: "Elon",
    added: "Mon Mar 27 2023 11:44:02 GMT+0530 (India Standard Time)",
  },

  {
    text: "Wow!!! Talented",
    user: "Mark",
    added: "Mon Mar 27 2023 11:44:02 GMT+0530 (India Standard Time)",
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
