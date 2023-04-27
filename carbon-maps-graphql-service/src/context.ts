import { BalancingAuthorityAPI, DataCenterLocationsAPI } from "./datasources";

export interface MyContext {
  dataSources: {
    balancingAuthority: BalancingAuthorityAPI;
    dataCenterLocations: DataCenterLocationsAPI;
  };
}

export default MyContext;