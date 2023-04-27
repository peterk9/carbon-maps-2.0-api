import { QueryParams } from "./query-params";

export interface Repository<T> {
  getAll(query?: QueryParams): Promise<T[]>;
}

export default Repository;