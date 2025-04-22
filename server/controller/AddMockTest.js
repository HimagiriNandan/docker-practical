const MockTest = require('../Models/MockTestSchema');


const AddMockTest = async (req,res) => {
    if(!req.body){
        res.status(400).send({message:"Content can not be empty"});
        return;
    }
    const newMockTest = new MockTest(req.body);
    try{
        await newMockTest.save();
        res.status(201).send(newMockTest);
    }catch(err){
        res.status(500).send({message:err.message || "Some error occurred while creating the MockTest."});
    }
}

module.exports = AddMockTest;