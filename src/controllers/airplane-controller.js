const {AirplaneService}=require("../services");
const {StatusCodes}=require("http-status-codes");
const {errorResponse,successResponse}=require("../utils/common");
async function createAirplane(req,res){
    console.log("Inside Controller");
    try{
      const response=await AirplaneService.createAirplane({
        modelNumber:req.body.modelNumber,
        capacity:req.body.capacity
    });
    successResponse.data=response;
    // return res.status(StatusCodes.CREATED).json({
    //     success:true,
    //     message:"Successfully created an airplane",
    //     data:response,
    //     error:{}
    // })
    return res.status(StatusCodes.CREATED).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    //    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    //         success:true,
    //         message:"Something went wrong while creating an airplane",
    //         data:{},
    //         error:error
    //     });
    return res.status(error.StatusCode).json(errorResponse);
    }
} 

async function getAirplanes(req,res){
    try{
    const response=await AirplaneService.getAirplanes();
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        // console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 
async function getAirplane(req,res){
    try{
      const response=await AirplaneService.getAirplane(req.params.id);
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 
async function destroyAirplane(req,res){
    try{
      const response=await AirplaneService.destroyAirplane(req.params.id);
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 

async function updateAirplane(req,res){
    try{
    const response=await AirplaneService.updateAirplane(req.params.id,req.body);
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 
module.exports={
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane,
    updateAirplane
};