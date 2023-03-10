const express = require('express');
const router = express.Router();
const formController=require('../controller/formController');

router.get('/',formController.showForm);
router.get('/save',formController.saveInfo);

module.exports=router;