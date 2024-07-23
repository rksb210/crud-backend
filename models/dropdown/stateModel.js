import connectDB from "../../db/connect.js";
import { DataTypes } from "sequelize";
import CountryModel from "./countryModel.js";

const StateModel = connectDB.define("State",{
    state_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    state_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    country_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
   
},{timestamps:false})

CountryModel.hasMany(StateModel,{foreignKey:"country_id"})

export default  StateModel