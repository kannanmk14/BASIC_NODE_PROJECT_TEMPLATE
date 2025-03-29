const {AirportService}=require("../services");
const {StatusCodes}=require("http-status-codes");
const {errorResponse,successResponse}=require("../utils/common");
async function createAirport(req,res){
    console.log("Inside Controller");
    try{
      const response=await AirportService.createAirport({
        name:req.body.name,
        code:req.body.code,
        cityId:req.body.cityId
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

async function getAirports(req,res){
    try{
    const response=await AirportService.getAirports();
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        // console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 
async function getAirport(req,res){
    try{
      const response=await AirportService.getAirport(req.params.id);
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 
async function destroyAirport(req,res){
    try{
      const response=await AirportService.destroyAirport(req.params.id);
    successResponse.data=response;
    return res.status(StatusCodes.OK).json(successResponse);
    }
    catch(error){
        console.log(error);
        errorResponse.error=error
    return res.status(error.StatusCode).json(errorResponse);
    }
} 

async function updateAirport(req,res){
    try{
    const response=await AirportService.updateAirport(req.params.id,req.body);
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
    createAirport,
    getAirports,
    getAirport,
    destroyAirport,
    updateAirport
};