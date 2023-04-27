import { RESTDataSource } from '@apollo/datasource-rest';

import { DataCenterLocation } from '../../__generated__/resolvers-types';

import { GetAllDataCenterLocationsResponse } from './get-all-data-center-locations-response';

export class DataCenterLocationsAPI extends RESTDataSource {
  constructor(url: string) {
    super();
    this.baseURL = url;
  }

  async getAllDataCenterLocations(): Promise<DataCenterLocation[]> {
    const response = await this.get('locations') as GetAllDataCenterLocationsResponse;
    return response.map((dcl) => {
      return {
        name: dcl.name,
        dataCenter: dcl.data_center,
        dataCenterOperator: dcl.data_center_operator,
        buildingId: `${dcl.building_id}`,
        buildingAddress: dcl.building_address,
        buildingCityStatePostal: dcl.building_city_state_postal,
        latitude: dcl.latitude,
        longitude: dcl.longitude,
        metroArea: dcl.metro_area,
        country: dcl.country
      }
    });
  }
}

export default DataCenterLocationsAPI;