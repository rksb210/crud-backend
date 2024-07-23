import jwt from "jsonwebtoken";
import responseHandler from "../utlis/responseHandler.js";
import { StatusCodes } from "http-status-codes";
   
const jwtAuth = (req,res,next) => { 
    console.log("first")
     const authHeader = req.headers.authorization;  
     if(authHeader){
        const token = authHeader.split(" ")[1]
        jwt.verify(token ,process.env.JWT_SECRET,(err,user) => {
            if(err){
                return responseHandler(res,StatusCodes.FORBIDDEN,false,"Bad access token")
            }
            req.user = user
            next()
        })
     }
     else{
        return responseHandler(res,StatusCodes.UNAUTHORIZED,false,"Invalid token")
     }
}
export default jwtAuth