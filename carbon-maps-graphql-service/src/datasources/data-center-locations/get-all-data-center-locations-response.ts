export type GetAllDataCenterLocationsResponse = {
  name: string,
  data_center: string,
  data_center_operator: string,
  building_id: number,
  building_address: string,
  building_city_state_postal: string,
  latitude: string,
  longitude: string,
  metro_area: string,
  country: string,
  slug?: string,
  [key: string]: any,
}[];

export default GetAllDataCenterLocationsResponse;