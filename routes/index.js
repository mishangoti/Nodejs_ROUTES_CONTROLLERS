var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.redirect('/catalog');
});

router.get('/task', task.list);


module.exports = router;
