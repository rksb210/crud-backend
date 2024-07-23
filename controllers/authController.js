import authService from "../services/authServices.js"
import responseHandler from "../utlis/responseHandler.js";
import { StatusCodes } from "http-status-codes"


export const register = async (req, res) => {
    const data = await authService.register(req.body);
    return responseHandler(res, StatusCodes.CREATED, true, data.msg)
}

export const login = async (req, res) => {
    const data = await authService.login(req.body);
    return responseHandler(res, StatusCodes.OK, true, "User logged in successfully", data);
}

export const getUsers = async (req, res) => {
    console.log(" parseInt(req.params.size)", req.query.page)
    const page = parseInt(req.query.page) || 1
    const size = parseInt(req.query.size) || 5

    const data = await authService.getUsers(page,size);
    return responseHandler(res, StatusCodes.OK, true, "Users fetch successfully", data);
}

export const editUsers = async (req, res) => {
    const id = req.params.id;
    const data = await authService.editUsers(req.body,id);
    return responseHandler(res, StatusCodes.ACCEPTED, true, data.msg);
}

export const deleteUsers = async (req, res) => {
    const id = req.params.id;
    const data = await authService.deleteUsers(id);
    return responseHandler(res, StatusCodes.OK, true, data.msg);
}