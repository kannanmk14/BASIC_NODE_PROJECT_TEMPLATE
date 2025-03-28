const express=require("express");
const Router=express.Router();
const {AirplaneController}=require("../../controllers");
const {Airplanemiddlewares}=require("../../middlewares");
Router.post("/",Airplanemiddlewares.Airplanemiddleware,AirplaneController.createAirplane);
module.exports=Router;