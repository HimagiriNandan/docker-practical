const MockTestSchema = require("../Models/MockTestSchema");

async function mockTestData(req,res){
    const {id} = req.body;
    console.log(id);
    const test = await MockTestSchema.findById(id);
    if(!test){
        res.status(404).send("Not found");
    }
    // console.log(test);
    res.status(200).send(test);
};

module.exports = mockTestData;

