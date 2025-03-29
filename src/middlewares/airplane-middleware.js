const {StatusCodes}=require("http-status-codes");
const {sucessResponse,errorResponse}=require("../utils/common");
const {AppError}=require("../utils");
function Airplanemiddleware(req,res,next){
    if(!req.body.modelNumber){
      errorResponse.message="Something went wrong while creating Airplane";
      // errorResponse.error={explaination:"Model Number not found in the oncoming request"}
      // return res.status(StatusCodes.BAD_REQUEST).json({
      //   success:true,
      //   message:"Something went wrong while creating Airplane",
      //   data:{},
      //   error:{explaination:"Model Number not found in the oncoming request"}
      // });
      errorResponse.error=new AppError(["Model Number not found in the oncoming request"],StatusCodes.BAD_REQUEST);
      return res.status(StatusCodes.BAD_REQUEST).json(errorResponse);
    }
    next();
}

module.exports={
    Airplanemiddleware,
}