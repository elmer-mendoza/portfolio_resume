const mongoose=require('mongoose');
const Schema = mongoose.Schema;

// Create Schema

const ItemSchema = new Schema({
    numStar: {
        type: Number
    },
    comment: {
        type: String,
    },
    name: {
        type: String,
     },
     selectFile: {
         type: String,
     },
     date: {
         type: Date,
         default: Date.now
     }
});

module.exports=Item=mongoose.model('item',ItemSchema);