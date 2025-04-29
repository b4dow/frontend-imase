export interface Product {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
  slug: string;
  public_id: string;
  url: string;
  available: boolean;
}
