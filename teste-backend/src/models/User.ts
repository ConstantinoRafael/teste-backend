export interface User {
  id?: number;
  person_type: EPersonType;
  cnpj?: string;
  responsibleCpf?: string;
  name: string;
  mobile?: string;
  phone?: string;
  email: string;
  zip_code?: string;
  street?: string;
  number?: string;
  complement?: string;
  city?: string;
  neighborhood?: string;
  state?: string;
  terms?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const enum EPersonType {
  PHYSICS = "PHYSICS",
  JURIDIC = "JURIDIC",
}
