import { StockFilters } from "../product-management";

export interface IProductStockFilter {
  onStockFilterChange: (filter: StockFilters) => void;
}
