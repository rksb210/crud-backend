import { DataTypes } from "sequelize";
import connectDB from "../../db/connect.js";

 const RegistrationModel = connectDB.define("Registration",{
    registration_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
      },
     username:{
        type:DataTypes.STRING,
        allowNull:false,
     },
     emailid:{
        type:DataTypes.STRING,
        allowNull:false,
        unique: true
     },
     password:{
        type:DataTypes.STRING,
        allowNull:false,
     }
 },
)
export default RegistrationModel