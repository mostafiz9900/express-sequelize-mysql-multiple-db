const User =require('../models/user');

exports.getAllUser = async (req,res) => {
   try {
    const userData = await User.findAll({});
    const userInfo = JSON.parse(JSON.stringify(userData));
     res.json(userInfo);
   } catch (error) {
       console.log(error);
   }

    // res.send('data send ');
};
exports.getOneByPk = async (req,res) => {
    try {
     const userData = await User.findByPk({where:{user_id:req.params.user_id}});
     const userInfo = JSON.parse(JSON.stringify(userData));
      res.json(userInfo);
    } catch (error) {
        console.log(error);
    }
 
     // res.send('data send ');
 };
 exports.getOneByEmail = async (req,res) => {
    try {
     const userData = await User.findOne({where:{email:'mostafiz9900@gmail.com'}});
     const userInfo = JSON.parse(JSON.stringify(userData));
      res.json(userInfo);
    } catch (error) {
        console.log(error);
    }
 
     // res.send('data send ');
 };
 exports.getAllByUserName = async (req,res) => {
    try {
     const userData = await User.findAll({where:{username:req.params.username}});
     const userInfo = JSON.parse(JSON.stringify(userData));
      res.json(userInfo);
    } catch (error) {
        console.log(error);
    }
 
     // res.send('data send ');
 };