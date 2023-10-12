const express = require("express");
let router = express.Router();


router.get("/", (req, res) => {
    console.log("inside signin.js GET");
    res.render("pages/signin");

})

module.exports = router;
