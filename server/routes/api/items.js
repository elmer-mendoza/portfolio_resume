const express = require('express');
const router = express.Router();

// Item Model

const Item =require('../../models/Items');

// @route GET api/items
// @desc GET ALL Items
// @acess Public

router.get('/',(req,res) =>{
    Item.find()
        .then(items => res.json(items));
});
// @route POST api/items
// @desc Create ALL Items
// @acess Public

router.post('/',(req,res) =>{
   const newItem =new Item({
       name: req.body.name,
       comment: req.body.comment,
       numStar: req.body.numStar,
       profilePic: req.body.profilePic
   });
   newItem.save().then(item=>res.json(item));
});

module.exports =router;