export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  featuredImage: string;
}

export enum StockFilters {
  All = "all",
  NoStock = "nostock",
  InStock = "instock",
}
