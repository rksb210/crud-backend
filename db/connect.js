import { Sequelize } from "sequelize"
import config from "./config.js";

const { user, password, host, port } = config

const DATABASE_URL = `mysql://${user}:${password}@${host}:${port}/crud`
const connectDB = new Sequelize(DATABASE_URL, { logging: false });

export default connectDB;