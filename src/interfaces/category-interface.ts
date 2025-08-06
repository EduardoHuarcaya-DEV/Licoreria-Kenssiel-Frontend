export interface Category {
  id_category: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryCreate {
  name: string;
  description: string;
}