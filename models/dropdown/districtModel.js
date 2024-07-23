import connectDB from "../../db/connect.js";
import { DataTypes } from "sequelize";
import StateModel from "./stateModel.js";

const DistrictModel = connectDB.define("District",{
    district_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    district_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    state_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
},{timestamps:false})

StateModel.hasMany(DistrictModel,{foreignKey:"state_id"})

export default  DistrictModel