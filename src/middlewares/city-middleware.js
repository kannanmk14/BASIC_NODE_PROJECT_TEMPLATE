
const {StatusCodes}=require("http-status-codes");
const {sucessResponse,errorResponse}=require("../utils/common");
const {AppError}=require("../utils");
function citymiddleware(req,res,next){
    if(!req.body.name){
      errorResponse.message="Something went wrong while creating City";
      errorResponse.error=new AppError(["name not found in the oncoming request"],StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
  }

  module.exports={
    citymiddleware
  }