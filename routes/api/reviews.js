const express = require('express');
const multer =require('multer');
const multerS3 = require("multer-s3");
const dotenv =require ('dotenv')
const aws =require('aws-sdk') 
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

const s3 = new aws.S3({
  region,
  accessKeyId,
  secretAccessKey
})

const upload = (bucketName) =>
  multer({
    storage: multerS3({
      s3,
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
  
    console.log(req.body);
    console.log(req.file.location);
    
   const newReview =new Review();
   newReview.name=req.body.name;
   newReview.comment=req.body.comment;
   newReview.numStar=req.body.numStar;
   newReview.reviewerImage=req.file.location;
   
   try {
        await  newReview.save().then(review=>res.json(review));   
   
  } catch (error) {
      console.log(error)
     }
});

module.exports =router;