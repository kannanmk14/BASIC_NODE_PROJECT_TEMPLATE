const express=require("express");
 const app=express();

 const apiRoute=require("./routes");
 const {ServerConfig,logger}=require("./config");
 app.use("/api",apiRoute);
 
 app.listen(ServerConfig.PORT,()=>{
    console.log(`API is up and running ${ServerConfig.PORT}`);
    logger.info("Successfully started the server",{});
 })