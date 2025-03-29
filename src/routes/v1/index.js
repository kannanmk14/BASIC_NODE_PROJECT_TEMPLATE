const express=require("express");

const Router=express.Router();
const {infoController }=require("../../controllers");
const airplanesRoutes=require("./airplane-routes");
const cityRoutes=require("./city-routes");
Router.use("/airplanes",airplanesRoutes);
Router.get("/info",infoController.info);
Router.use("/cities",cityRoutes);

module.exports=Router;