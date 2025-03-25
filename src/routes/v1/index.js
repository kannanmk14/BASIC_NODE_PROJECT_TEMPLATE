const express=require("express");

const Router=express.Router();
const {infoController}=require("../../controllers");
Router.get("/info",infoController.info);
module.exports=Router;