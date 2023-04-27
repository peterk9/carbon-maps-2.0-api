import { RESTDataSource } from '@apollo/datasource-rest';

import { BalancingAuthority } from '../../__generated__/resolvers-types';
import { GetBalancingAuthorityResponse } from './get-balancing-authority-response';

export class BalancingAuthorityAPI extends RESTDataSource {

  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getBalancingAuthority(filter: {
    latitude: string,
    longitude: string
  }): Promise<BalancingAuthority> {

    const response = await this.get(
      'balancingAuthority',
      {
        params: {
          latitude: filter.latitude,
          longitude: filter.longitude
        }
      }
    ) as GetBalancingAuthorityResponse;

    return {
      id: response.ba,
      lastUpdateSeconds: response.freq,
      percent: response.percent,
      gcO2eqkWh: response.gcO2eqkWh,
      pointTime: response.point_time
    };
  }
}

export default BalancingAuthorityAPI;