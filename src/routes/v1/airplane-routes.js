const express=require("express");
const Router=express.Router();
const {AirplaneController}=require("../../controllers");
const {Airplanemiddlewares}=require("../../middlewares");
Router.post("/",Airplanemiddlewares.Airplanemiddleware,AirplaneController.createAirplane);
Router.get("/",AirplaneController.getAirplanes);
Router.get("/:id",AirplaneController.getAirplane);
Router.delete("/:id",AirplaneController.destroyAirplane)
Router.put("/:id",AirplaneController.updateAirplane)
module.exports=Router;