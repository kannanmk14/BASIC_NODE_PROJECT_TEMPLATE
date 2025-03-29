const {cityService}=require("../services");
const {StatusCodes}=require("http-status-codes");
const {errorResponse,successResponse}=require("../utils/common");
async function createCity(req,res){
    try{
      const response=await cityService.createCity({
       name:req.body.name
    });
    successResponse.data=response;
    return res.status(StatusCodes.CREATED).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 

module.exports={
createCity
};