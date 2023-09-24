const userModel = require('../model/user')



// this section is used of registration of user
module.exports.register = async (req,res) =>{
    console.log(req.body);
    try{
        let result = await userModel.create(req.body);
        res.send({status:'User Registeration Successfull',data:{id:result.dataValues.id}});
    }catch(error){
        res.send({status:'error',message:'User Registration failed'});
    }
    
};

// this section is used for getting data 
module.exports.get = async (req,res) =>{
    try{
        let Data = await userModel.findbypk(req.body.id);
        res.send({status:'User Data is found',data:Data});
    }catch (error) {
        res.send({status:'error',message:'User is Not Found'});
    }
     
};



//this section is used for Updating data
module.exports.update = async (req,res) =>{
    try {
        let user = await userModel.findbypk(req.body.id);
        user.password = req.body.password;
        await user.save();
        res.send({status:'Success',message:"User Data is updated"});
    } catch (error) {
        res.send({status:'error',message:'User Data is not updated'});
    }
     
    
};


//this section is used for Deleting  data
module.exports.delete = async (req,res) =>{
    try{
        let user = await userModel.findbypk(req.body);
        await user.destroy();
        res.send({status:'Success',message:"User data is deleted"});
    } catch(error){
        res.send({status:'error',message:'User data is not  deleted'});
    }
};