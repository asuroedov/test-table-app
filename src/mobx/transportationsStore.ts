import { makeAutoObservable } from "mobx";
import TransportationService from "../api/transportationService";
import { config } from "../utils/config";
import { TransportationInterface } from "../types/Transportation";
import { FiltersInterface } from "../types/FiltersInterface";

class TransportationStore {
  transportations: TransportationInterface[] = [];
  totalCount: number = 0;
  isLoading: boolean = false;
  paginationPage: number = 1;

  filters: FiltersInterface = {
    limit: config.tableRowsLimit,
    orderby: "ASC",
    page: 1,
    sort: "id",
    where: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  setPage(page: number) {
    this.filters.page = page;
  }

  setWhere(where: string) {
    this.filters.where = where;
  }

  async getList() {
    this.isLoading = true;
    const [data, error] = await TransportationService.getList(this.filters);
    this.isLoading = false;
    if (!data || error) {
      this.filters.page = this.paginationPage;
      console.log(error);
      return;
    }

    this.transportations = data.rows;
    this.totalCount = data.totalCount;
    this.paginationPage = this.filters.page;
  }
}

export default new TransportationStore();
