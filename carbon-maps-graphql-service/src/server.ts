import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { config } from './config';
import { MyContext } from './context';
import { DataCenterLocationsAPI } from './datasources';
import BalancingAuthorityAPI from './datasources/balancing-authority/balancing-authority-api';
import { resolvers } from './resolvers';
import { typeDefs } from './schema';

export const server = {
  start: async () => {

    const server = new ApolloServer<MyContext>({
      typeDefs,
      resolvers,
    });

    const { url } = await startStandaloneServer(server, {
      listen: { port: config.api.port },
      context: async () => {
        return {
          dataSources: {
            dataCenterLocations: new DataCenterLocationsAPI(config.dataSources.dataCenterLocationsService.url),
            balancingAuthority: new BalancingAuthorityAPI(config.dataSources.balancingAuthority.url)
          }
        }
      }
    });

    console.log(`🚀  Server ready at: ${url}`);

  }
}

export default server;



