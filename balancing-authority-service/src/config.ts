import dotenv from 'dotenv';

dotenv.config();

export const config = {
    api: {
        port: process.env.PORT || 8082,
        name: process.env.SERVER_NAME || "balancing-authority-service"
    },
    wattTimeApi: {
        userName: process.env.WATTTIME_USERNAME!,
        password: process.env.WATTTIME_PASSWORD!,
        url: "https://api2.watttime.org/v2"
    },
};