const {logger}=require("../config");
const {StatusCodes}=require("http-status-codes");
const { AppError } = require("../utils");
class crudRepository{
    constructor(model){
       this.model=model;
    }
    async create(data){
        // console.log("Inside Repository");
        // console.log("db creation");
        // try{
            const response=await this.model.create(data);
            return response;
        // }
        // catch(e){
        //     logger.error("Something went wrong in the Crud Repo : create");
        //     throw e;
        // }


    }
    async destroy(id){
            const response =await this.model.destroy({
                where:{
                    id:id
                }
            });
            if(!response){
                throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND)
            }
            return response;

        
    }
    async get(data){
            const response=await this.model.findByPk(data);
            if(!response){
                throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND);
            }
            console.log(response);
            return response;
        
    }
    async getAll(data){
        
            const response=await this.model.findAll();
            return response;
        
    }
    async update(id,data){
        
            const response=await this.model.update(data,{
               where:{
                id:id
               }
            });
            console.log(response);
            if(response[0]==0){
                throw new AppError("Not able to find the resource",StatusCodes.NOT_FOUND);
            }
            return response;
        
    }
}

module.exports=crudRepository;
