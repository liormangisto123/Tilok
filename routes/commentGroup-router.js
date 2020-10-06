const express = require('express');
const commentCtrl = require('../controllers/commentGroup-ctrl');

const router = express.Router();

router.post('api/comment', commentCtrl.comments)


module.exports = router;