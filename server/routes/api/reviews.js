const express = require('express');
const multer =require('multer');
const multerS3 = require("multer-s3");
const dotenv =require ('dotenv')
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3')
const router = express.Router();

dotenv.config()

// Item Model

const Review =require('../../models/Reviews');

// @route GET api/items
// @desc GET ALL Items
// @acess Public

router.get('/',(req,res) =>{
    Review.find()
        .then(reviews => res.json(reviews));
});
// @route POST api/items
// @desc Create ALL Items
// @acess Public

// const fileStorageEngine = multer.diskStorage({
//     destination: (req,file,cb)=>{
//       cb(null,'/')
// //       cb(null,'./client/src/Components/images')
//     },
//     filename: (req,file,cb) =>{
//       cb(null,Date.now()+'--'+file.originalname)
//     }
//   })
  
const region = "us-east-2"
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});


  const upload = (bucketName) =>
    multer({
      storage: multerS3({
        s3: s3Client,
        bucket: bucketName,
        metadata: function (req, file, cb) {
          cb(null, { fieldName: file.fieldname });
        },
        key: function (req, file, cb) {
          cb(null, Date.now()+'--'+file.originalname);
        },
      }),
  });


router.post('/',upload("resumerevieweravatar").single('reviewerImage'),async(req,res) =>{
    
   const newReview =new Review();
   newReview.name=req.body.name;
   newReview.comment=req.body.comment;
   newReview.numStar=req.body.numStar;
   newReview.reviewerImage=req.file.location;
   console.log("new",newReview)
   try {
        await  newReview.save().then(review=>res.json(review));   
   
  } catch (error) {
      console.log(error)
     }
});

module.exports =router;