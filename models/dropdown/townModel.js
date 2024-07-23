import connectDB from "../../db/connect.js";
import { DataTypes } from "sequelize";
import StateModel from "./stateModel.js";
import CountryModel from "./countryModel.js";
import DistrictModel from "./districtModel.js";



const TownModel = connectDB.define("Town",{
    town_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    town_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
   
},{timestamps:false})

StateModel.hasMany(TownModel,{foreignKey:"state_id"})
CountryModel.hasMany(TownModel,{foreignKey:"country_id"})
DistrictModel.hasMany(TownModel,{foreignKey:"district_id"})

export default  TownModel