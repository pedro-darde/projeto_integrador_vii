import { DataSource } from "typeorm";
import dotenv from 'dotenv'
import { Software } from "../models/Software";
import { Requirement } from "../models/Requirement";
import {User} from "../models/User";

dotenv.config()
export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Software, Requirement, User],
    subscribers: [],
    migrations: [__dirname + "/migrations/*{.js,.ts}"],
})