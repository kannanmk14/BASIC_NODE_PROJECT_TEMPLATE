const express=require("express");
 const app=express();

 const apiRoute=require("./routes");
 const {ServerConfig,logger}=require("./config");
 app.use(express.json());
 app.use(express.urlencoded({extended:true}));
 app.use("/api",apiRoute);
 
 app.listen(ServerConfig.PORT,async ()=>{
    console.log(`API is up and running ${ServerConfig.PORT}`);
   //  logger.info("Successfully started the server",{});
   //bad codes
   const {city,Airplane}=require("./models");
   // const Tirunelveli=await city.findByPk(1);
   // console.log(City);
   //   const airport=await Tirunelveli.createAirport({name:"thevar",code:"MAR",cityId:Tirunelveli.id});//without cityId also works
   //   console.log(airport);
   // await city.destroy({
   //    where:{
   //       id:1
   //    }
   // });
 })