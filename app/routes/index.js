var express = require('express');
var router = express.Router();
const path = require('path');

const userController = require('../controllers').user;
const profileController = require('../controllers').profile;

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

//Profille Router
router.get('/profiles', profileController.index);

// User Router
router.get('/users', userController.index);
router.get('/user/:id', userController.show);
router.post('/user', userController.store);

module.exports = router;
