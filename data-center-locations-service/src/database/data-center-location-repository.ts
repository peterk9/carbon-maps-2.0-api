import { PrismaClient } from "@prisma/client";

import { DataCenterLocation } from "../interface";

import { Repository, QueryParams } from "./interface";

export class DataCenterLocationRepository implements Repository<DataCenterLocation> {
  private prisma: PrismaClient
  private MAX_LIMIT: number

  constructor() {
    this.prisma = new PrismaClient;
    this.MAX_LIMIT = 20;
  }

  async getAll(query?: QueryParams): Promise<DataCenterLocation[]> {
    console.log(`[${this.constructor.name}] calling database...`);

    const queryLimit = query?.limit == null || query?.limit > this.MAX_LIMIT ? this.MAX_LIMIT : query?.limit;

    const response = await this.prisma.dataCenterLocation.findMany({
      skip: query?.offset,
      take: queryLimit
    });
    console.log(`[${this.constructor.name}] fetched [${response.length}] records from db.`);
    return response;
  }
}

export default DataCenterLocationRepository;