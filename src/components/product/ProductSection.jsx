import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HeaderSection from "../product/HeaderSection";
import ProductCard from "../product/ProductCard";
import { useState, useEffect } from "react";

const ProductSection = ({
  products,
  icon,
  primaryText,
  secondaryText,
  iconBgColor,
  primaryTextColor,
  secondaryTextColor,
  underlineColor,
  showViewAll,
}) => {
  const [api, setApi] = useState(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!api) return;

    const updateScrollState = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    api.on("select", updateScrollState);
    api.on("init", updateScrollState);

    // Kiểm tra ban đầu
    updateScrollState();

    return () => {
      api.off("select", updateScrollState);
      api.off("init", updateScrollState);
    };
  }, [api]);

  // Chia mảng sản phẩm thành các nhóm 4 sản phẩm
  const chunkSize = 4;
  const productGroups = [];
  for (let i = 0; i < products.length; i += chunkSize) {
    productGroups.push(products.slice(i, i + chunkSize));
  }

  // Ẩn cả 2 nút nếu chỉ có 1 slide
  const shouldShowButtons = productGroups.length > 1;

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8 relative">
      {/* Tiêu đề khối */}
      <HeaderSection
        icon={icon}
        primaryText={primaryText}
        secondaryText={secondaryText}
        iconBgColor={iconBgColor}
        primaryTextColor={primaryTextColor}
        secondaryTextColor={secondaryTextColor}
        underlineColor={underlineColor}
        showViewAll={showViewAll}
      />

      {/* Carousel sản phẩm */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          slidesToScroll: 1,
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {productGroups.map((group, groupIndex) => (
            <CarouselItem key={groupIndex}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-1">
                {group.map((product) => (
                  <ProductCard product={product} key={product.productId} />
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Nút điều hướng - Ẩn/hiện theo điều kiện */}
        {shouldShowButtons && (
          <>
            <CarouselPrevious
              className={`absolute left-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                canScrollPrev ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
            <CarouselNext
              className={`absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300 ${
                canScrollNext ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default ProductSection;
