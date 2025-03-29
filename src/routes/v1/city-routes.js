const express=require("express");
const Router=express.Router();
const {cityController}=require("../../controllers");
 const {citymiddleware}=require("../../middlewares");
Router.post("/",citymiddleware.citymiddleware,cityController.createCity);
module.exports=Router;