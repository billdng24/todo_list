import mysql from "mysql2/promise";

const pool = mysql.createPool({
  database: process.env.DB_NAME || "todolist",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "123456",
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "3306"),
});


export default pool;
