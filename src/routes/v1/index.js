const express=require("express");

const Router=express.Router();
const {infoController }=require("../../controllers");
const airplanesRoutes=require("./airplane-routes");
Router.use("/airplanes",airplanesRoutes);
Router.get("/info",infoController.info);

module.exports=Router;