const express = require('express');
const AWS = require('aws-sdk');
const multerS3 = require('multer-s3');
const multer = require('multer');

const router = express.Router();

router.get('/example' , example)
router.post('/example' , example)

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_KEY_BUCKET,
    secretAccessKey: process.env.AWS_SECRET_BUCKET
});

var upload = multer({
    storage: multerS3({
          s3: s3,
          bucket: process.env.AWS_S3BUCKET,
          key: function (req, file, cb) {
                var orgName = file.originalname;
                let indexofdot = orgName.lastIndexOf('.');
                console.log("ori" ,file.originalname)
                let str = orgName.slice(indexofdot);
                cb(null, Date.now().toString() + str)
          },
          acl: 'public-read'
    })
});

router.post('/upload' , upload.single("file") , Example);

module.exports = router;