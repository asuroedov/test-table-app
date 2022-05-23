import { makeAutoObservable } from "mobx";
import TransportationService from "../api/transportationService";
import { config } from "../utils/config";
import { TransportationInterface } from "../types/Transportation";
import { FiltersInterface } from "../types/FiltersInterface";

const initialFilterValues: FiltersInterface = {
  limit: config.tableRowsLimit,
  orderby: "ASC",
  page: 1,
  sort: "id",
  where: "",
};

class TransportationStore {
  transportations: TransportationInterface[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;

  filters: FiltersInterface = initialFilterValues;
  afterRequestFilters: FiltersInterface = initialFilterValues;

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: number) {
    this.filters.page = page;
  }

  setWhere(where: string) {
    this.filters.where = where;
  }

  setSort(sortBy: string) {
    this.filters.sort = sortBy;
  }

  setOrderBy(orderByASC: boolean) {
    this.filters.orderby = orderByASC ? "ASC" : "DESC";
  }

  async getList() {
    this.isLoading = true;
    const [data, error] = await TransportationService.getList(this.filters);
    this.isLoading = false;

    if (!data || error) {
      this.filters = { ...this.afterRequestFilters };
      console.log(error);
      return;
    }

    this.transportations = data.rows;
    this.totalCount = data.totalCount;
    this.afterRequestFilters = { ...this.filters };
  }
}

export default new TransportationStore();
