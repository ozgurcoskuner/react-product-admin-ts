import { IProduct } from "../product-management";

export interface IProductRowActions {
  rowData: IProduct;
  onDeleteProduct: (id: string) => void;
  onUpdateProduct: (product: FormData) => void;
}
