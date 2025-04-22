const User  = require('../Models/userschema');

async function updateProf(req,res){
    const {pic,id}= req.body;
    console.log(pic);

    const user = await User.findById(id);

    if(!user){
        console.log("User not found");
        return res.status(404).json({error:true,message: "User not found"});
    }
    user.image = pic;

    await user.save();
    res.status(200).json({error:false,message:"User updated successfully",data:user});
};

module.exports = updateProf;

