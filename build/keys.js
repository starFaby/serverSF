"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./libs/dotenv");
exports.default = {
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
};
//03:12:14 
