import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  port: process.env.PORT,
  database_URL_LOCAL: process.env.DATABASE_URL_LOCAL,
  jwt_Secret: process.env.JWT_SECRET,
  jwt_Expiration: process.env.JWT_EXPIRATION,
  node_Env: process.env.NODE_ENV,
};
