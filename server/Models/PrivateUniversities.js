const mongoose = require("mongoose");


const privateUniversitySchema = new mongoose.Schema({
    "university" :{
        type : String,
        required : true
    },
    "location" :{
        type : String,
        required : true
    },
    "tier":{
        type : Number,
        required : true
    },
    "course":{
        type : String,
        required : true
    },
    "nirf_ranking":{
        type : Number,
        required : true
    },
    "entrance_exam":{
        type : String,
        required : true
    }
})

const PrivateUniversities = mongoose.model('PrivateUniversity',privateUniversitySchema);

module.exports = PrivateUniversities;