export interface Product {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
  slug: string;
  public_id: string;
  quantity?: number;
  url: string;
  available: boolean;
}
