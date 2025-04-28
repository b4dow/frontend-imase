export interface Service {
  id: string;
  name: string;
  description: string;
  image: {
    url: string;
  };
  public_id: string;
  url: string;
  slug: string;
  available: boolean;
}
