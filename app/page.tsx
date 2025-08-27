import BannerDicount from "@/components/banner-discount";
import BannerProducts from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import { FeactureProducts } from "@/components/featured-products";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner/>
      <FeactureProducts/>
      <BannerDicount/>
      <ChooseCategory />
      <BannerProducts />
    </main>
  );
}
