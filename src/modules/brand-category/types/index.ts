export interface BrandCategoryType {
  id: number | string | undefined;
  name: string;
  brand_id: number;
}
export interface GetBrandCategory {
  id: number | string | undefined;
  params: {
    limit: number;
    search?: string;
    page: number;
  };
}
