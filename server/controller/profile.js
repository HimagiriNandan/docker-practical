const User = require('../Models/userschema.js');


async function userprofile(req,res){
    if (req.body.user_id) {
        const user = await User.findById(req.body.user_id);
        
        return res.status(200).json({
          data : user,
        });
      } 
    else {
        return res.status(401).json({
          message: "User not logged in",
        });
    }
}

module.exports = userprofile;
