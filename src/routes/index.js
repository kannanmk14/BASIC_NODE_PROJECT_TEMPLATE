const express=require("express");

const Router=express.Router();
const version=require("./v1");
Router.use("/v1",version);
module.exports=Router;