export interface QueryParams {
  filter?: {
    [key: string]: string
  }
  limit?: number,
  offset?: number
}

export default QueryParams;