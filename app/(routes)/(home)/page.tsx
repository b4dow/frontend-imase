import { AboutSection } from "./components/AboutSection";
import { CarouselHome } from "./components/CarouselHome";
import { ProductSection } from "./components/ProductSection";
import { ServiceSection } from "./components/ServiceSection";

export default function HomePage() {
  return (
    <>
      <CarouselHome />
      <AboutSection />
      <ServiceSection />
      <ProductSection />
    </>
  );
}
