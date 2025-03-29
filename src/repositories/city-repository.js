
const {AppError}=require("../utils");
const crudRepository=require("./crud-repository");
const {city}=require("../models");
class cityRepository extends crudRepository{
    constructor(){
        super(city);
    }
};
module.exports=cityRepository;