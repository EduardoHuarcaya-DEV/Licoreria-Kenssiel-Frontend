import { Category } from "./category-interface";
import { Supplier } from "./supplier-interface";

export interface Product {
  id_product: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  category: Category;
  supplier: Supplier;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductCreate {
  name: string;
  description: string;
  price: number;
  stock: number;
  imgUrl: string;
  id_category: string;
  id_supplier: string;
}
