import dotenv from 'dotenv';

dotenv.config();

export const config = {
  api: {
    port: Number.parseInt(process.env.PORT!) || 8080,
    name: process.env.SERVER_NAME || "carbon-maps-graphql-service"
  },
  dataSources: {
    balancingAuthority: {
      url: process.env.BALANCING_AUTHORITY_SERVICE || "localhost:8082"
    },
    dataCenterLocationsService: {
      url: process.env.DATA_CENTER_LOCATIONS_SERVICE || "localhost:8081"
    }
  }
};