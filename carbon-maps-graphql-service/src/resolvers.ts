import { Resolvers } from './__generated__/resolvers-types';

export const resolvers: Resolvers = {
  Query: {
    balancingAuthority: async (_parent, { filter }, { dataSources }, _info) => {
      const longitude = filter.longitude as string;
      const latitude = filter.latitude as string;
      return dataSources.balancingAuthority.getBalancingAuthority({ longitude, latitude });
    },
    dataCenterLocations: async (_parent, _args, { dataSources }, _info) => {
      return dataSources.dataCenterLocations.getAllDataCenterLocations();
    },
  },
  DataCenterLocation: {
    balancingAuthority: ({ longitude, latitude }, _, { dataSources }) => {
      return dataSources.balancingAuthority.getBalancingAuthority({ latitude, longitude });
    }
  }
};

export default resolvers;