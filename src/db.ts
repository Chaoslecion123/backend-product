import { createConnection } from "typeorm";
//import { Users } from "./Entities/Users";
import { DB_HOST, DB_USERNAME, DB_PASSWORD, DB_PORT, DB_NAME } from "./config";
import { Products } from "./Entities/Product";

export const connectDB = async () => {
  await createConnection({
    type: "mysql",
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: Number(DB_PORT),
    // logging: true,
    synchronize: false,
    entities: [Products],
    ssl: false,
  });
};