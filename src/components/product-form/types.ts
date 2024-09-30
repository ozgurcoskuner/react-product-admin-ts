import { IProduct } from "../product-management";

export interface IProductForm {
  productToEdit?: IProduct;
  onSubmit: (data: FormData) => void;
  onCancel: () => void;
}
