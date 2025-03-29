const {AirplaneRepository}=require("../repositories");
const airplaneRepository=new AirplaneRepository();
const {sucessResponse,errorResponse}=require("../utils/common");
const {AppError}=require("../utils");
const {StatusCodes}=require("http-status-codes");

async function createAirplane(data){
    console.log("Inside Service");
    try{
        const Airplane=await airplaneRepository.create(data);
        return Airplane;
    }catch(e){
        if(e.name=="SequelizeValidationError"){
            explaination=[];
            e.errors.forEach((elements) => {
                explaination.push(elements.message);
            });
            console.log(explaination);
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airplane object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

/**
 * 
 * req body :{}
 * get req
 */
async function getAirplanes(){
    try{
        const Airplane=await airplaneRepository.getAll();
        return Airplane;
    }catch(e){
        throw new AppError('Cannot fetch data of all the Airplanes',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
/**
 * 
 * req params id
 *  req
 */
async function getAirplane(id){
    try{
        const Airplane=await airplaneRepository.get(id);
        return Airplane;
    }catch(e){
        if(e.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError("The Airplane you request is not present",e.StatusCode)
        }
        throw new AppError('Cannot fetch data of the Airplane',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

/**
 * 
 * req params id
 * 
 * delete req
 */
async function destroyAirplane(id){
    try{
        const Airplane=await airplaneRepository.destroy(id);
        return Airplane;
    }catch(e){
        if(e.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError("The Airplane you request is not present",e.StatusCode)
        }
        throw new AppError('The Airplane you requested is not present',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirplane(id,data){
    try{
        const Airplane=await airplaneRepository.update(id,data);
        return Airplane;
    }catch(e){
        if(e.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError("The Airplane you request is not present",e.StatusCode)
        }
        throw new AppError('The Airplane you requested is not present',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports={createAirplane,getAirplanes,getAirplane,destroyAirplane,updateAirplane};