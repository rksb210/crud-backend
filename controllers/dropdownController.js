import dropdownServices from "../services/dropdownServices.js";
import responseHandler from "../utlis/responseHandler.js";
import { StatusCodes } from "http-status-codes"

export const getcountry = async (req,res) =>{
    const data = await dropdownServices.country(req.body);
    return responseHandler(res, StatusCodes.OK, true, "Data found successfully", data);

}

export const getstate = async (req,res) =>{
    const id = req.params.id
    console.log("rtttt",id)
    const data = await dropdownServices.state(id);
    return responseHandler(res, StatusCodes.OK, true, "Data found successfully", data);

}
export const getdistrict = async (req,res) =>{
    const id = req.params.id
    console.log("rtttt",id)
    const data = await dropdownServices.district(id);
    return responseHandler(res, StatusCodes.OK, true, "Data found successfully", data);

}
export const gettown = async (req,res) =>{

   const {country_id,state_id,district_id} = req.query

    console.log("oyyyee",country_id,state_id,district_id)
    const data = await dropdownServices.town(country_id,state_id,district_id);
    return responseHandler(res, StatusCodes.OK, true, "Data found successfully", data);

}