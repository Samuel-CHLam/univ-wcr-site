/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const googleUser = require("./models/googleUser")
const User = require("./models/user");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

// sanitise html components
const sanitizeHtml = require('sanitize-html-react')

// login api
router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }
  res.send(req.user);
});

// event api

// post api

// student union api

// user api
router.get("/user", (req, res) => {
  // console.log(`Succesfully received id: ${req.query.userId}, now find information.`)
  User.findOne({googleid: req.query.googleid}).then((user) => {
    res.send(user)
  });
});

router.post("/basicuserupdate", (req,res) => {
  User.updateOne({googleid: req.body.googleid}, {
    $set : {
      "name": req.body.name,
      "wcrRole": req.body.wcrRole,
      "subject": req.body.subject,
      "joinedUnivSince": req.body.joinedUnivSince,
      "facebookLink": req.body.facebookLink,
      "twitterLink": req.body.twitterLink,
      "linkedInLink": req.body.linkedInLink
      }
    }
  ).then(
    (page) => {res.send(page)}
  ).catch(
    (err) => {console.log(err)}
  );
});

router.post("/userpersonalintroupdate", (req,res) => {
  User.updateOne({googleid: req.body.googleid}, {
      $set : {"personalIntro": sanitizeHtml(req.body.personalIntro)}
    }
  ).then(
    (page) => {res.send(page)}
  ).catch(
    (err) => {console.log(err)}
  );
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
