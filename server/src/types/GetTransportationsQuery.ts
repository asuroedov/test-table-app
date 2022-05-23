export interface GetTransportationsQueryInterface {
  limit: number;
  page: number;
  sort: string;
  orderby: "ASC" | "DESC";
  where: string;
}
