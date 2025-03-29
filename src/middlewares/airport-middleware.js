const {StatusCodes}=require("http-status-codes");
const {sucessResponse,errorResponse}=require("../utils/common");
const {AppError}=require("../utils");

function Airportmiddleware(req,res,next){
    if(!req.body.name){
      errorResponse.message="Something went wrong while creating Airport";
      errorResponse.error=new AppError(["name not found in the oncoming request"],StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.code){
        errorResponse.message="Something went wrong while creating Airport";
        errorResponse.error=new AppError(["code not found in the oncoming request"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    if(!req.body.cityId){
        errorResponse.message="Something went wrong while creating Airport";
        errorResponse.error=new AppError(["cityId not found in the oncoming request"],StatusCodes.BAD_REQUEST);
        return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports={
    Airportmiddleware,
}