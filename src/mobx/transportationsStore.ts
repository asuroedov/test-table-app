import { makeAutoObservable } from "mobx";
import TransportationService from "../api/transportationService";
import { TransportationInterface } from "../types/Transportation";
import { FiltersInterface } from "../types/FiltersInterface";

class TransportationStore {
  transportations: TransportationInterface[] = [];
  filters: FiltersInterface = {
    limit: 10,
    orderby: "ASC",
    page: 1,
    sort: "id",
    where: "",
  };

  constructor() {
    makeAutoObservable(this);
  }

  async getList() {
    const [list, error] = await TransportationService.getList(this.filters);
    if (!list || error) return console.log(error);

    this.transportations = list;
  }
}

export default new TransportationStore();
