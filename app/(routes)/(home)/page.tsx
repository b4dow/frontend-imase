import { About, Carousel, Product, Service } from "components/home";

export default function HomePage() {
  return (
    <>
      <Carousel />
      <About />
      <Service />
      <Product />
    </>
  );
}
