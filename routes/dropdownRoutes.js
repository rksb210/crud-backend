import express from "express"
import { getcountry,getstate,getdistrict,gettown } from "../controllers/dropdownController.js"
const router = express.Router()

router.get('/getcountry',getcountry)
router.get('/getstate/:id',getstate)
router.get('/getdistrict/:id',getdistrict)
router.get('/gettown',gettown)



export default router