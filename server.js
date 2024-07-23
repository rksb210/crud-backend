import "dotenv/config";
import "express-async-errors";
import express from "express"
import mysql from "mysql2/promise";
import connectDB from "./db/connect.js";
import config from "./db/config.js";
import authRouter from "./routes/authRoutes.js";
import teamRouter from "./routes/teamRoutes.js"
import dropdownRouter from "./routes/dropdownRoutes.js"

import bodyParser from "body-parser";
import cors from "cors"
import morgan from "morgan";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use('/api', authRouter)
app.use('/api', teamRouter)
app.use('/api', dropdownRouter )




app.use(errorHandlerMiddleware)



const port = process.env.PORT;
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening to PORT ${port}`);
        })
        const connection = await mysql.createConnection(config);
        await connection.query("CREATE DATABASE IF NOT EXISTS crud");
        await connection.end();
        await connectDB.authenticate();
        await connectDB.sync({force: false,alter:false});
        console.log("MySQL Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}
start();