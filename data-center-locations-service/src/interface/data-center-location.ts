/**
 * @interface DataCenterLocation
 */
export interface DataCenterLocation {
    id: number,
    name: string,
    dataCenter: string,
    dataCenterOperator: string,
    buildingId: number,
    buildingAddress: string,
    buildingCityStatePostal: string,
    latitude: string,
    longitude: string,
    metroArea: string,
    country: string,
    slug?: string
}