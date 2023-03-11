const express = require('express');
const router = express.Router();
const homeController=require('../controller/homeController');

router.get('/',homeController.homePage);
router.get('/:id',homeController.getInfo);
router.get('/:id/:name',homeController.saveInfo);
router.get('/del/user/:id',homeController.delInfo);
router.get('/up/user/:id/:name',homeController.updateInfo);
module.exports=router;