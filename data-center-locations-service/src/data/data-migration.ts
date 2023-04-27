import { PrismaClient } from '@prisma/client';

import { allLocations } from './data-center-locations';

const prisma = new PrismaClient();

const migrate = async () => {
  await Promise.all(allLocations.map((dcl) => {
    return prisma.dataCenterLocation.create({
      data: {
        name: dcl.name,
        dataCenter: dcl.data_center,
        dataCenterOperator: dcl.data_center_operator,
        buildingId: dcl.building_id,
        buildingAddress: dcl.building_address,
        buildingCityStatePostal: dcl.building_city_state_postal,
        latitude: dcl.latitude,
        longitude: dcl.longitude,
        metroArea: dcl.metro_area,
        country: dcl.country,
        slug: dcl.slug!
      }
    })
  }))
}

migrate().then().catch(console.error);
