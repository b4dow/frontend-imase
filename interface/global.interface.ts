export interface Item {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: {
    url: string;
  };
  public_id: string;
  url: string;
  available: boolean;
}
