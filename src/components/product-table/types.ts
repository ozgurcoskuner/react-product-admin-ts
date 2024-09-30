import { IProduct } from "../product-management/types";

export interface IProductTable {
  products: IProduct[];
  deleteProduct: (id: string) => void;
  updateProduct: (updatedProduct: FormData) => void;
}
