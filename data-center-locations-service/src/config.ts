import dotenv from 'dotenv';

dotenv.config();

export const config = {
    api: {
        port: process.env.PORT || 8081,
        name: process.env.SERVER_NAME || "data-center-locations-service"
    },
};