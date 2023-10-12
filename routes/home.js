const express = require("express");
let router = express.Router();



router.get('/', function (req, res) {
    res.render('pages/home'); // Check that the view path matches the file structure in your project.
});
module.exports = router;

