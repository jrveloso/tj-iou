const express = require('express')
const router = express.Router()
const iouController = require('../controllers/iouController');

router.get('/', iouController.getIOUs)
router.post('/create', iouController.postIOU)
router.put('/pay', iouController.payIOU)

module.exports = router