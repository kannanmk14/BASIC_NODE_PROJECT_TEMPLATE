const {AirplaneService}=require("../services");
const {StatusCodes}=require("http-status-codes");
async function createAirplane(req,res){
    console.log("Inside Controller");
    try{
      const response=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity
    });
    return res.status(StatusCodes.CREATED).json({
        success:true,
        messagge:"Successfully created an airplane",
        data:response,
        error:{}
    })
    }
    catch(error){
       return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:true,
            messagge:"Something went wrong while creating an airplane",
            data:{},
            error:error
        });
    }
} 
module.exports={
    createAirplane
}