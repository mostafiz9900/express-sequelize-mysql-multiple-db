var express = require('express');
var router = express.Router();
const userController=require('../controllers/user.controller');

/* GET users listing. */
router.get('/', userController.getAllUser);
// router.get('/get/:user_id', userController.getOneByPk);
router.get('/get/email', userController.getOneByEmail);
router.get('/get/username/:username', userController.getAllByUserName);

module.exports = router;
