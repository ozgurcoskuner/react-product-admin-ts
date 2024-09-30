import { StockFilters } from "../product-management";

export interface IProductControls {
  onStockFilterChange: (filter: StockFilters) => void;
  onPriceFilterChange: (min: number, max: number) => void;
  onSortChange: (sort: string) => void;
  addProduct: (newProduct: FormData) => void;
}
