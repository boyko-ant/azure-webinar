var express = require('express');
var router = express.Router();

var nconf = require("nconf");

nconf
  .env()
  .defaults({
    name: "Azure Webinar"
  });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: nconf.get("name") });
});

module.exports = router;
