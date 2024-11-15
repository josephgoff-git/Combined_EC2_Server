import mysql from "mysql"
import dotenv from 'dotenv';
dotenv.config();

export const db = mysql.createConnection({
    host: "aws-db2.c9wkcmm26naa.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: process.env.DB_PW,
    database: "online_store"
})

export const db_reis = mysql.createConnection({
    host: "aws-db2.c9wkcmm26naa.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: process.env.DB_PW,
    database: "reis"
})

export const db_social = mysql.createConnection({
    host: "aws-db2.c9wkcmm26naa.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: process.env.DB_PW,
    database: "social"
})