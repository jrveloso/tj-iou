const express = require('express')
const router = express.Router()
const iouController = require('../controllers/iouController');
const { ensureAuth } = require('../middleware/auth');


router.get('/', iouController.getIOUs)
router.post('/create', iouController.postIOU)
router.delete('/delete', iouController.deleteIOU)

module.exports = router