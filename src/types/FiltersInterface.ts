export interface FiltersInterface {
  limit: number;
  page: number;
  sort: string;
  orderby: "ASC" | "DESC";
  where: string;
}
