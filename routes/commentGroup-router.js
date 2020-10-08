const express = require('express');
const commentCtrl = require('../controllers/commentGroup-ctrl');

const router = express.Router();

router.post('/comment', commentCtrl.comments)


module.exports = router;