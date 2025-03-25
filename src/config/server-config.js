const dotenv=require('dotenv');//this returns a object

dotenv.config();//allows to access environment varable inside this obj so after this in process object env process.env all environment variable will be there
module.exports={
    PORT:process.env.PORT
};