const {logger}=require("../config");
class crudRepository{
    constructor(model){
       this.model=model;
    }
    async create(data){
        console.log("Inside Repository");
        console.log("db creation");
        try{
            const response=await this.model.create(data);
            return response;
        }catch(e){
            logger.error("Something went wrong in the Crud Repo : create");
            throw e;
        }


    }
    async destroy(data){
        try{
            const response =await this.model.destroy({
                where:{
                    id:data
                }
            })
        }catch(e){
            logger.error("Something went wrong in the Crud Repo : destroy");
            throw e;
        }
    }
    async get(data){
        try{
            const response=await this.model.findByPk(data);
            return response;
        }catch(e){
            logger.error("Something went wrong in the Crud Repo : get");
            throw e;
        }
    }
    async getAll(data){
        try{
            const response=await this.model.findAll();
            return response;
        }catch(e){
            logger.error("Something went wrong in the Crud Repo : getAll");
            throw e;
        }
    }
    async update(id,data){
        try{
            const response=await this.model.update(data,{
               where:{
                id:id
               }
            });
            return response;
        }catch(e){
            logger.error("Something went wrong in the Crud Repo : update");
            throw e;
        }
    }
}

module.exports=crudRepository;
