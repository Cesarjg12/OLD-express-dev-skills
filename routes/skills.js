var express = require('express');
var router = express.Router();

const skillsCtrl = require('../controllers/skills')


router.get('/', skillsCtrl.index);

router.get('/id', skillsCtrl.show);
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;