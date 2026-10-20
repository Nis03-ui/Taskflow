import dotenv from "dotenv";
dotenv.config();
export const env = {
    PORT: process.env.PORT || 5000,
    JWT_SECERT: process.env.JWT_SECERT,
    DATABASE_URL: process.env.DATABASE_URL
};
