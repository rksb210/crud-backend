import connectDB from "../../db/connect.js";
import { DataTypes } from "sequelize";
import RegistrationModel from "../user/registrationModel.js";

const TeamModel = connectDB.define("Team",{
    team_id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true, 
        autoIncrement: true,
    },
    member_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    designation:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    phonenumber:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    salary:{
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    // registration_id:{
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     references:{
    //         model:RegistrationModel,
    //         key:"registration_id"
    //     }
    // }    
},{timestamps:false})

RegistrationModel.hasMany(TeamModel,{foreignKey:"registration_id"})
// TeamModel.belongsTo(RegistrationModel,{foreignKey:"registration_id"})

export default TeamModel