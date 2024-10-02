export interface SubCategoryType {
  id?: number | string;
  name: string;
  parent_category_id: number
}
export interface GetSubCategory {
  id: number | string | undefined;
  params: {
    search: string;
    limit: number;
    page: number;
  };
}
