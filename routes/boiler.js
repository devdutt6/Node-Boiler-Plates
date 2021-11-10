const express = require('express');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

const router = express.Router();

router.get('/example' , example)
router.post('/example' , example)

module.exports = router;