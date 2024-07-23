import express from "express"
import jwtAuth from "../middlewares/jwtAuth.js"
import { addTeam, deleteTeam, editTeam, getAllTeam } from "../controllers/teamController.js"
import teamSchema from "../validations/teamSchema.js"
import validateData from "../middlewares/validateData.js";


const router = express.Router()

router.post('/addteam/:id', validateData(teamSchema.addteam, "body"),jwtAuth, addTeam);
router.get('/getteam/:id',jwtAuth,getAllTeam)
router.patch('/updateteam/:id', validateData(teamSchema.team, "body"), jwtAuth, editTeam)
router.delete('/deleteteam/:id',validateData(teamSchema.delete, "params"), jwtAuth,deleteTeam );


export default router