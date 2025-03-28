const {StatusCodes}=require("http-status-codes");
function Airplanemiddleware(req,res,next){
    if(!req.body.modelNumber){
      return res.status(StatusCodes.BAD_REQUEST).json({
        success:true,
        message:"Something went wrong while creating Airplane",
        data:{},
        error:{explaination:"Model Number not found in the oncoming request"}
      });
    }
}

module.exports={
    Airplanemiddleware
}