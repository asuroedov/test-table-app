import $api from "./http";
import { errorHandler } from "../utils/errorHandler";
import { FiltersInterface } from "../types/FiltersInterface";
import { TransportationInterface } from "../types/Transportation";

class TransportationService {
  static async getList(filters: FiltersInterface) {
    return errorHandler<TransportationInterface[]>(() => $api.get("/transportations", { params: { ...filters } }));
  }
}

export default TransportationService;
