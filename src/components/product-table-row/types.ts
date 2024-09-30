import { IProduct } from "../product-management";

export interface IProductTableRow {
  rowData: IProduct;
  onDeleteProduct: (id: string) => void;
  onUpdateProduct: (product: FormData) => void;
}
