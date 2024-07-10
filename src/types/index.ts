export type TProduct = {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  image: string;
};

export type TCategoryInitialState = {
  category: string | null;
};

export type TFiltersInitialState = {
  searchTerm: string | null;
  categories: string[];
  sort: string | null;
};