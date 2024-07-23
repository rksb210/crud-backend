import validateData from "../middlewares/validateData.js";
import express from "express";
import authSchema from "../validations/authSchema.js";
import { register,login, getUsers, editUsers, deleteUsers } from "../controllers/authController.js";
import jwtAuth from "../middlewares/jwtAuth.js";
const router = express.Router()

router.post('/register', validateData(authSchema.register, "body"), register);
router.post('/login', validateData(authSchema.login, "body"), login);
router.get('/getuser',  getUsers);
router.patch('/edituser/:id', validateData(authSchema.delete, "params"), validateData(authSchema.update, "body"), jwtAuth,editUsers );
router.delete('/deleteuser/:id',validateData(authSchema.delete, "params"), jwtAuth,deleteUsers );




export default router