import dotenv from "dotenv";

dotenv.config();

export default {
  jwt: {
    expiresIn: process.env.JWT_EXPIRES_IN || "1d",
    secret: process.env.JWT_SECRET,
  },
  mongoURL: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/books",
  port: process.env.PORT || 4000,
  saltRounds: process.env.SALT_ROUNDS || 10,
};
