const {AirplaneRepository}=require("../repositories");
const airplaneRepository=new AirplaneRepository();

async function createAirplane(data){
    console.log("Inside Service");
    try{
        const Airplane=await airplaneRepository.create(data);
        return Airplane;
    }catch(e){
        throw e;
    }
}
module.exports={createAirplane};