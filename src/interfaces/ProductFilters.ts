export interface ProductFilters {
  page: number;
  limit: number;
  search?: string;
  category?: string;
  sortBy?: string;
  order?: string;
}
