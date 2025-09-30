"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import CaseModal from "./CaseModal";

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  results: string;
  extraImages?: string[];
  category: string;
  resultsData: {
    icon: React.ComponentType<any>;
    value: string;
    label: string;
  }[];
}

interface ImageCarouselProps {
  items: CarouselItem[];
}

const ImageCarousel = ({ items }: ImageCarouselProps) => {
  const [selectedItem, setSelectedItem] = useState<CarouselItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleItemClick = (item: CarouselItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <>
      <div className="relative w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination-custom",
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          className="swiper-coverflow"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide-coverflow">
              <div 
                className="relative group cursor-pointer h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                onClick={() => handleItemClick(item)}
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  {/* Top Content */}
                  <div>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm border border-white/30">
                      {item.category}
                    </span>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.resultsData.slice(0, 2).map((result, index) => (
                        <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
                          <div className="flex items-center gap-1.5">
                            <result.icon className="w-4 h-4 text-secondary-yellow" />
                            <span className="font-bold text-sm">{result.value}</span>
                          </div>
                          <span className="text-white/80 text-xs">{result.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className="text-2xl font-bold drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/90 drop-shadow-md mt-1">
                      {item.description}
                    </p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-secondary-yellow font-semibold">
                      Ver detalhes <Eye className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation & Pagination Container */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-full max-w-xs mx-auto">
            <button 
              className="swiper-button-prev-custom custom-nav-btn"
              aria-label="Slide Anterior"
            >
                <ChevronLeft className="w-6 h-6 text-text-main" />
            </button>
            <div className="swiper-pagination-custom flex-grow !relative !bottom-0"></div>
            <button 
              className="swiper-button-next-custom custom-nav-btn"
              aria-label="Próximo Slide"
            >
                <ChevronRight className="w-6 h-6 text-text-main" />
            </button>
        </div>
      </div>

      <CaseModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ImageCarousel;