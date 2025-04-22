const contactus = require('../Models/Contactus');

async function Contactus(req, res){
  try{
    const {name, email, message} = req.body;

    const feedBack = new contactus({name, email, message});
    await feedBack.save();
    res.status(200).json({message: "Contact Us Form Saved successfully"});
  }catch(err){
    res.status(500).json({message: "Internal Server Error"});
  }
}

module.exports = Contactus;