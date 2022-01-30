const express = require('express');
const multer =require('multer');
const router = express.Router();

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
const fileStorageEngine = multer.diskStorage({
    destination: (req,file,cb)=>{
      cb(null,'./client/src/Components/images')
    },
    filename: (req,file,cb) => {
      cb(null,Date.now()+'--'+file.originalname)
    }
  })
  
const upload = multer({storage:fileStorageEngine});

router.post('/',upload.single('reviewerImage'),async(req,res) =>{
  
    console.log(req.body);
    console.log(req.file);
    
   const newReview =new Review();
   newReview.name=req.body.name;
   newReview.comment=req.body.comment;
   newReview.numStar=req.body.numStar;
   newReview.reviewerImage=req.file.filename;
   console.log("my"+ newReview)
   try {
        await  newReview.save().then(review=>res.json(review));   
   
  } catch (error) {
      console.log(error)
     }
});

module.exports =router;