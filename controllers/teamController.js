import teamServices from "../services/teamServices.js";
import responseHandler from "../utlis/responseHandler.js";
import { StatusCodes } from "http-status-codes"


export const getAllTeam = async (req, res) => {
    console.log("managerId")
    const managerId = req.params.id
    
    const data = await teamServices.getAllTeam(managerId);
    console.log("data",data)
    return responseHandler(res, StatusCodes.OK, true, "Users fetch successfully", data);
}

export const editTeam = async (req, res) => {
    const id = req.params.id;
    const data = await teamServices.editTeam(req.body,id);
    return responseHandler(res, StatusCodes.ACCEPTED, true, data.msg);
}

export const deleteTeam = async (req, res) => {
    const id = req.params.id;
    const data = await teamServices.deleteTeam(id);
    return responseHandler(res, StatusCodes.OK, true, data.msg);
}

export const addTeam = async (req, res) => {
    const id = req.params.id;
    const data = await teamServices.addTeam(req.body,id);
    return responseHandler(res, StatusCodes.OK, true, "Team Added successfully", data);
}