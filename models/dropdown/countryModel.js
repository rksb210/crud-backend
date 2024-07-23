import connectDB from "../../db/connect.js";
import { DataTypes } from "sequelize";

const CountryModel = connectDB.define("Country",{
    country_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    country_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
   
},{timestamps:false})

export default CountryModel