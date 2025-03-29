const {AirportRepository}=require("../repositories");
const airportRepository=new AirportRepository();
const {sucessResponse,errorResponse}=require("../utils/common");
const {AppError}=require("../utils");
const {StatusCodes}=require("http-status-codes");

async function createAirport(data){
    console.log("Inside Service");
    try{
        const Airport=await airportRepository.create(data);
        return Airport;
    }catch(e){
        if(e.name=="SequelizeValidationError"){
            explaination=[];
            e.errors.forEach((elements) => {
                explaination.push(elements.message);
            });
            console.log(explaination);
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new Airport object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

/**
 * 
 * req body :{}
 * get req
 */
async function getAirports(){
    try{
        const Airport=await airportRepository.getAll();
        return Airport;
    }catch(e){
        throw new AppError('Cannot fetch data of all the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
/**
 * 
 * req params id
 *  req
 */
async function getAirport(id){
    try{
        const Airport=await airportRepository.get(id);
        return Airport;
    }catch(e){
        if(e.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError("The Airport you request is not present",e.StatusCode)
        }
        throw new AppError('Cannot fetch data of the Airport',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

/**
 * 
 * req params id
 * 
 * delete req
 */
async function destroyAirport(id){
    try{
        const Airport=await airportRepository.destroy(id);
        return Airport;
    }catch(e){
        if(e.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError("The Airport you request is not present",e.StatusCode)
        }
        throw new AppError('The Airport you requested is not present',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(id,data){
    try{
        const Airport=await airportRepository.update(id,data);
        return Airport;
    }catch(e){
        if(e.StatusCodes==StatusCodes.NOT_FOUND){
            throw new AppError("The Airport you request is not present",e.StatusCode)
        }
        throw new AppError('The Airport you requested is not present',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports={createAirport,getAirports,getAirport,destroyAirport,updateAirport};