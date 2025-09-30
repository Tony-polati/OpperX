"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { ChevronLeft, ChevronRight, Eye, TrendingUp, Users, Award, MessageCircle } from "lucide-react";
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
      <div className="w-full max-w-6xl mx-auto py-12">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
            el: ".swiper-pagination",
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
                className="relative group cursor-pointer"
                onClick={() => handleItemClick(item)}
              >
                {/* Enhanced overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                
                {/* Image with hover effects */}
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                />
                
                {/* Category Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur-sm text-white border border-white/30">
                    {item.category}
                  </span>
                </div>
                
                {/* Click indicator */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                {/* Results highlighting */}
                <div className="absolute top-16 left-4 right-4 z-20">
                  <div className="flex gap-2">
                    {item.resultsData.map((result, index) => (
                      <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/30">
                        <div className="flex items-center gap-1">
                          <result.icon className="w-4 h-4 text-white" />
                          <span className="text-white font-bold text-sm">{result.value}</span>
                        </div>
                        <span className="text-white/80 text-xs">{result.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-lg">
                    {item.title}
                  </h3>
                  <p className="text-white/90 text-lg drop-shadow-md">
                    {item.description}
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white">
                      Clique para ver detalhes
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
          
          {/* Custom Navigation Buttons */}
          <div className="swiper-button-next custom-nav-btn">
            <ChevronRight className="w-8 h-8 text-white" />
          </div>
          <div className="swiper-button-prev custom-nav-btn">
            <ChevronLeft className="w-8 h-8 text-white" />
          </div>
          
          {/* Custom Pagination */}
          <div className="swiper-pagination !bottom-8"></div>
        </Swiper>
      </div>

      {/* Case Modal */}
      <CaseModal 
        item={selectedItem} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </>
  );
};

export default ImageCarousel;