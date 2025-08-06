export interface Supplier {
  id_supplier: string;
  name?: string;
  description?: string;
  email?: string;
  phone?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SupplierCreate {
  name: string;
  description?: string;
  email?: string;
  phone?: string;
}
