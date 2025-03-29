
const {cityRepository}=require("../repositories");
const CityRepository=new cityRepository();
const {sucessResponse,errorResponse}=require("../utils/common");
const {AppError}=require("../utils");
const {StatusCodes}=require("http-status-codes");

async function createCity(data){
    try{
        const City=await CityRepository.create(data);
        return City;
    }catch(e){
        console.log(e);
        if(e.name=="SequelizeUniqueConstraintError"){
            explaination=[];
            e.errors.forEach((elements) => {
                explaination.push(elements.message);
            });
            console.log(explaination);
            throw new AppError(explaination,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new city object',StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports={createCity};